import { ShopServiceClient } from './gen/proto/ShopServiceClientPb';
import { CreateOrderRequest, ListOrderRequest } from './gen/proto/shop_pb';
import { Order } from '../ts-protoc-gen/gen/proto/shop_pb';
import dayjs = require('dayjs');
import { SERVER } from '../common/settings';

const createClient = () => new ShopServiceClient( SERVER.PROXY_URL );

const createOrderRequest = async (client: ShopServiceClient) => {
  const request = new CreateOrderRequest();
  request.setProductId( 'dummy-product-id' );
  request.setPaymentMethod( Order.PaymentMethod.CREDIT_CARD );

  const response = await client.createOrder( request, null );

  const resultElem = document.querySelector('.order-result')
  if (resultElem) {
    resultElem.textContent = JSON.stringify(response.getOrder().toObject(), null, '  ');
  }
}

const listOrderRequest = async (client: ShopServiceClient) => {
  const request = new ListOrderRequest();
  request.setUserName('dummy-user-name');

  const response = await client.listOrder( request, null );

  const resultElem = document.querySelector('.list-result')
  if (resultElem) {
    const table = response
      .getOrdersList()
      .map(_ => _.toObject())
      .map(_ => ({
        ..._,
        at: dayjs.unix(_.at.seconds).format(),
      }));
    resultElem.textContent = `total: ${table.length}件\n` + JSON.stringify(table, null, '  ');
  }
}


window.addEventListener('load', () => {
  const client = createClient();

  document.querySelector('button.order').addEventListener('click', async () => {
    await createOrderRequest(client);
  });

  document.querySelector('button.list').addEventListener('click', async () => {
    await listOrderRequest(client);
  });
});
