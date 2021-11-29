// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_shop_pb = require('../proto/shop_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_shop_CreateOrderRequest(arg) {
  if (!(arg instanceof proto_shop_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type shop.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_CreateOrderRequest(buffer_arg) {
  return proto_shop_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_CreateOrderResponse(arg) {
  if (!(arg instanceof proto_shop_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type shop.CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_CreateOrderResponse(buffer_arg) {
  return proto_shop_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListOrderRequest(arg) {
  if (!(arg instanceof proto_shop_pb.ListOrderRequest)) {
    throw new Error('Expected argument of type shop.ListOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListOrderRequest(buffer_arg) {
  return proto_shop_pb.ListOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListOrderResponse(arg) {
  if (!(arg instanceof proto_shop_pb.ListOrderResponse)) {
    throw new Error('Expected argument of type shop.ListOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListOrderResponse(buffer_arg) {
  return proto_shop_pb.ListOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShopServiceService = exports.ShopServiceService = {
  createOrder: {
    path: '/shop.ShopService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_shop_pb.CreateOrderRequest,
    responseType: proto_shop_pb.CreateOrderResponse,
    requestSerialize: serialize_shop_CreateOrderRequest,
    requestDeserialize: deserialize_shop_CreateOrderRequest,
    responseSerialize: serialize_shop_CreateOrderResponse,
    responseDeserialize: deserialize_shop_CreateOrderResponse,
  },
  listOrder: {
    path: '/shop.ShopService/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: proto_shop_pb.ListOrderRequest,
    responseType: proto_shop_pb.ListOrderResponse,
    requestSerialize: serialize_shop_ListOrderRequest,
    requestDeserialize: deserialize_shop_ListOrderRequest,
    responseSerialize: serialize_shop_ListOrderResponse,
    responseDeserialize: deserialize_shop_ListOrderResponse,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
