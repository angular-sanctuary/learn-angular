---
title: Inject Service in form component
description: Learn how to inject a service in a form component in an Angular application.
---

## What you learned so far

In the previous chapters, you learned:

- how to create an HTML form
- how to bind the form to a component with the `ngModel` directive
- how to create a service and how to use it in a component
- how to add routing to an Angular application

## Let's review the code

We create a HTML form structure in the `TaskFormComponent` class.


```html ins={"2. We bind the form to the component with ngModel": 4-5} ins={"3. We add a button to submit the form": 8-9}
// task-form.component.html
<form>
  <label for="title">Title:</label>
  
  <input type="text" id="title" name="title" [(ngModel)]="task.title"/>
  <label for="description">Description:</label>
  <textarea id="description" name="description" [(ngModel)]="task.description"></textarea>
  
  <button type="submit" (click)="submit()">Create task</button>
</form>
```

We create a `TaskFormComponent` class to handle the form submission.

```typescript ins={"5. We create a task model": 13-17} ins={"6. we inject the TaskService and the Router": 19-23} ins={"7. We create a function to handle the form submission and navigate to the task list": 25-28}
// task-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
    
    
  task = {
    title: '',
    description: ''
  };
  
  
  constructor(
      private taskService: TaskService,
      private router: Router
  ) { }
    
  submit() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
  }
}
```

We create a `TaskService` class to manage the tasks list.

```typescript ins={"8. We create a tasks list": 8-18} ins={"9. We create a function to add a task to the list": 20-23}
// task.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
    
  tasks = [
    {
      title: 'First task',
      description: 'This is the first task'
    },
    {
      title: 'Second task',
      description: 'This is the second task'
    }
  ];
  
  
  addTask(task): void {
    this.tasks.push(task);
  }
}
```

We update the `TaskListComponent` class to display the tasks list.

```typescript ins={"10. We inject the TaskService and reference the service task list in a variable": 11-14}
// task-list.component.ts
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

## What's next

In the next chapter, you will learn how to delete a task from the list. You will learn how to create a delete button in the `TaskListComponent` class and how to create a function to remove a task from the list in the `TaskService` class.
