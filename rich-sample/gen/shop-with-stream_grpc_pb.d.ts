// GENERATED CODE -- DO NOT EDIT!

// package: shop
// file: shop-with-stream.proto

import * as shop_with_stream_pb from "./shop-with-stream_pb";
import * as grpc from "@grpc/grpc-js";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOrder: grpc.MethodDefinition<shop_with_stream_pb.CreateOrderRequest, shop_with_stream_pb.CreateOrderResponse>;
  listOrder: grpc.MethodDefinition<shop_with_stream_pb.ListOrderRequest, shop_with_stream_pb.ListOrderResponse>;
  uploadImage: grpc.MethodDefinition<shop_with_stream_pb.UploadImageRequest, shop_with_stream_pb.UploadImageResponse>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer extends grpc.UntypedServiceImplementation {
  createOrder: grpc.handleUnaryCall<shop_with_stream_pb.CreateOrderRequest, shop_with_stream_pb.CreateOrderResponse>;
  listOrder: grpc.handleUnaryCall<shop_with_stream_pb.ListOrderRequest, shop_with_stream_pb.ListOrderResponse>;
  uploadImage: grpc.handleClientStreamingCall<shop_with_stream_pb.UploadImageRequest, shop_with_stream_pb.UploadImageResponse>;
}

export class ShopServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createOrder(argument: shop_with_stream_pb.CreateOrderRequest, callback: grpc.requestCallback<shop_with_stream_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: shop_with_stream_pb.CreateOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  createOrder(argument: shop_with_stream_pb.CreateOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.CreateOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: shop_with_stream_pb.ListOrderRequest, callback: grpc.requestCallback<shop_with_stream_pb.ListOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: shop_with_stream_pb.ListOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.ListOrderResponse>): grpc.ClientUnaryCall;
  listOrder(argument: shop_with_stream_pb.ListOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.ListOrderResponse>): grpc.ClientUnaryCall;
  uploadImage(callback: grpc.requestCallback<shop_with_stream_pb.UploadImageResponse>): grpc.ClientWritableStream<shop_with_stream_pb.UploadImageRequest>;
  uploadImage(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.UploadImageResponse>): grpc.ClientWritableStream<shop_with_stream_pb.UploadImageRequest>;
  uploadImage(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<shop_with_stream_pb.UploadImageResponse>): grpc.ClientWritableStream<shop_with_stream_pb.UploadImageRequest>;
}
