---
title: Add HTTP client
description: Learn how to add an HTTP client to an Angular application.
---

:::note
Learn how to add an HTTP client to an Angular application.
:::

## The HttpClient module

The `HttpClientModule` is a built-in Angular module that allows you to make HTTP requests to a server.

## Add the HttpClientModule to the application

#### 🎓 Instructions

1. Open the `src/app/app.module.ts` file.

2. Add the following code to the file:

```typescript ins={"Add the HttpClientModule": 3-4}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Inject the HttpClient service

#### 🎓 Instructions

1. Open the `src/app/task.service.ts` file.

2. Add the following code to the file:

```typescript ins={"Import the HttpClient service": 2-3} ins={"Inject the HttpClient service": 10-12}
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    
  constructor(private http: HttpClient) { }
}
```

## What you learned

In this chapter, you learned how to add an HTTP client to an Angular application. You learned how to import the `HttpClientModule` in the `AppModule` class to make HTTP requests to a server.

You also learned how to inject the `HttpClient` service in the `TaskService` class to make HTTP requests to a server.
