---
title: Submit update form
description: Learn how to submit an update form in an Angular application.
---

:::note
Learn how to submit an update form in an Angular application.
:::

## Update the task with the TaskService

The `TaskService` service already incldues a function to add a new task to the list.  
We need to add a new function to update an existing task of the list.

#### 🎓 Instructions

1. Open the `src/app/task-service.ts` file.

2. Add the following code to the file:

```typescript ins={"Add a function to update a task": 36-39}
import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description of task 1',
            createdAt: new Date()
        },
        {
            title: 'Task 2',
            description: 'Description of task 2',
            createdAt: new Date()
        }
    ];

    addTask(task: Task) {
        this.tasks.push({
            ...task,
            createdAt: new Date()
        });
    }

  getTask(id: string) {
    return this.tasks.find(task => task.id === id);
  }

  
  updateTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    this.tasks[index] = task;
  }
}
```

## Update the TaskFormComponent

The `TaskFormComponent` component is currently used to add a new task to the list.
We updated it to be populated thanks to the `id` of the task to update.

We now need to handle the submission of the form so it updates the task.
To do so, we'll keep the same `submit` function but updating it to use the `updateTask` function of the `TaskService` service.

When?

- If the task has an `id`, we'll call the `updateTask` function.
- If the task doesn't have an `id`, we'll call the `addTask` function.

```typescript
submit(task) {
    if (task.id) {
        this.taskService.updateTask(task);
    } else {
        this.taskService.addTask(task);
    }
    this.router.navigate(['/tasks']);
}
```

In both situations, we'll navigate back to the list of tasks.

#### 🎓 Instructions

1. Open the `src/app/task-form/task-form.component.ts` file.

2. Add the following code to the file:

```typescript ins={"Add the updateTask function": 28-33}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

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

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}
    
  ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.task = this.taskService.getTask(id);
      }
  }  

  submit(task) {
      
    if (task.id) {
        this.taskService.updateTask(task);
        } else {
        this.taskService.addTask(task);
    }
      this.router.navigate(['/tasks']);
  }
}
```

## Let's test it out

1. Click on the 'Update' button next to a task in the list.
2. Update the form with the new task details.
3. Click on the 'Update task' button.
4. The task should be updated in the list.

## ✔️ What you learned

In this chapter, you learned how to submit an update form in an Angular application. You learned how to create an `updateTask` function in the `TaskService` class to update a task in the list. You also learned how to call the `updateTask` function from the `TaskFormComponent` class to update the task in the list. You also learned how to retrieve the task from the `TaskService` class using the `ActivatedRoute` service. You also learned how to conditionally call the `updateTask` function if the `id` is available in the route.


