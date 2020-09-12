# Swagger Client Generation Workflow

This guide walks you through the steps for validating a Swagger file, bundling it, and generating client code (e.g., for Angular) using Swagger tools.

---

## Step 1: **Validate the Swagger File (`swagger.yaml`)**

To check the Swagger file for any syntax errors or mismatches, use the `swagger-cli validate` command.

### Command:
```bash
swagger-cli validate -d project_swagger.yaml
```

### Explanation:
- `swagger-cli validate` — Command to validate the Swagger file.
- `-d project_swagger.yaml` — Specifies the path to your Swagger file to be validated.

#### Possible Errors:
- If there are errors in the `swagger.yaml` file, the command will output the errors, and you will need to fix them.
- If everything is fine, the validation will succeed with a message indicating the file is valid.

---

## Step 2: **Generate a Bundled Version of the Swagger File**

After validation, you need to bundle all related Swagger files into a single file using `swagger-cli bundle`. This is useful if your Swagger file references other files, such as schemas or components.

### Command:
```bash
swagger-cli bundle -t yaml -o swagger_bundled.yaml project_swagger.yaml
```

### Explanation:
- `swagger-cli bundle` — Command to bundle all related files into one.
- `-t yaml` — Specifies that the output should be in YAML format.
- `-o swagger_bundled.yaml` — Specifies the output file for the bundled Swagger file.
- `project_swagger.yaml` — Your original Swagger file.

After running this command, you will have a bundled version of the Swagger file named `swagger_bundled.yaml`.

#### Possible Errors:
- If the Swagger file contains errors or missing references, the command may fail to execute properly.

---

## Step 3: **Generate Client Code (e.g., for Angular)**

Now, use Swagger Codegen to generate the client code based on the `swagger.yaml` file (or its bundled version).

### Commands:
1. Remove old results:
   ```bash
   rm -rf result
   ```

2. Generate the client code:
   ```bash
   java -jar ./swagger-codegen-cli.jar generate -o result -i project_swagger.yaml --lang typescript-angular -c swagger_config.json
   ```

### Explanation:
- `rm -rf result` — Removes the old `result` folder (if it exists) to avoid mixing old and new code.
- `java -jar ./swagger-codegen-cli.jar generate` — Runs Swagger Codegen to generate the client code.
- `-o result` — Specifies the output directory where the generated code will be placed.
- `-i project_swagger.yaml` — The input Swagger file (or bundled version).
- `--lang typescript-angular` — Specifies the language for the generated client code (in this case, TypeScript for Angular).
- `-c swagger_config.json` — The configuration file that may contain additional generation settings (e.g., Angular client settings).

After running these commands, the client code for Angular will be generated in the `result` folder.

---

## Step 4: **Run All Steps in One Command**

If you want to execute all the steps in one command block (for convenience), you can chain them together using `&&` to run each command sequentially only if the previous one succeeds.

### Command:
```bash
swagger-cli validate -d project_swagger.yaml && \
    swagger-cli bundle -t yaml -o project_swagger_bundled.yaml project_swagger.yaml && \
    rm -rf result && \
    java -jar ./swagger-codegen-cli.jar generate -o result -i project_swagger.yaml --lang typescript-angular -c swagger_config.json
```

### Explanation:
- Each command is executed sequentially:
  1. Swagger file validation.
  2. Bundling the Swagger file.
  3. Removing old generated code.
  4. Generating client code.

### Notes:
- Ensure that Swagger Codegen CLI (`swagger-codegen-cli.jar`) is installed and correctly located.
- Ensure that you have all necessary dependencies and internet access if your Swagger schema uses external references.

---

## Additional Steps:

- **Configure Swagger Codegen**: If you need to adjust the client generation, you can edit the `swagger_config.json` file to specify additional parameters (e.g., options for the Angular client).
- **Use Another Language**: If you want to generate client code for a different language, replace the `--lang` parameter with the desired language (e.g., `--lang python` or `--lang java`).

---