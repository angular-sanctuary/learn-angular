---
title: Event binding
description: Learn to bind an event to a function
---

:::note
Learn how to bind an event to a function in Angular.
You will learn how to execute a function when the form is submitted.
:::

## Event binding

In Angular you can bind an event to a function. This allows you to execute a function when an event occurs.

We want to execute a function when the 'create task' button is clicked.

#### Instructions

1. Open the `src/app/task-form/task-form.component.html` file.

2. Replace the content of the file with the following code:

```html ins={"Add the submit event binding": 9-10}
// task-form.component.html
<form>
  <label for="title" class="form-label">Title:</label>
  <input type="text" id="title" name="title" class="form-control" [(ngModel)]="task.title">
  
  <label for="description" class="form-label">Description:</label>
  <textarea id="description" name="description" class="form-control" [(ngModel)]="task.description"></textarea>
  
    
  <button type="submit" class="btn btn-primary" (click)="createTask()">Create task</button>
</form>
```

## Submit function

We will create a `createTask` function to handle the form submission.
For this step, we'll just log the form data to the console.

#### Instructions

1. Open the `src/app/task-form/task-form.component.ts` file.

2. Replace the content of the file with the following code:

```typescript ins={"Add the createTask method": 16-19}
// task-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    
  task = {
    title: '',
    description: ''
  };
    
  ngOnInit() {}  
  

  createTask(): void {
    console.log('Task created', this.task);
  }
}
```

3. Open the devtools console in your browser.
4. By clicking on the 'create task' button, you should see the form data logged to the console.

## What you learned

In this chapter, you learned how to submit a form in Angular. You learned how to bind an event to a method to execute the method when the form is submitted. You also learned how to create a method to handle the form submission. You also learned how to access the form data in the method. 

