---
title: Display a list of items
description: Learn how to display a list of items in an Angular application.
---

## What you will learn

In this chapter, you will learn how to display a list of items in an Angular application.
We'll use our newly `tasks` variable to display each task in the list.

## HTML structure

To display a list of items, the expected HTML structure is:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

However, what happens if we want to display a list of items that is dynamic and changes over time?
How to displays a four-item list today, but a five-item list tomorrow?

We want to use the `tasks` variable to display the list of tasks.
If the tasks is updated, the view should be updated as well.

## *ngFor directive

To display a list of items in an Angular application, you can use the `*ngFor` directive.
The `*ngFor` directive is a built-in directive that allows you to loop through a list of items and display them in the view.

Open the `src/app/task-list.component.html` file.

Replace the content of the file with the following code:

```html
<ul>
  <li *ngFor="let task of tasks">
    Task name : 
  </li>
</ul>
```

Save the file.

Go back to your browser and refresh the page.

You should see the following page:

// TODO: Add image

Your list is now displayed in the browser.
You should see `Task name :` repeated as many times as there are tasks in the list.

## What you learned

In this chapter, you learned how to display a list of items in an Angular application.

## 🔎 Want to learn more?
