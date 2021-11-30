import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Order extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): Order;

  getPrice(): number;
  setPrice(value: number): Order;

  getPaymentMethod(): Order.PaymentMethod;
  setPaymentMethod(value: Order.PaymentMethod): Order;

  getBy(): string;
  setBy(value: string): Order;

  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasAt(): boolean;
  clearAt(): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    productId: string,
    price: number,
    paymentMethod: Order.PaymentMethod,
    by: string,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum PaymentMethod { 
    UNKNOWN = 0,
    CACHE = 1,
    CREDIT_CARD = 2,
    QR_CODE = 3,
  }
}

export class CreateOrderRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): CreateOrderRequest;

  getPaymentMethod(): Order.PaymentMethod;
  setPaymentMethod(value: Order.PaymentMethod): CreateOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
  static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
  export type AsObject = {
    productId: string,
    paymentMethod: Order.PaymentMethod,
  }
}

export class CreateOrderResponse extends jspb.Message {
  getOrder(): Order | undefined;
  setOrder(value?: Order): CreateOrderResponse;
  hasOrder(): boolean;
  clearOrder(): CreateOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
  static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class ListOrderRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): ListOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderRequest): ListOrderRequest.AsObject;
  static serializeBinaryToWriter(message: ListOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrderRequest;
  static deserializeBinaryFromReader(message: ListOrderRequest, reader: jspb.BinaryReader): ListOrderRequest;
}

export namespace ListOrderRequest {
  export type AsObject = {
    userName: string,
  }
}

export class ListOrderResponse extends jspb.Message {
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): ListOrderResponse;
  clearOrdersList(): ListOrderResponse;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderResponse): ListOrderResponse.AsObject;
  static serializeBinaryToWriter(message: ListOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrderResponse;
  static deserializeBinaryFromReader(message: ListOrderResponse, reader: jspb.BinaryReader): ListOrderResponse;
}

export namespace ListOrderResponse {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

