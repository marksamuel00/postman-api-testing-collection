# Postman API Testing Collection

![Postman](https://img.shields.io/badge/Postman-Collection_v2.1-FF6C37?logo=postman&logoColor=white)
![Newman](https://img.shields.io/badge/Newman-6.x-FF6C37)

A comprehensive Postman API test collection with **Newman CLI integration** for CI/CD pipeline execution. Tests cover full CRUD operations, response schema validation, chained requests with environment variables, and query parameter filtering. Built against [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free public REST API that requires no authentication.

## What This Demonstrates

- **Full CRUD Coverage:** GET, POST, PUT, PATCH, DELETE with proper status code validation
- **Response Schema Validation:** Structural checks on JSON response bodies (field presence, types, formats)
- **Chained Requests:** Environment variable passing between requests (create -> validate chain)
- **Query Parameter Filtering:** Filtering by userId, completion status, and nested resource access
- **Performance Assertions:** Response time thresholds
- **Newman CI/CD Runner:** Programmatic execution via Node.js with HTML report generation
- **Environment Management:** Externalized base URL and dynamic variables

## Project Structure

```
postman-api-testing-collection/
├── package.json                     # Newman runner & report scripts
├── newman-config.js                 # Programmatic Newman runner with HTML reports
├── collections/
│   └── reqres-api-tests.postman_collection.json   # Full test collection
├── environments/
│   └── reqres-env.postman_environment.json        # Environment variables
└── reports/                         # Generated HTML test reports
```

## Setup

```bash
# Install dependencies (Newman + HTML reporter)
npm install

# Run tests via CLI
npm test

# Run with verbose output
npm run test:verbose

# Run with HTML report generation
npm run test:report

# Run via programmatic config
node newman-config.js
```

## Test Coverage

| Folder              | Requests                                    | Assertions                                        |
|---------------------|---------------------------------------------|---------------------------------------------------|
| Users - GET         | List users, single user, 404 handling       | Schema, nested objects, status codes, response time |
| Posts - GET         | List posts, filter by user, nested comments | Array length, field presence, query filtering      |
| Posts - POST        | Create post, chained validation             | 201 status, field presence, env variable chain     |
| Posts - PUT/PATCH   | Full update, partial update                 | Updated fields, ID preservation                   |
| Posts - DELETE      | Delete post                                 | 200 status, empty response body                   |
| Todos               | List todos, filter completed                | Boolean type checks, query parameter filtering     |

## Importing into Postman

1. Open Postman
2. Click **Import** in the top-left
3. Select `collections/reqres-api-tests.postman_collection.json`
4. Import `environments/reqres-env.postman_environment.json` as an environment
5. Select the **JSONPlaceholder Environment** from the environment dropdown
6. Run the collection

## Professional Context

This collection demonstrates patterns used in microservices API testing — including chained request validation (simulating service-to-service flows), schema enforcement, query parameter filtering, and CI/CD-ready execution via Newman. The HTML reporting approach mirrors automated test result dashboards used to surface quality metrics for engineering leadership.
