---
title: Install JSON Server
description: Learn how to install JSON Server to create a fake REST API.
---

:::note
Learn how to install JSON Server to create a fake REST API.
:::

## What is JSON Server

JSON Server is a simple project that helps you to create a REST API with zero coding in less than 30 seconds. It's a full fake REST API with zero coding that allows you to create, read, update and delete tasks.

## Installation

To install JSON Server, run the following command in your terminal:

```bash
npm install json-server
```

## Database file

Create a `db.json` file with some data:

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "First task",
      "description": "This is the first task"
    },
    {
      "id": 2,
      "title": "Second task",
      "description": "This is the second task"
    }
  ]
}
```

## Start JSON Server

Create a `start-server` script in your `package.json` file:

```json
{
  "scripts": {
    "start-server": "json-server --watch db.json"
  }
}
```

Run the following command in your terminal:

```bash
npm run start-server
```

You can now access your API server at `http://localhost:3000`.

## Let's test it out

1. Open your browser and go to `http://localhost:3000/tasks`.
2. You should see the list of tasks.

## What you learned

In this chapter, you learned how to install JSON Server to create a fake REST API. You learned how to create a `db.json` file with some data and how to start JSON Server to access your API server at `http://localhost:3000`. You also learned how to access the list of tasks at `http://localhost:3000/tasks`.






