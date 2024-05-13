---
title: Query the task list
description: Learn how to query the task list from the API server in an Angular application.
---

:::note
Learn how to query data from the API server in an Angular application.
:::

## The TaskService

The `HttpClient` services exposes multiple functions to make HTTP requests to a server. In this chapter, we will use the `get` function to query the task list from the API server.

:::info
`get`relates to **GET** requests in the HTTP protocol.
:::

This function expects an url as a parameter, that's the endpoint of the API server we want to query.
In our situation, the endpoint is `http://localhost:3000/tasks`.

It results into the following code:

```typescript
getTasks() {
  return this.http.get<Task[]>('http://localhost:3000/tasks');
}
```

This new `getTasks` defines our contract with the API server:

- it makes a **GET** request
- it expects an array of `Task` objects as a response
- it communicates with the API server at `http://localhost:3000/tasks`

We were previously storing the task list and its changes in the `tasks` variable in the `TaskService` class.
That's now the API server's responsibility and we can remove the `tasks` variable.

#### 🎓 Instructions

Open the `src/app/task.service.ts` file.

Update the following code to the file:

```typescript del={"Remove the task variable": 15-19}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [
        {
            id: '1',
            title: 'First task',
            description: 'This is the first task'
        },
        {
            id: '2',
            title: 'Second task',
            description: 'This is the second task'
        }
    ];
    
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }
}
```

## Update the TaskListComponent

As we no longer relies on the `tasks` variable, we need to update the `TaskListComponent` to use the `getTasks` function.

We firstly rename the `tasks` variable to `tasks$` to reflect the fact that it is now an observable.

Why so? What's an observable?

Our goal is to display a list of tasks, so the expected Typescript type is `Task[]`.
However the `getTasks` function returns an observable of `Task[]`, a `Observable<Task[]>`.

- `tasks` is an array of `Task` objects
- `tasks$` is an observable of an array of `Task` objects

By calling the `getTasks` function, we get an observable that will emit the list of tasks once received from the API server.  
To differentiate a value from the observable, we commonly use the `$` suffix in Angular applications.



#### 🎓 Instructions

Open the `src/app/task-list/task-list.component.ts` file.

Update the following code to the file:

```typescript ins={"Update the tasks variable": 9-10}
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = this.taskService.tasks;
    tasks$ = this.taskService.getTasks();

  constructor(private taskService: TaskService) { }
    
  ngOnInit() {}  
}
```

## Subscription

Calling the `getTasks` function won't trigger the API request immediately.
We need to trigger what we call a subscription to the observable to start the request.

:::tip
We **subscribe** like we would subscribe to a newspaper.
We request the last issue of the newspaper and once it's available, it's delivered and we can read it.
:::

## How to subscribe

There are multiple ways to subscribe to an observable.
For the given situation, we'll use the `async` pipe in the HTML template.

Like the `date` pipe we used earlier, the `async` pipe role is to transform the data before displaying it.
Here it's role will be to subscribe to the observable and returns the list of tasks once available.

:::tip
While there are alternatives, When the data returned by an observable is only meant to be displayed in the HTML template, it's a good practice to use the `async` pipe.
You'll discover the alternative at the end of this page.
:::

#### 🎓 Instructions

Open the `src/app/task-list/task-list.component.html` file.

Update the following code to the file:

```html ins={"Update the HTML template": 1-3}
<ul>
  <li *ngFor="let task of tasks$ | async">
    Task name: {{ task.title }}
  </li>
</ul>
```

## Alternative

The alternative to using the `async` pipe is to subscribe to the observable in the component.

This is done by calling the `subscribe` function on the observable and passing a function as a parameter.
This function will be called once the data is available.

#### 🎓 Instructions

Open the `src/app/task-list/task-list.component.ts` file.

Update the following code to the file:

```typescript ins={"Subscribe to the observable": 12-15}
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: Task[] = this.taskService.tasks;

  constructor(private taskService: TaskService) { }
    
  ngOnInit() {
      this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }  
}
```

### Pitfalls

While subscribing to the observable in the component is a valid solution, it misses some optimizations that the `async` pipe provides.
It also requires more code for the same result.




## ✔️ What you learned

In this chapter, you learned how to query the task list from the API server in an Angular application. You learned how to create a `getTasks` function in the `TaskService` class to query the task list from the API server. You also learned how to use the `async` pipe to subscribe to the `getTasks` function and display the task list in the `TaskListComponent` class.




