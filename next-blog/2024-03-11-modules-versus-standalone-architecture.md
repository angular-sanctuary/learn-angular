---
title: 'Angular Application architecture!'
slug: 'standalone-versus-modules-architecture'
description: 'Learn to create a standalone Angular application architecture!'
pubDate: 'Mar 8 2024'
heroImage: '/blog/angular-architecture/cover.png'
tags: ['angular']
---

Starting with Angular 17, a n Angular application created with `ng new` is a **Standalone application**.
It uses the Standalone API not only for COmponents and Directives but as a way to bootstrap the application.

ngModules are part of the past!

If Standalone is quite new to you are still relying on old course content using ngModules, here are the differences!

### Components and Directives context

Modules were used to wrap all the required context for a component/directive to work by declaring them in the declarations array of the module.

Here is for example a module that declares a component:

```typescript
@NgModule({
  declarations: [MyComponent, MyDirective]
})
export class MyModule {}
```

If this component uses another one in its template, we would need either:

- to declare the other component in the same module
- or to import another module declaring the other component


So at any point, if some part of your component does not work as expected by importin an API or trying to use some directive/pipe/components in its temmplate, it's due to its ngModule not providing the required context.
One of the most common error with ngModule is trying to import this ocntext in the wrong ngModule

#### The Standalone solution

Heritated from a first community initiative called **SCAM** (Single Component Angular Module), the Standalone API is a solution for the component itself to provide its context.
With the addition of the `standalone` property in the `@Component` decorator, the component can declare its own context.

By doing so you can provide its context in the `imports` property in the `@Component` decorator.

Here is for example a component that declares another component in its template:

```typescript
@Component({
  selector: 'my-component',
  template: `
    <other-component></other-component>
  `,
  standalone: true,
  imports: [OtherComponent]
})
export class MyComponent {}
```

This way, the component is self-sufficient and can be used in any context without the need of a module.

Doing so is not just an alternative, it'll simplify your tests and unlocks some exclusive features.

### Shared Modules

To simplify the import of the required context, peoplewere used to create 'shared modules' that would declare a given scope of context to be share in the application.
A common usage where for example to declare all the Material components in a shared module.

Here is an example of a shared module:

```typescript
@NgModule({
  declarations: [MyComponent, MyDirective],
  exports: [MyComponent, MyDirective]
})
export class SharedModule {}
```

While being useful, that' always the birth of a bloated ngModule: it quickly becomes out of control, providing way more context than required and making it difficult (impossible) to maintain.


#### The Standalone solution

While being what refrains people from using the standalone API, the real solution is to import the Component context one import at a time.
If your component relies on 10 components, 4 direcitves and 3 pipes, you'll have to import them all in the `imports` property of the `@Component` decorator.

Once again, the Standalone benefits are greater than expected at first sight.

### AppModule

The AppModule were used as the entry point of the application, providing the context for the whole application.
It was used in the main.ts file:

```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);`
```

