// package: shop
// file: shop-with-stream.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Order extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getPaymentMethod(): Order.PaymentMethodMap[keyof Order.PaymentMethodMap];
  setPaymentMethod(value: Order.PaymentMethodMap[keyof Order.PaymentMethodMap]): void;

  getBy(): string;
  setBy(value: string): void;

  hasAt(): boolean;
  clearAt(): void;
  getAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    productId: string,
    price: number,
    paymentMethod: Order.PaymentMethodMap[keyof Order.PaymentMethodMap],
    by: string,
    at?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export interface PaymentMethodMap {
    UNKNOWN: 0;
    CACHE: 1;
    CREDIT_CARD: 2;
    QR_CODE: 3;
  }

  export const PaymentMethod: PaymentMethodMap;
}

export class CreateOrderRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): void;

  getPaymentMethod(): Order.PaymentMethodMap[keyof Order.PaymentMethodMap];
  setPaymentMethod(value: Order.PaymentMethodMap[keyof Order.PaymentMethodMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
  static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
  export type AsObject = {
    productId: string,
    paymentMethod: Order.PaymentMethodMap[keyof Order.PaymentMethodMap],
  }
}

export class CreateOrderResponse extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): Order | undefined;
  setOrder(value?: Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  setUserName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderRequest): ListOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
  clearOrdersList(): void;
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): void;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderResponse): ListOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrderResponse;
  static deserializeBinaryFromReader(message: ListOrderResponse, reader: jspb.BinaryReader): ListOrderResponse;
}

export namespace ListOrderResponse {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

export class UploadImageRequest extends jspb.Message {
  hasFilename(): boolean;
  clearFilename(): void;
  getFilename(): string;
  setFilename(value: string): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getFileCase(): UploadImageRequest.FileCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageRequest): UploadImageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageRequest;
  static deserializeBinaryFromReader(message: UploadImageRequest, reader: jspb.BinaryReader): UploadImageRequest;
}

export namespace UploadImageRequest {
  export type AsObject = {
    filename: string,
    data: Uint8Array | string,
  }

  export enum FileCase {
    FILE_NOT_SET = 0,
    FILENAME = 1,
    DATA = 2,
  }
}

export class UploadImageResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getFilename(): string;
  setFilename(value: string): void;

  hasCompletedate(): boolean;
  clearCompletedate(): void;
  getCompletedate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadImageResponse): UploadImageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadImageResponse;
  static deserializeBinaryFromReader(message: UploadImageResponse, reader: jspb.BinaryReader): UploadImageResponse;
}

export namespace UploadImageResponse {
  export type AsObject = {
    id: string,
    filename: string,
    completedate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

