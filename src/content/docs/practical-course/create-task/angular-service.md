---
title: Service creation
description: Learn how to create a service in Angular
---

:::note
Learn how to create a service in Angular to manage the tasks.
:::

## The problem

In our new function called `createTask`, we now want to update our task list to include the new task.
However the `tasks` variable is not accessible from the `TaskFormComponent` class, it lives in the `TaskListComponent` class.

That's where services come in.

## What is a service

In Angular, a service is a class that can be used to share data and functionality across different parts of your application.

By default, Angular services are singletons. This means that there is only one instance of the service in the application.
And these singletons lives as long as the application lives.

So even if you navigate to a different route, the service will still be available with its current state.

## Create a service

To create a service in Angular, you can use the Angular CLI.
We used it so far to generate components but, among other things, it can also generate services.

Open a terminal and run the following command:

```bash
ng generate service task
```

This command will create a new file called `task.service.ts` in the `src/app` folder.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
}
```

## What you learned

In this chapter, you learned how to create a service in Angular to manage the tasks. You learned what a service is and how to create one using the Angular CLI.

