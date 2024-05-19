---
title: API overview
description: Learn how to create an API server with json-server and consume it in an Angular application.
---

## What you will learn in this chapter

Your project now fully works with tasks. You can add, update, and delete tasks.
However, the tasks are stored in memory in the `TaskService` service.

In a real-world scenario, the tasks would be stored in a database and the application would consume an API to interact with the database.
This new chapter will focus on updating the application to consume an API server.

## Json-server

To focus on the Angular part of the application, we will use json-server to create a simple API server.
It'll allow us to create, read, update and delete tasks.

As promoted on the json-server GitHub repository:

> Get a full fake API with zero coding in less than 30 seconds (seriously)

## Technical details

1. We will create a simple API server with json-server.
2. We will consume the API in an Angular application.
