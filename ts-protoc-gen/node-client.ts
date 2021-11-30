import { ShopServiceClient } from './gen/proto/shop_grpc_pb';
import { credentials } from '@grpc/grpc-js';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  ListOrderRequest,
  ListOrderResponse,
  Order
} from './gen/proto/shop_pb';
import { SERVER } from '../common/settings';
import * as dayjs from 'dayjs';

const createClient = () => {
  return new ShopServiceClient(
    SERVER.ADDRESS(),
    credentials.createInsecure(),
  );
}

const createOrderRequest = async (client: ShopServiceClient) => {
  const request = new CreateOrderRequest();
  request.setProductId( 'dummy-product-id' );
  request.setPaymentMethod( Order.PaymentMethod.CREDIT_CARD );

  const response = await new Promise<CreateOrderResponse>( ( resolve, reject ) => {
    client.createOrder( request, ( error, response ) => {
      if ( error ) {
        console.error( 'エラーが発生しました。' );
        console.error( error );
        reject( error );
      }
      resolve( response );
    } );
  } );

  console.log( 'リクエスト成功' );
  console.log( response.getOrder().toObject() );
};

const listOrderRequest = async (client: ShopServiceClient) => {
  const request = new ListOrderRequest();
  request.setUserName('dummy-user-name')

  const response = await new Promise<ListOrderResponse>( ( resolve, reject ) => {
    client.listOrder( request, ( error, response ) => {
      if ( error ) {
        console.error( 'エラーが発生しました。' );
        console.error( error );
        reject( error );
      }
      resolve( response );
    } );
  } );

  console.log( 'リクエスト成功' );
  console.table(
    // 戻り値のオブジェクトの型付けもリッチな感じ
    response
      .getOrdersList()
      .map(_ => _.toObject())
      .map(_ => ({
        ..._,
        at: dayjs.unix(_.at.seconds).format(),
      }))
  );
};

(async () => {
  const client = createClient();
  await createOrderRequest(client);
  await listOrderRequest(client);
  await client.close();
})().catch(console.error)
