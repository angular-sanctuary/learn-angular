---
title: Add task with the HTTP client
description: Learn how to add a task to a list using the HTTP client in an Angular application.
---

:::note
Learn how to add a task to a list using the HTTP client in an Angular application.
:::

## The TaskService

We just communicated with our API server to retrieve a list of tasks.
Now we want to update the API server list by adding a new task.

Based on the HTTP protocol, we will use the `post` function to add a task to the list.
As JSON-server is able to generate an `id` for us, we will send a `TaskForm` object to the server.

#### Instructions

1. Open the `src/app/task.service.ts` file.

2. Add the following code to the file:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task, TaskForm } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  addTask(task: TaskForm) {
    return this.http.post<TaskForm>('http://localhost:3000/tasks', task);
  }
}
```

This new `addTask` function defines our contract with the API server:

- it makes a **POST** request
- it sends a `Task` object as a request body
- it communicates with the API server at `http://localhost:3000/tasks`

## Update the TaskFormComponent

#### Instructions

1. Open the `src/app/task-form/task-form.component.ts` file.

2. Add the following code to the file:

```typescript
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { TaskForm } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: TaskForm = {
    title: '',
    description: ''
  };

  constructor(private taskService: TaskService) { }
  
  ngOnInit() {}  

  submit(task: TaskForm) {
    this.taskService.addTask(task).subscribe();
    this.router.navigate(['/tasks']);
  }
}
```

By default an Observable is cold, meaning that the function will not be executed until we subscribe to it.


:::info
By using the async pipe to get the task list, we don't need to subscribe to the `getTasks` function in the `TaskListComponent`.
:::


## Asynchronous programming

Let's review the code we just changed in the `submit` function of the `TaskFormComponent`:

```typescript
submit(task: TaskForm) {
  this.taskService.addTask(task).subscribe();
  this.router.navigate(['/tasks']);
}
```

1. We call the `addTask` function from the `TaskService` to add a task to the API server.
2. We navigate to the `/tasks` route.

:::danger
This code won't run in the expected order
:::

API communication is asynchronous, meaning that the `addTask` function will not be executed immediately.
Our server is served locally, so the request will be fast, but it's still asynchronous.

A request to the server can take a long time if the server or the network is slow for any reason.
In this situation, While the request is still being processed, the `router.navigate` function will be executed.

That's not what we want as by navigating, we want to display the updated task list.

We need to wait for the response from the server before navigating to the `/tasks` route.

## The Subscription

The subscribe function accepts a callback function as a parameter.
This callback function will be executed when the observable emits a value.

We'll use this callback function to navigate to the `/tasks` route.

Open the `src/app/task-form/task-form.component.ts` file.

Update the following code to the file:

```typescript ins={"Update the submit function": 10-13}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { TaskForm } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: TaskForm = {
    title: '',
    description: ''
  };

  constructor(private taskService: TaskService, private router: Router) { }
    
  ngOnInit()  {}     

  submit(task: TaskForm) {
    this.taskService.addTask(task).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }
}
```

## What you learned

In this chapter, you learned how to add a task to a list using the HTTP client in an Angular application.

