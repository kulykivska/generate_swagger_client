rm -rf result
java -jar ./swagger-codegen-cli.jar generate -o result -i project_swagger.yaml --lang typescript-angular -c swagger_config.json