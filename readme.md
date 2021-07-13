# Space Flights ‍🛸️

Space flights booking service.

## Getting Started

Clone the repository and create the dotenv file:

```shell
cp .env.example .env
```

Next, ensure that the project can build & that the tests are not failing:

```shell
# Install packages 📦
yarn

# Build & Test 🏗
yarn compile && yarn test
```

### Running the app

```bash
# development (watch mode)
$ yarn start:dev

# production mode
$ yarn start
```

### Yarn Commands

| Command                 | Action                                                           |
| ----------------------- | ---------------------------------------------------------------- |
| `yarn compile`          | Compile the project (transpile the code to JavaScript)           |
| `yarn lint`             | Analyze the code with `ESLint`                                   |
| `yarn start`            | Start the project using the transpiled code (see `yarn compile`) |
| `yarn start:dev`        | Start in watch mode: any change restarts the application         |
| `yarn test`             | Execute all the tests                                            |
| `yarn test:integration` | Execute the integration tests                                    |
| `yarn test:unit`        | Execute the unit tests                                           |
