# System Design Capstone

## Similar Homes

> This projects features a mock version of Turila's neighborhood reviews. Users can see similar homes based on the current lisiting they are on. This app optimizes database and server to handle webscale traffic.

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Create
**Method:**  POST\
**Endpoint:**  /listings/:id/similar\
**Request Body:**
```
{
  "image_url": "http://some.fake.url/photo1.png",
  "price": 20000000,
  "Size_bd": 6,
  "Size_ba": 6,
  "Size_sqft": 3000,
  "address": "17 Presidio Ter",
  "neighborhood": "Lake, San Francisco, CA",
  "favorite": false
}
```
**Response Object:**  HTTP Status Code 201

## Read:
**Method:**  GET\
**Endpoint:**  /listings/:id/similar\
**Response Object:**
```
[
  {
    "image_url": "http://some.fake.url/photo1.png",
    "price": 20000000,
    "Size_bd": 6,
    "Size_ba": 6,
    "Size_sqft": 3000,
    "address": "17 Presidio Ter",
    "neighborhood": "Lake, San Francisco, CA",
    "favorite": false
  }
]
```

## Update:
**Method:**  PUT\
**Endpoint:**  /listings/:id/similar/:similar_id\
**Request Body:**
```
{
  "image_url": "http://some.fake.url/photo1.png",
  "price": 20000000,
  "Size_bd": 6,
  "Size_ba": 6,
  "Size_sqft": 3000,
  "address": "17 Presidio Ter",
  "neighborhood": "Lake, San Francisco, CA",
  "favorite": false
}
```
**Response Object:**  HTTP Status Code 200

## Delete:
**Method:**  DELETE\
**Endpoint:**  /listings/:id/similar/:similar_id\
**Response Object:**  HTTP Status Code 202


