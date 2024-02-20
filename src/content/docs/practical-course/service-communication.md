---
title: Service communication
description: Learn how to communicate between a service and a component in an Angular application.
---

## What you will learn

In this chapter, you will learn how to communicate between a service and a component in an Angular application.

## The task variable

If we removed the task variable in the last step, we still need to display the list of tasks in the `TaskListComponent` class.

We will recreate this variable but instad of initializing it with a static list of tasks, we will get the tasks from the `TaskService`.

Open the `src/app/task-list.component.ts` file.

Add the following code to the file:

```typescript ins={"Get the tasks from the TaskService": 11-12}
import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

    
    tasks: Task[] = this.taskService.tasks;

    constructor(private taskService: TaskService) { }
}
```

As we injected the `TaskService` in the `TaskListComponent` class, we can access the `tasks` variable from the service.

If you go back to your browser and refresh the page, you should see the tasks list displayed as before.

## What you learned

In this chapter, you learned how to communicate between a service and a component in an Angular application. You learned how to get the tasks from the `TaskService` and display them in the `TaskListComponent` class.
