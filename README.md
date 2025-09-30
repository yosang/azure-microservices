# Azure Microservices
Microservice Architecture based on a monolith [REST API](https://github.com/yosang/azure-restapi)

# Context
The [azure REST API](https://github.com/yosang/azure-restapi) is a single application that exposes a REST API for two database models, `cities` and `colors`, both hosted on a single `Azure SQL Managed Instance`. 

Each model is highly dependant on the one main application and one main database. This tight coupling means that in order to modify/scale or refactor a model, we need to shut down and redeploy the entire application for the changes to take effect. Additionally, if the database itself faults, both models will be unavailable due to their shared data.

By spliting these models into separate components (services), we can have them running in each their environment, and also connect them to each their own database. This enables:
- **Independent scaling** - Each application can be scaled up or down without affecting the other.
- **Isolated deployments** - Modifications, updates or refactoring can be applied independently to each service without downtime for the entire system.
- **Fault tolerance** - If one service/database fails, the other services will be just fine and wont be affected. Allowing us to act quick on it and get it back up and running.

# Techonolgies used
- `dotenv` - Enables import of enviroment variables from a centralized `.env` file.
- `ejs` - Enables a frontend view through expressjs.
- `express` - Express http server for `nodejs`.
- `morgan` - Useful logger that allows us to monitor responses and requests.
- `mssql` - Microsoft SQL driver
- `sequelize` - Object Relational Mapping (ORM) used for scalable database model configurations and queries.
- `express-http-proxy` - Enables request/response redirection to and from services.
- `CORS` - Enables cross-origin-resource-sharing between services.


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

# License
[MIT](LICENSE)