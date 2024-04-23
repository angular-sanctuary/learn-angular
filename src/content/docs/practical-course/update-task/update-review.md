---
title: Update review
description: Review the steps to update a task in an Angular application.
---

## What you learned so far

In this part, you learned how to update a task in an Angular application. You learned how to create a form to update a task, how to populate the form with the task to update, and how to update the task in the list.

You also learned how to create unique identifiers for tasks using the `uuid` library.

You learned how to create a `TaskService` function to update the task in the list.

## Let's review the code

### Update the TaskFormComponent

Open the `src/app/task-form/task-form.component.ts` file.

Add the following code to the file:

```typescript
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

