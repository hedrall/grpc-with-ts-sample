# Makefile
NPM_BIN=$(shell npm bin)
OUT_DIR="./gen"

# Path to tools
GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc

.PHONY: build
build:
	rm -rf bundle
	node -r esbuild-register build.ts
	rm -f public/web-client.js
	ln bundle/web-client.js public/web-client.js

.PHONY: gen
gen:
	rm -rf $(OUT_DIR) && mkdir -p $(OUT_DIR)
	$(GRPC_TOOL) \
	--js_out=import_style=commonjs:$(OUT_DIR) \
	--grpc-web_out=import_style=typescript,mode=grpcwebtext:$(OUT_DIR) \
	-I ../ \
	../proto/*.proto
