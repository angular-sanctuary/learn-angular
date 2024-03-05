---
title: Interpolation
description: rendering data in a template
---

:::note
Learn how to render data in a template using interpolation.  
We are now iterating over the `tasks` array but displaying a static value.      
We now want to display the actual task title.
:::

## What is interpolation?

To display the actual task title, we can use Angular **interpolation** authoring format.  
Between `{{` and `}}` delimiters, you can add any valid TypeScript expression in the HTML template file:

```html
{{ task.title }}
```

### Update the task list component

1. Open the `src/app/task-list.component.html` file.

2. Replace the content of the file with the following code:

```html ins={"Add interpolation and pass it the task.title property": 3-4}
<ul>
  <li *ngFor="let task of tasks">
      
    Task name : {{ task.title }}
  </li>
</ul>
```

3. Save the file.

4. Go back to your browser and refresh the page.

5. You should see the following page:

// TODO: Add image

Your list is now displayed in the browser.
The interpolation evaluates the `task.title` property and displays the actual task title value.

## What you learned

In this chapter, you learned how to render data in a template using interpolation.

## ✔️ Quizz

What is the interpolation syntax in Angular?

1. `{{ task.title }}`
2. `[task.title]`
3. `(task.title)`
4. `task.title`

## 🔎 Want to learn more?

- [Official Angular documentation](https://angular.dev/guide/templates/interpolation)
