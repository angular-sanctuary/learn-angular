---
title: Create the task interface
description: Create your first Typescript interface
---

:::note
Learn how to create your first TypeScript interface and type the new task list.
:::

## Interface creation

Each task in the task list has a title, a description, and a creation date. We will create a new TypeScript interface to represent a task.

#### 🎓 Instructions

1. Create a new folder called `models` in the `src/app` folder to store all the TypeScript interfaces of the application.

1. Create a new file called `task.model.ts` in this new folder.

2. Add the following code to the file:

```typescript
// task.model.ts
export interface Task {
  title: string;
  description: string;
  createdAt: Date;
}
```

## Interface usage

You now want to use this task interface in your application.

You will create a local variable in your component class to store the tasks.

#### 🎓 Instructions

1. Open the `src/app/task-list.component.ts` file.

2. Add the following code to the file:

```typescript ins={"Import the task interface": 3-4} ins={"Add the tasks variable": 13-23}
// task-list.component.ts
import { Component } from '@angular/core';

import { Task } from './models/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent  implements OnInit {
    
    
    tasks: Task[] = [
        {
            title: 'Task 1',
            description: 'Description of task 1',
            createdAt: new Date()
        },
        {
            title: 'Task 2',
            description: 'Description of task 2',
            createdAt: new Date()
        }
    ];
    
    ngOnInit() {}
}
```

## ✔️ What you learned

In this chapter, you learned how to create your first TypeScript interface. You learned how to define a TypeScript interface and how to use it to create a new object. You also learned about the benefits of using TypeScript, such as autocompletion, type checking, IDE support, and compile time errors.

## 🚦 Quiz

What is the TypeScript keyword used to define an interface?

1. `interface`
2. `type`
3. `class`

What is the TypeScript keyword used to delimit the properties of an interface?

1. `:`
2. `=`
3. `;`

## 🔗 Resources




