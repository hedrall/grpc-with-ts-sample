# Makefile
NPM_BIN=$(shell npm bin)
OUT_DIR="./gen"

# Path to tools
GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
PROTOC_GEN_GRPC_PATH="$(NPM_BIN)/grpc_tools_node_protoc_plugin"
PROTOC_GEN_TS_PATH="$(NPM_BIN)/protoc-gen-ts"

.PHONY: gen
gen:
	rm -rf $(OUT_DIR) && mkdir -p $(OUT_DIR)
	$(GRPC_TOOL) \
	--plugin="protoc-gen-ts=$(PROTOC_GEN_TS_PATH)" \
	--plugin=protoc-gen-grpc=$(PROTOC_GEN_GRPC_PATH) \
	--js_out="import_style=commonjs,binary:$(OUT_DIR)" \
	--grpc_out="grpc_js:$(OUT_DIR)" \
	--ts_out="service=grpc-node,mode=grpc-js:$(OUT_DIR)" \
	-I ../ \
	../proto/*.proto
