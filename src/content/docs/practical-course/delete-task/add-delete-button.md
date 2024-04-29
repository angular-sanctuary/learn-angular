---
title: Add delete button in the TaskListComponent
description: Learn how to add a delete button in the TaskListComponent class in an Angular application.
---

:::note
Learn how to add a delete button in the `TaskListComponent` class in an Angular application.
:::

## The delete button

#### 🎓 Instructions

1. Open the `src/app/task-list/task-list.component.html` file.

2. Add the following code to the file:

```html ins={"1. Add a delete button": 4-5}
<ul>
  <li *ngFor="let task of tasks; let i = index">
    Task name: {{ task.title }}
    
    <button type="button" (click)="deleteTask(task.id)">Delete</button>
  </li>
</ul>
```

## The deleteTask function

#### 🎓 Instructions

1. Open the `src/app/task-list/task-list.component.ts` file.

2. Add the following code to the file:

```typescript ins={"Add the deleteTask function and call the TaskService deleteTask": 14-17}
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = this.taskService.tasks;

  constructor(private taskService: TaskService) { }
    
  ngOnInit() {}  

  deleteTask(uuid: string) {
    this.taskService.deleteTask(uuid);
  }
}
```

## Let's test it out

1. Click on the 'Delete' button next to a task in the list.
2. The task should be removed from the list.

## ✔️ What you learned

In this chapter, you learned how to add a delete button in the `TaskListComponent` class in an Angular application. You learned how to create a `deleteTask` function in the `TaskListComponent` class to remove a task from the list. You also learned how to call the `deleteTask` function from the `TaskService` class to remove the task from the list.
