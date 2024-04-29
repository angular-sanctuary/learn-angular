---
title: Inject Service in form component
description: Learn how to inject a service in a form component in an Angular application.
---

:::note
Learn how to inject our service and use its function in the `TaskFormComponent` class.
:::

## Inject the TaskService in the TaskFormComponent

#### 🎓 Instructions

1. Open the `src/app/task-form.component.ts` file.

2. Add the following code to the file:

```typescript ins={"1. import the TaskService": 3-4} ins={"2. Inject the TaskService in the class constructor": 17-18} ins={"3. Call the addTask function from the TaskService": 21-22}
// task-form.component.ts
import { Component } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
    task = {
        title: '',
        description: ''
    };
    

    constructor(private taskService: TaskService) { }
    
    ngOnInit() {}
    
    createTask() {
        
        this.taskService.addTask(this.task);
    }
}
```

The `TaskFormComponent` class is now using the `TaskService` to add a new task to the list.

## Let's test it out

1. Go back to your browser
2. Click on the `Add a new task` link
3. Enter a title and a description in the form
4. Click on the `Create task` button
5. Click on the `List of tasks` link

You should see the new task in the list.

## ✔️ What you learned

In this chapter, you learned how to inject a service in a form component in an Angular application. You learned how to use the `TaskService` to add a new task to the list in the `TaskFormComponent` class.

