---
title: Your first interface
description: Create your first Typescript interface
---

:::note
Learn how to create your first TypeScript interface.
:::

## Models folder

Create a new folder called `models` in the `src/app` folder.

This folder is used to store all the TypeScript interfaces of the application.

## Interface creation

Create a new file called `task.model.ts` in the `src/app/models` folder.

Add the following code to the file:

```typescript
export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}
```

## Interface usage

Now that we have created the `Task` interface, we can use it in our application.

Open the `src/app/task-list.component.ts` file.

Import the `Task` interface at the top of the file:

```typescript
import { Task } from './models/task.model';
```

Create a local variable in your component class:

```typescript
tasks: Task[] = [];
```

// TODO add a screenshot explaining each part

## Populating the interface

Now that we have created the `Task` interface and used it in our application, we can populate it with data.

Open the `src/app/task-list.component.ts` file.

Add the following code to the file:

```typescript ins={"Add the tasks variable": 8-18}
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    
    
    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description of task 1'
        },
        {
            title: 'Task 2',
            description: 'Description of task 2'
        }
    ];
}
```

Now the list is no longer empty and contains two tasks.

## What you learned

In this chapter, you learned how to create your first TypeScript interface. You learned how to define a TypeScript interface and how to use it to create a new object. You also learned about the benefits of using TypeScript, such as autocompletion, type checking, IDE support, and build time errors.

