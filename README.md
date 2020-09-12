# To validate swagger.yaml

swagger-cli validate -d project_swagger.yaml

# To generate bundle

swagger-cli bundle -t yaml -o swagger_bundled.yaml project_swagger.yaml

# To generate result client

rm -rf result

java -jar ./swagger-codegen-cli.jar generate -o result -i project_swagger.yaml --lang typescript-angular -c swagger_config.json

# All together (copy & paste)

swagger-cli validate -d project_swagger.yaml && \
    swagger-cli bundle -t yaml -o project_swagger_bundled.yaml project_swagger.yaml && \
    rm -rf result && \
    java -jar ./swagger-codegen-cli.jar generate -o result -i project_swagger.yaml --lang typescript-angular -c swagger_config.json
