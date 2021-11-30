/**
 * @fileoverview gRPC-Web generated client stub for shop
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_shop_pb from '../proto/shop_pb';


export class ShopServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateOrder = new grpcWeb.MethodDescriptor(
    '/shop.ShopService/CreateOrder',
    grpcWeb.MethodType.UNARY,
    proto_shop_pb.CreateOrderRequest,
    proto_shop_pb.CreateOrderResponse,
    (request: proto_shop_pb.CreateOrderRequest) => {
      return request.serializeBinary();
    },
    proto_shop_pb.CreateOrderResponse.deserializeBinary
  );

  createOrder(
    request: proto_shop_pb.CreateOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_shop_pb.CreateOrderResponse>;

  createOrder(
    request: proto_shop_pb.CreateOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_shop_pb.CreateOrderResponse) => void): grpcWeb.ClientReadableStream<proto_shop_pb.CreateOrderResponse>;

  createOrder(
    request: proto_shop_pb.CreateOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_shop_pb.CreateOrderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/shop.ShopService/CreateOrder',
        request,
        metadata || {},
        this.methodDescriptorCreateOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/shop.ShopService/CreateOrder',
    request,
    metadata || {},
    this.methodDescriptorCreateOrder);
  }

  methodDescriptorListOrder = new grpcWeb.MethodDescriptor(
    '/shop.ShopService/ListOrder',
    grpcWeb.MethodType.UNARY,
    proto_shop_pb.ListOrderRequest,
    proto_shop_pb.ListOrderResponse,
    (request: proto_shop_pb.ListOrderRequest) => {
      return request.serializeBinary();
    },
    proto_shop_pb.ListOrderResponse.deserializeBinary
  );

  listOrder(
    request: proto_shop_pb.ListOrderRequest,
    metadata: grpcWeb.Metadata | null): Promise<proto_shop_pb.ListOrderResponse>;

  listOrder(
    request: proto_shop_pb.ListOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_shop_pb.ListOrderResponse) => void): grpcWeb.ClientReadableStream<proto_shop_pb.ListOrderResponse>;

  listOrder(
    request: proto_shop_pb.ListOrderRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_shop_pb.ListOrderResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/shop.ShopService/ListOrder',
        request,
        metadata || {},
        this.methodDescriptorListOrder,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/shop.ShopService/ListOrder',
    request,
    metadata || {},
    this.methodDescriptorListOrder);
  }

}

