import { Server, ServerCredentials } from '@grpc/grpc-js';
import { IShopServiceServer, ShopServiceService } from './gen/proto/shop_grpc_pb';
import * as grpc from '@grpc/grpc-js';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';
import { CreateOrderResponse, ListOrderResponse, Order } from './gen/proto/shop_pb';
import { SERVER } from '../common/settings';

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

class ServerImplement implements IShopServiceServer {
  [name: string]: grpc.UntypedHandleCall;
  constructor (
    public createOrder: IShopServiceServer['createOrder'],
    public listOrder: IShopServiceServer['listOrder'],
  ) {}
}


const startServer = () => {
  const server = new Server();
  server.addService(
    ShopServiceService,
    new ServerImplement( createOrder, listOrder ),
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
