# System Design Capstone

## Similar Homes

> This projects features a mock version of Turila's neighborhood reviews. Users can see similar homes based on the current lisiting they are on. This app optimizes database and server to handle webscale traffic.

## Table of Contents

1. [Requirements](#requirements)
2. [Usage](#usage)
3. [API](#api)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.13.0

## Usage

### Installing Dependencies

From within the root directory:

```
npm install
```

### Starting the app

From within the root directory:

```
npm run start
npm run react-dev
```

### Running tests

From within the root directory:

```
npm run test
npm run test:cover
```

### Seeding data

From within the root directory:

```
npm run postgres-schema
npm run postgres-csv
npm run postgres-load
```

## API

### Create
**Method:**  POST\
**Endpoint:**  /listings/:id/similar\
**Request Body:**
```
{
  "imageUrl": "String",
  "price": Number,
  "bed": Number,
  "bath": Number,
  "sqft": Number,
  "address": "String",
  "neighborhood": "String",
  "favorite": Boolean
}
```
**Response Object:**  HTTP Status Code 201

### Read
**Method:**  GET\
**Endpoint:**  /listings/:id/similar\
**Response Object:**
```
{
  "similarHomes" :
  [
    {
      "imageUrl": "String",
      "price": Number,
      "bed": Number,
      "bath": Number,
      "sqft": Number,
      "address": "String",
      "neighborhood": "String",
      "favorite": Boolean
    }
  ]
  "neighborhood" : "String"
}
```

### Update
**Method:**  PUT\
**Endpoint:**  /listings/:id/similar/:similar_id\
**Request Body:**
```
{
  "new_similar_id": Number,
}
```
**Response Object:**  HTTP Status Code 200

### Delete
**Method:**  DELETE\
**Endpoint:**  /listings/:id/similar/:similar_id\
**Response Object:**  HTTP Status Code 202


