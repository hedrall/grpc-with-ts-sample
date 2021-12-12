// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var shop$with$stream_pb = require('./shop-with-stream_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_shop_CreateOrderRequest(arg) {
  if (!(arg instanceof shop$with$stream_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type shop.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_CreateOrderRequest(buffer_arg) {
  return shop$with$stream_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_CreateOrderResponse(arg) {
  if (!(arg instanceof shop$with$stream_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type shop.CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_CreateOrderResponse(buffer_arg) {
  return shop$with$stream_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListOrderRequest(arg) {
  if (!(arg instanceof shop$with$stream_pb.ListOrderRequest)) {
    throw new Error('Expected argument of type shop.ListOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListOrderRequest(buffer_arg) {
  return shop$with$stream_pb.ListOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_ListOrderResponse(arg) {
  if (!(arg instanceof shop$with$stream_pb.ListOrderResponse)) {
    throw new Error('Expected argument of type shop.ListOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_ListOrderResponse(buffer_arg) {
  return shop$with$stream_pb.ListOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_UploadImageRequest(arg) {
  if (!(arg instanceof shop$with$stream_pb.UploadImageRequest)) {
    throw new Error('Expected argument of type shop.UploadImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_UploadImageRequest(buffer_arg) {
  return shop$with$stream_pb.UploadImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_shop_UploadImageResponse(arg) {
  if (!(arg instanceof shop$with$stream_pb.UploadImageResponse)) {
    throw new Error('Expected argument of type shop.UploadImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_shop_UploadImageResponse(buffer_arg) {
  return shop$with$stream_pb.UploadImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ShopServiceService = exports.ShopServiceService = {
  createOrder: {
    path: '/shop.ShopService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: shop$with$stream_pb.CreateOrderRequest,
    responseType: shop$with$stream_pb.CreateOrderResponse,
    requestSerialize: serialize_shop_CreateOrderRequest,
    requestDeserialize: deserialize_shop_CreateOrderRequest,
    responseSerialize: serialize_shop_CreateOrderResponse,
    responseDeserialize: deserialize_shop_CreateOrderResponse,
  },
  listOrder: {
    path: '/shop.ShopService/ListOrder',
    requestStream: false,
    responseStream: false,
    requestType: shop$with$stream_pb.ListOrderRequest,
    responseType: shop$with$stream_pb.ListOrderResponse,
    requestSerialize: serialize_shop_ListOrderRequest,
    requestDeserialize: deserialize_shop_ListOrderRequest,
    responseSerialize: serialize_shop_ListOrderResponse,
    responseDeserialize: deserialize_shop_ListOrderResponse,
  },
  uploadImage: {
    path: '/shop.ShopService/UploadImage',
    requestStream: true,
    responseStream: false,
    requestType: shop$with$stream_pb.UploadImageRequest,
    responseType: shop$with$stream_pb.UploadImageResponse,
    requestSerialize: serialize_shop_UploadImageRequest,
    requestDeserialize: deserialize_shop_UploadImageRequest,
    responseSerialize: serialize_shop_UploadImageResponse,
    responseDeserialize: deserialize_shop_UploadImageResponse,
  },
};

exports.ShopServiceClient = grpc.makeGenericClientConstructor(ShopServiceService);
