---
title: Create a form component
description: Create a form component to add a new task to the task list
---

:::note
Get more familiar with Angular CLI to create components
:::


## Component creation

#### 🎓 Instructions

1. Run the following command in your terminal:

```bash
ng generate component task-form
```

2. You should see a new folder called `task-form` in the `src/app` folder.

## Angular CLI options

The Angular CLI provides several options to customize the component generation process.
You can add these options upon the previous command. For example, to avoid generating a component in a new folder, you can run the following command:

```bash
ng generate component task-form --flat
```

If you want some options to be the default for all components, you can add them to the `angular.json` file.
For our project, we already have the following options set:

```json
"@schematics/angular:component": {
  "skipTests": true,
  "standalone": false
},
```

These options were added to the `angular.json` file when we created the project with the Angular CLI.

## ✔️ What you learned

We used the Angular CLI to create a new component. That's the second component we created in this project.
Such a task is a common task in Angular development, and the Angular CLI makes it easy to create new components.

## 🔗 Resources

- <a href="https://angular.dev/cli/generate/component" target="_blank">Angular CLI documentation for components</a>
