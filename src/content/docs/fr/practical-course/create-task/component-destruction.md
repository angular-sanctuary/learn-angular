---
title: Component destruction
description: Learn what happens when we navigate away from a component in an Angular application.
---

:::note
Understand what happens when we navigate away from a component in an Angular application.
:::

At the time you submit the form, the `TaskFormComponent` task property is populated with the values you entered in the form.
For example, given you filled the name and description fields, the `task` property will be:

```typescript
task = {
  title: 'My new task',
  description: 'Awesome description'
};
```

By submitting the form, you also navigate away from the `TaskFormComponent` component.
When you navigate away from a component, the component is destroyed.

So by navigate once again to this form, the `task` property will be empty:

```typescript
task = {
  title: '',
  description: ''
};
```

A new instance of the `TaskFormComponent` component is created each time you navigate to it.
So any local state you set in the component is lost when you navigate away from it.

:::tip
That's why we store the new task in the `TaskService` service.
The service is a singleton, meaning it's a single instance shared across the application.
Except if you force reload the page, it'll keep the tasks you added.
:::

#

## ✔️ What you learned

In this chapter, you learned how to handle component destruction in an Angular application.
