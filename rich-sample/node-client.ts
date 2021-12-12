import { ShopServiceClient } from './gen/shop-with-stream_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import {
  ListOrderRequest,
  UploadImageRequest
} from './gen/shop-with-stream_pb';
import { SERVER } from '../common/settings';
import * as fs from 'fs';
import * as path from 'path';

const createClient = () => {
  return new ShopServiceClient(
    SERVER.ADDRESS(),
    credentials.createInsecure(),
  );
}

const uploadImageRequest = async (client: ShopServiceClient) => {
  const request = new ListOrderRequest();
  request.setUserName('dummy-user-name');

  const apiRequestStream = client.uploadImage((err, value) => {
    if (err) console.error('APIエラー', err)
    console.log('API完了', {
      id: value.getId(),
      filename: value.getFilename(),
    });
  });

  const filename = 'beach-at-okinawa.jpg';
  const imagePath = path.resolve(__dirname, './images', filename);
  const kByte = 1024;

  // 画像を100kBづつ読み込むストリームを生成
  const readFileStream = fs.createReadStream(imagePath, { highWaterMark: 100 * kByte });

  // 最初にファイル名を送る
  const filenameRequest = new UploadImageRequest();
  filenameRequest.setFilename(filename);
  apiRequestStream.write(filenameRequest);

  // 画像データを送る
  let chunkNum = 1;
  readFileStream.on('data', chunk => {
    console.log('on data', {chunk: chunkNum++});
    const dataRequest = new UploadImageRequest();
    dataRequest.setData(chunk);
    apiRequestStream.write( dataRequest );
  });

  readFileStream.on('end', () => {
    console.log('on end', '= 画像の読み込み完了')
    apiRequestStream.end();
  });

  readFileStream.on('error', e => {
    console.log('画像読み込みエラー', e);
  });
};

(async () => {
  const client = createClient();
  await uploadImageRequest(client);
  await client.close();
})().catch(console.error)
