import { Server, ServerCredentials } from '@grpc/grpc-js';
import { IShopServiceServer, ShopServiceService } from './gen/shop-with-stream_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import {
  CreateOrderResponse,
  ListOrderResponse,
  Order,
  UploadImageRequest,
  UploadImageResponse
} from './gen/shop-with-stream_pb';
import { SERVER } from '../common/settings';
import * as path from 'path';
import * as fs from 'fs';

const orderList: Order[] = [];

const createOrder: IShopServiceServer['createOrder'] = ( call, callback ) => {
  console.log('[start]: createOrder');

  // orderを作成
  const order = new Order();
  order.setProductId(call.request.getProductId());
  order.setPaymentMethod(call.request.getPaymentMethod());
  order.setPrice(Math.round(Math.random() * 10_000));
  order.setBy('dummy-user-name');
  order.setAt(Timestamp.fromDate(new Date()));

  const response = new CreateOrderResponse();
  response.setOrder(order);

  orderList.push(order);
  callback(null, response);
  console.log('[end]: createOrder');
}

const listOrder: IShopServiceServer['listOrder'] = ( call, callback ) => {
  console.log('[start]: listOrder');

  const response = new ListOrderResponse();
  response.setOrdersList(orderList.filter(order => {
    return order.getBy() === 'dummy-user-name';
  }));

  callback(null, response);
  console.log('[end]: listOrder');
}

const uploadImage: IShopServiceServer['uploadImage'] = ( call, callback ) => {
  console.log('[start]: uploadImage');

  // 受け取った画像の出力先
  const outputDir = path.resolve(__dirname, './server-image-store/server-received-image.jpg');
  let filename = '';

  // 受け取った画像データを書き込むストリーム
  const writeFileStream = fs.createWriteStream(outputDir);

  // なんらかのデータを受け取った時のイベント
  call.on('data', req /* ファイル名 or 画像データ */ => {

    // ファイル名であるか確認
    const filename = req.getFilename();
    if (filename) {
      console.log('on data', { filename });
      return;
    }

    // 画像データを受け取った場合
    const data = req.getData() /* Unit8Array */;
    // ストリームに書き込む
    writeFileStream.write(data);
    console.log('on data', { data: data.length});
  });

  // クライアントからのデータ送信が完了した時のイベント
  call.on('end', () => {
    const res = new UploadImageResponse();
    res.setId(Math.round(Math.random() * 10_000).toString())
    res.setFilename(filename);
    writeFileStream.end();
    callback(null, res);
    console.log('[end]: uploadImage');
  });

  call.on('error', e => {
    console.log('on error', e);
  });

  call.on('status', s => {
    console.log('on status', s);
  });
}

class ServerImplement implements IShopServiceServer {
  [name: string]: grpc.UntypedHandleCall;
  constructor (
    public createOrder: IShopServiceServer['createOrder'],
    public listOrder: IShopServiceServer['listOrder'],
    public uploadImage: IShopServiceServer['uploadImage'],
  ) {}
}


const startServer = () => {
  const server = new Server();
  server.addService(
    ShopServiceService,
    new ServerImplement( createOrder, listOrder, uploadImage ),
  );

  server.bindAsync(
    `0.0.0.0:${SERVER.PORT}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
      }

      server.start();
      console.log(`server start, port: ${port}`);
    }
  )
}

startServer();
