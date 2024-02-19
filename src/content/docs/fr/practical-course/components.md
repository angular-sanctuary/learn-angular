---
title: Components
description: Components are the building blocks of Angular applications
---

Components are the building blocks of Angular applications. A component controls a portion of the screen called a view. A view is a collection of one or more templates. A template is a form of HTML that tells Angular how to render the component.

Components are used to:

- Break up the application into smaller components.
- Reuse the same block in different parts of the application.
- as decidated routes with their own URL.

## Component creation

1. Open your terminal and type `cd practical-course`.
2. Type `ng generate component components`.
3. Open the `src/app/components/components.component.html` file.
4. Replace the content of the file with the following code:

```html
<h1>Components</h1>
```

5. Open the `src/app/app.component.html` file.
6. Replace the content of the file with the following code:

```html
<app-components></app-components>
```

7. Save the file.
8. Go back to your browser and refresh the page.
9. You should see the following page:


