---
title: HTML Form
description: Learn how to create a form in HTML
---

:::note
Learn how to create a form in HTML.
:::

## Form structure

To create a form in HTML, you need to use the `<form>` tag.

The `<form>` tag is used to create an HTML form for user input.

The form can contain input elements like text fields, checkboxes, radio-buttons, submit buttons, and more.

## Create the form

Open the `src/app/task-form/task-form.component.html` file.

Replace the content of the file with the following code:

```html ins={"Add an input for the task title with its label": 3-5} ins={"Add a textarea for the task description with its label": 7-9} ins={"Add a submit button": 11-12}
// task-form.component.html
<form>

  <label for="title">Title:</label>
  <input type="text" id="title" name="title">
  
  
  <label for="description">Description:</label>
  <textarea id="description" name="description"></textarea>
  
  
  <button type="submit">Create task</button>
</form>
```

## What you learned

In this chapter, you learned how to create a form in HTML. You learned how to use the `<form>` tag to create a form for user input. You also learned how to use the `<input>` and `<textarea>` tags to create input fields for the user to enter data. You also learned how to use the `<button>` tag to create a submit button for the form.
