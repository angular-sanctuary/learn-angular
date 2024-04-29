---
title: Display empty list message
description: Learn how to display a message when the tasks list is empty in an Angular application.
---

:::note
Learn how to display a message when the tasks list is empty in an Angular application.
We just learned how to delete a task from the list, and we want to display a message when the list is empty.
:::


## The *ngIf directive

To display a message when the tasks list is empty, you can use the `*ngIf` directive.
The `*ngIf` directive is a built-in directive that allows you to conditionally display an element in the view.

#### 🎓 Instructions

1. Open the `src/app/task-list.component.html` file.

2. Replace the content of the file with the following code:

```html ins={"1. Add a message when the tasks list is empty": 6-7}
<ul>
  <li *ngFor="let task of tasks">
    Task name : {{ task.title }}
  </li>
</ul>

<p *ngIf="!tasks.length">No tasks to display</p>
```

## Let's test it out

1. Remove all the tasks from the list.
2. The message "No tasks to display" should be displayed in the view.

## ✔️ What you learned

In this chapter, you learned how to display a message when the tasks list is empty in an Angular application.
