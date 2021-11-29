# Makefile
OUTPUT=gen
NPM_BIN=$(shell npm bin)

# Path to Tools
GRPC_TOOL=$(NPM_BIN)/grpc_tools_node_protoc
PROTOC_GEN_TS_PATH="$(NPM_BIN)/protoc-gen-ts"

.PHONY: gen
gen:
	rm -rf $(OUTPUT) && mkdir -p $(OUTPUT)
	$(GRPC_TOOL) \
	--plugin=protoc-gen-ts=$(PROTOC_GEN_TS_PATH) \
	--js_out=import_style=commonjs,binary:$(OUTPUT) \
	--grpc_out=grpc_js:$(OUTPUT) \
	--ts_out=grpc_js:$(OUTPUT) \
	-I ../ \
	../proto/*.proto
