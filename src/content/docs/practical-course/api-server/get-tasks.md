---
title: Query the task list
description: Learn how to query the task list from the API server in an Angular application.
---

:::note
Learn how to query the task list from the API server in an Angular application.
:::

## The TaskService

The `HttpClient` services exposes multiple functions to make HTTP requests to a server. In this chapter, we will use the `get` function to query the task list from the API server.

:::info
`get`relates to **GET** requests in the HTTP protocol.
:::

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

This new `getTasks` defines our contract with the API server:

- it makes a **GET** request
- it expects an array of `Task` objects as a response
- it communicates with the API server at `http://localhost:3000/tasks`

As we no longer relies on the `tasks` variable, we need to update the `TaskListComponent` to use the `getTasks` function.

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

`tasks` has been renamed to `tasks$` to reflect the fact that it is now an observable.
Their types is quite different:

- `tasks` is an array of `Task` objects
- `tasks$` is an observable of an array of `Task` objects

The `getTasks` function doesn't not return an array of `Task` objects, but an observable which will emit this array, once received from the API server.

## Update the template

`tasks$` type is observable, is not an array we can iterate over in the template like we did with `tasks`.

To get the value of the observable, we need to subscribe to it. We can use the `async` pipe to do so.

## The async pipe

Like other pipes, the `async` pipe is used in the template to transform the data before displaying it.
The `async` pipe subscribes to an observable and returns the latest value it has emitted. When a new value is emitted, the `async` pipe marks the component to be checked for changes.

Open the `src/app/task-list/task-list.component.html` file.

Update the following code to the file:

```html ins={"Update the template": 1-3}
<ul>
  <li *ngFor="let task of tasks$ | async">
    Task name: {{ task.title }}
  </li>
</ul>
```

## What you learned

In this chapter, you learned how to query the task list from the API server in an Angular application. You learned how to create a `getTasks` function in the `TaskService` class to query the task list from the API server. You also learned how to use the `async` pipe to subscribe to the `getTasks` function and display the task list in the `TaskListComponent` class.




