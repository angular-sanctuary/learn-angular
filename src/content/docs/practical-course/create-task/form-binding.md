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

#### Instructions

1. Open the `src/app/task-form/task-form.component.ts` file.

2. Replace the content of the file with the following code:

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

#### Instructions

1. Open the `src/app/task-form/task-form.component.html` file.

2. Replace the content of the file with the following code:

```html ins={"Bind the title with the ngModel directive": 4-5} ins={"Bind the description with the ngModel directive": 8-9}
// task-form.component.html
<form>
  <label for="title" class="form-label">Title</label>
    
  <input type="text" id="title" name="title" class="form-control" [(ngModel)]="task.title">
    
  <label for="description" class="form-label">Description</label>
    
  <textarea id="description" name="description" class="form-control" [(ngModel)]="task.description"></textarea>
  
  <button type="submit" class="btn btn-primary">Create task</button>
</form>
```

By being bound to the form, the `task` model will be updated when the form is updated.

## What you learned

In this chapter, you learned how to bind a form to a model in Angular. You learned how to create a `task` model to represent a task. You also learned how to use the `[(ngModel)]` directive to bind a form input to a model.
