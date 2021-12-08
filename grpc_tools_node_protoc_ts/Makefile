# Makefile
OUTPUT=gen
NPM_BIN=$(shell npm bin)

# Path to Tools
NODE_PROTOC=$(NPM_BIN)/grpc_tools_node_protoc
PROTOC_GEN_TS="$(NPM_BIN)/protoc-gen-ts"

.PHONY: gen
gen:
	rm -rf $(OUTPUT) && mkdir -p $(OUTPUT)
	$(NODE_PROTOC) \
	--plugin=protoc-gen-ts=$(PROTOC_GEN_TS) \
	--js_out=import_style=commonjs,binary:$(OUTPUT) \
	--grpc_out=grpc_js:$(OUTPUT) \
	--ts_out=grpc_js:$(OUTPUT) \
	-I ../ \
	../proto/*.proto
