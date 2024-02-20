---
title: Event binding
description: Learn to bind an event to a function
---

## What you will learn

In this chapter, you will learn how to bind an event to a function in Angular.
You will learn how to execute a function when the form is submitted.

## Event binding

In Angular you can bind an event to a function. This allows you to execute a function when an event occurs.

We want to execute a function when the 'create task' button is clicked.

Open the `src/app/task-form/task-form.component.html` file.

Replace the content of the file with the following code:

```html ins={"Add the submit event binding": 8-9}
<form>
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" [(ngModel)]="task.title">
  
  <label for="description">Description:</label>
  <textarea id="description" name="description" [(ngModel)]="task.description"></textarea>
  
    
  <button type="submit" (click)="createTask()">Create task</button>
</form>
```

## Submit function

We will create a `createTask` function to handle the form submission.
For this step, we'll just log the form data to the console.

Open the `src/app/task-form/task-form.component.ts` file.

Replace the content of the file with the following code:

```typescript ins={"Add the createTask method": 9-13}
import { Component } from '@angular/core';

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

  createTask() {
    console.log('Task created', this.task);
  }
}
```

Open the devtools console in your browser.
By clicking on the 'create task' button, you should see the form data logged to the console.

## What you learned

In this chapter, you learned how to submit a form in Angular. You learned how to bind an event to a method to execute the method when the form is submitted. You also learned how to create a method to handle the form submission. You also learned how to access the form data in the method. 

