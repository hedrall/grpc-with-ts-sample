// package: shop
// file: proto/shop.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_shop_pb from "../proto/shop_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IShopServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createOrder: IShopServiceService_ICreateOrder;
    listOrder: IShopServiceService_IListOrder;
}

interface IShopServiceService_ICreateOrder extends grpc.MethodDefinition<proto_shop_pb.CreateOrderRequest, proto_shop_pb.CreateOrderResponse> {
    path: "/shop.ShopService/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_shop_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<proto_shop_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<proto_shop_pb.CreateOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_shop_pb.CreateOrderResponse>;
}
interface IShopServiceService_IListOrder extends grpc.MethodDefinition<proto_shop_pb.ListOrderRequest, proto_shop_pb.ListOrderResponse> {
    path: "/shop.ShopService/ListOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_shop_pb.ListOrderRequest>;
    requestDeserialize: grpc.deserialize<proto_shop_pb.ListOrderRequest>;
    responseSerialize: grpc.serialize<proto_shop_pb.ListOrderResponse>;
    responseDeserialize: grpc.deserialize<proto_shop_pb.ListOrderResponse>;
}

export const ShopServiceService: IShopServiceService;

export interface IShopServiceServer extends grpc.UntypedServiceImplementation {
    createOrder: grpc.handleUnaryCall<proto_shop_pb.CreateOrderRequest, proto_shop_pb.CreateOrderResponse>;
    listOrder: grpc.handleUnaryCall<proto_shop_pb.ListOrderRequest, proto_shop_pb.ListOrderResponse>;
}

export interface IShopServiceClient {
    createOrder(request: proto_shop_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: proto_shop_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: proto_shop_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: proto_shop_pb.ListOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: proto_shop_pb.ListOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    listOrder(request: proto_shop_pb.ListOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
}

export class ShopServiceClient extends grpc.Client implements IShopServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createOrder(request: proto_shop_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: proto_shop_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: proto_shop_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: proto_shop_pb.ListOrderRequest, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: proto_shop_pb.ListOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
    public listOrder(request: proto_shop_pb.ListOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_shop_pb.ListOrderResponse) => void): grpc.ClientUnaryCall;
}
