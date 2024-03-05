---
title: Form binding
description: Learn how to bind a form to a model in Angular
---

:::note
Learn how to bind a form to a model in Angular.
Thanks to the previous chapter we now have an HTML form but it does nothing yet.
:::

## Form model

In Angular, you can bind a form to a model. This allows you to create a two-way binding between the form and the model. When the user enters data into the form, the model is updated. When the model is updated, the form is updated.

## Task model

We will create a `task` model to represent a task. The `task` model will have two properties: `title` and `description`.

Open the `src/app/task-form/task-form.component.ts` file.

Replace the content of the file with the following code:

```typescript ins={"Add the task model with empty values": 10-14}
// task-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
    
  task: Task = {
    title: '',
    description: ''
  };
}
```

## Form binding

To bind a form to a model in Angular, you can use the `[(ngModel)]` directive.
The `[(ngModel)]` directive is a built-in directive that allows you to bind a form input to a model.

We want to bind the `title` input to the `task.title` property and the `description` textarea to the `task.description` property.
Open the `src/app/task-form/task-form.component.html` file.

Replace the content of the file with the following code:

```html ins={"Bind the title with the ngModel directive": 4-5} ins={"Bind the description with the ngModel directive": 8-9}
// task-form.component.html
<form>
  <label for="title">Title:</label>
    
  <input type="text" id="title" name="title" [(ngModel)]="task.title">
    
  <label for="description">Description:</label>
    
  <textarea id="description" name="description" [(ngModel)]="task.description"></textarea>
  
  <button type="submit">Create task</button>
</form>
```

By being bound to the form, the `task` model will be updated when the form is updated.

## What you learned

In this chapter, you learned how to bind a form to a model in Angular. You learned how to create a `task` model to represent a task. You also learned how to use the `[(ngModel)]` directive to bind a form input to a model.
