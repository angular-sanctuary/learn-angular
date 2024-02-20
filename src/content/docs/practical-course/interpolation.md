---
title: Interpolation
description: rendering data in a template
---

## What you will learn

In this chapter, you will learn how to render data in a template using interpolation.
We are now iterating over the `tasks` array but displaying a static value.
We now want to display the actual task title.

## Interpolation

To display the actual task title, we can use interpolation.

Open the `src/app/task-list.component.html` file.

Replace the content of the file with the following code:

```html ins={"Add interpolation and pass it the task.title property": 3-4}
<ul>
  <li *ngFor="let task of tasks">
      
    Task name : {{ task.title }}
  </li>
</ul>
```

Save the file.

Go back to your browser and refresh the page.

You should see the following page:

// TODO: Add image

Your list is now displayed in the browser.
The interpolation evaluates the `task.title` property and displays the actual task title value.

## What you learned

In this chapter, you learned how to render data in a template using interpolation.
