---
title: Update TaskFormComponent
description: Learn how to update the `TaskFormComponent` to populate the form with the task to update.
---

:::note
Learn how to update the `TaskFormComponent` to populate the form with the task to update.
:::

We are now able to land on the `TaskFormComponent` when we click on the 'Update' button next to a task in the list with a new route path.
This path a dynamic value to pass the `id` of the task to update.

We'll now use this `id` to populate the form with the task to update.

## Retrieve the task to update with the TaskService

Open the `src/app/task-service.ts` file.

Add the following code to the file:

```typescript ins={"Add a function to retrieve a taks based on its id": 29-33}
import { Injectable } from '@angular/core';
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

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  
  getTask(id: string) {
    return this.tasks.find(task => task.id === id);
  }
}
```

## Retrieve the task id from the route

Open the `src/app/task-form/task-form.component.ts` file.

Add the following code to the file:

```typescript ins={"Retrieve the task id from the route": 10-13}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task = {
    id: '',
    title: '',
    description: ''
  };

  constructor(private taskService: TaskService, private route: ActivatedRoute) {
      const id = this.route.snapshot.paramMap.get('id');
      
      if(id) {
        this.task = this.taskService.getTask(id);
      }
  }
}
```

:::tip
The `TaskFormComponent` is used both to create and update a task.
So we conditionally retrieve the task from the `TaskService` only if the `id` is available in the route.
:::

## Let's test it out

1. Click on the 'Update' button next to a task in the list.
2. The form should be populated with the task to update.

## What you learned

In this chapter, you learned how to update the `TaskFormComponent` to populate the form with the task to update. You learned how to retrieve the task to update from the `TaskService` based on the `id` available in the route.





