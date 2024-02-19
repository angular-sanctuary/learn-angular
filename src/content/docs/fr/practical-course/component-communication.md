---
title: Routing
description: How to use routing in Angular
---

Routing is the ability to move between different parts of the application when a user enters a URL or clicks an element (link, button, icon, image etc) within the application. The Angular Router enables navigation from one view to the next as users perform application tasks.

The previous created component is aimed to be routed as a standalone page from the default app component.

## Routing configuration

1. Open the `src/app/app-routing.module.ts` file.
2. Replace the content of the file with the following code:

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: 'components', component: ComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

3. Open the `src/app/app.component.html` file.
4. Replace the content of the file with the following code:

```html
<h1>Hello World!</h1>
<a routerLink="/components">Components</a>
<router-outlet></router-outlet>
```

5. Save the file.
6. Go back to your browser and refresh the page.
7. You should see the following page:



## RouterLink

The `routerLink` directive lets you link to specific parts of your app.

1. Open the `src/app/app.component.html` file.
2. Replace the content of the file with the following code:

```html
<h1>Hello World!</h1>
<a routerLink="/components">Components</a>
<a routerLink="/components">Components</a>
<a routerLink="/components">Components</a>
<router-outlet></router-outlet>
```

3. Save the file.
4. Go back to your browser and refresh the page.
5. You should see the following page:


