---
title: 'Create derivations of a Typescript interface with Omit'
date: 2024-03-08
excerpt: 'Learn to create derivations of a Typescript interface with Omit'
tags: 
    - typescript
---

The true story about a given mental model of your data in your application is that its shape might change depending on the feature it lives in.

Let's take an **Article** interface as an example.

By retrieving an article from an API, the related interface might look like this:

```typescript
export interface Article {
  id: number;
  title: string;
  description: string;
}
```

Some properties dedicated to the article content and a technical id, created by the database and used to identify the article. 

But at the time of creating an article and sending it to the API, you don't have the id yet.

In this situation, using the previous interface would be a mistake and Typescript will expect you to provide an id.

```ts
export function createArticle(article: Article) {
  // ...
}
```

We could create a new interface for the creation of an article, but it would be a duplication of the previous interface.

```typescript
export interface ArticleCreation {
  title: string;
  description: string;
}
```

The **Omit** utility type comes to the rescue.

Omit allows you to create a new interface by omitting some properties from an existing interface.

So we still keep our existing Article interface and create a new one for the creation of an article.

```typescript
export interface Article {
    id: number;
    title: string;
    description: string;
}

export type ArticleCreation =  Omit<Article, 'id'>
```

The `ArticleCreation` interface is now a derivation of the `Article` interface, with the `id` property omitted.

You can now use the `ArticleCreation` interface to create a new article without the `id` property.

```typescript
export function createArticle(article: ArticleCreation) {
  // ...
}
```

## Mirror alternative

The `Omit` utility type is a mirror of the `Pick` utility type.

The `Pick` utility type allows you to create a new interface by picking some properties from an existing interface.

```typescript
export type ArticleCreation =  Pick<Article, 'title' | 'description'>
```

Choose Omit or Pick depending on the number of properties you want to omit or pick:

- Use `Omit` if you want to omit a few properties from an existing interface.
- Use `Pick` if you want to pick a few properties from an existing interface.

## Other alternatives

There are two alternatives not to make this id mandatory in your `Article` interface.
But there are poor ones compared to `Omit` as having some downsides.

### Partial

The `Partial` utility type allows you to make all properties of an interface optional.

```typescript
export type ArticleCreation =  Partial<Article>;
```

#### Downsides

By making all properties optional, you might introduce a bug in the article creation process by forgetting to provide a value for a property.

### Optional property

You can also choose not to create another type by making the `id` property optional in the `Article` interface and using it for both the article retrieval and creation.

```typescript
export interface Article {
    id?: number;
    title: string;
    description: string;
}
```

#### Downsides

By making the `id` property optional, it becomes possibly undefined for your whole application.
Not only it might leads to bugs, but it'll complexify the code by having to check if the `id` is defined or not.





## Conclusion

In this chapter, you learned how to create derivations of a TypeScript interface with the `Omit` utility type. You also learned about the alternatives to `Omit`, such as `Partial`, `Pick`, and optional properties.
