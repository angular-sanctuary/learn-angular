---
title: Delete review
description: Review the code to delete a task from the task list in an Angular application.
---

## 🎓 What you learned so far

This part was quite fast!
We mainly reused some concepts from previous chapters:

- We created another function in the TaskService class to remove a task from the list.
- We added a button with an event binding to call a function.
- We created a function in the TaskListComponent class to call the deleteTask function from the TaskService class we already injected.

## Let's review the code

We added a delete button in the `TaskListComponent` class to remove a task from the list.

```html ins={"1. Add a delete button": 4-5}
<ul>
  <li *ngFor="let task of tasks; let i = index">
    Task name: {{ task.title }}
    
    <button type="button" (click)="deleteTask(i)">Delete</button>
  </li>
</ul>
```

We created a `deleteTask` function in the `TaskListComponent` class to remove a task from the list.

```typescript ins={"2. Add the deleteTask function and call the TaskService deleteTask": 13-16}
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

  deleteTask(index) {
    this.taskService.deleteTask(index);
  }
}
```

We created a `deleteTask` function in the `TaskService` class to remove a task from the list.

```typescript ins={"3. Add the deleteTask function": 21-24}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      title: 'First task',
      description: 'This is the first task'
    },
    {
      title: 'Second task',
      description: 'This is the second task'
    }
  ];
  
  addTask(task) {
    this.tasks.push(task);
  }
  
  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}
```

To provide a better user experience, we added a message when the tasks list is empty.

```html ins={"4. Add a message when the tasks list is empty": 6-7}
<ul>
  <li *ngFor="let task of tasks">
    Task name : {{ task.title }}
  </li>
</ul>

<p *ngIf="!tasks.length">No tasks to display</p>
```

## What's next

In the next chapter, we will learn how to update a task in the list. We will create a form to edit a task and update the task in the list. We will also learn how to use the Angular Router to navigate to the form and back to the list.
