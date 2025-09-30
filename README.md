# Azure Microservices
...

# Install
Clone the repo:
```sh
git clone https://github.com/yosang/azure-microservices
```

Move into the directory and install dependencies
```sh
cd azure-microservices
npm install
```

Run the following command, open the `.env` file in a text editor and fill out the required details.
```sh
cp .env.example .env
```

Start the server with
```sh
npm start
```

# Techonolgies used
- `dotenv` - Enables import of enviroment variables from a centralized `.env` file.
- `ejs` - Enables a frontend view through expressjs.
- `express` - Express http server for `nodejs`.
- `morgan` - Useful logger that allows us to monitor responses and requests.
- `mssql` - Microsoft SQL driver
- `sequelize` - Object Relational Mapping (ORM) used for scalable database model configurations and queries.
- `express-http-proxy` - Enables request/response redirection to and from services.
- `CORS` - Enables cross-origin-resource-sharing between services.

# License
[MIT](LICENSE)