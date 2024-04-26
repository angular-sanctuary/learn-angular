---
title: Typescript Introduction
description: Create your first Typescript model
---

:::note
Learn how to create your first TypeScript model.
:::

## What is TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript is pure object-oriented with classes, interfaces, and statically typed like C# or Java.

## Why use TypeScript?

Using TypeScript has several advantages:

- **Type safety**: TypeScript provides static typing, which helps you catch errors at compile time rather than at runtime. This can help you catch bugs early and improve the quality of your code.
- **Tooling**: TypeScript provides a rich set of tools for building and maintaining large-scale applications. This includes features such as code completion, refactoring, and navigation.
- **Readability**: TypeScript provides a way to add type annotations to your code, which can make it easier to understand and maintain.

Given a **car** JavaScript object, you might except such a format:

```javascript
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};
```

To log the model of the car, you would do:

```javascript
console.log(car.model);
```

But not only you need to remind the structure of the car object, but also you need to remember the type of each property.
It makes it complicated to maintain and understand the code.

In TypeScript, you can define a **Car** interface like this:

```typescript
export interface Car {
  make: string;
  model: string;
  year: number;
}
```

And then you can use it like this:

```typescript
const car: Car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
};
```

:::note
The typescript authoring format is:

```typescript
<property>: <type> = <value>;
```

`[]` is used to define an array, like in `tasks: Task[]`.
:::

## What are the benefits of using TypeScript?

### Autocompletion

When you define a type for a variable, you get autocompletion for the properties of that type.

// TODO add a screenshot

### Type checking

TypeScript will check if you are using the right type for a variable.

#### IDE support

Your IDE will warn you if you are using the wrong type for a variable.

// TODO add a screenshot

#### Compile time errors

TypeScript will catch errors at compile time.

// TODO add a screenshot


## What you learned

In this chapter, you learned how to create your first TypeScript model. You learned how to define a TypeScript interface and how to use it to create a new object. You also learned about the benefits of using TypeScript, such as autocompletion, type checking, IDE support, and compile time errors.
Typescript is a tool to enhance your experience as a developer. It helps you to write better code, catch errors early, and improve the quality of your code. It's a great tool to use in your projects.
