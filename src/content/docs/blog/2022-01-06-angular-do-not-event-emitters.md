---
title: "You shouldn't use EventEmitters in Angular services"
date: 2024-05-16
excerpt: 'Use the right API for reactivity'
---

_Cover photo by <a href="https://unsplash.com/@hudsoncrafted?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Debby Hudson</a> on <a href="https://unsplash.com/s/photos/build?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>_

By reviewing Angular code daily through mentoring or community support, I happen to find **EventEmitters** being used in Angular services.

Here is an example with a service dedicated to broadcasting some data to other parts of the application :

```typescript
export class DataService {
  data: EventEmitter<Data> = new EventEmitter<Data>();

  updateData(data: Data): void {
    this.data.emit(data);
  }
}
```

By using dependency injection, a component can subscribe to the EventEmitter to receive the emitted values :

```typescript
export class MyComponent {
  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.data.subscribe(() => {
      // do whatever you want
    });
  }
}
```

It works: if another part of the application uses `updateData` to emit a value, the component will receive it.

So why **shouldn't** you use it?

---

Let's take a look at EventEmitter API.
Here is a simplified version of the original EventEmitter codebase based on its usage in the previous code samples :

````typescript
class EventEmitter extends Subject<any> {
  constructor() {
    super();
  }

  emit(value?: any) {
    super.next(value);
  }

  subscribe(observerOrNext?: any, error?: any, complete?: any): Subscription {
    const sink = super.subscribe({next: observerOrNext, error: error, complete: complete});

    return sink;
  }
}
```

From creating your *EventEmitter* to the subscription, you use nothing more than the extended class : a *Subject*.

The first motivation not to use an *EventEmitter* over a *Subject* is to *keep it simple stupid* (KISS), as a Subject already provides you all you need.

The second reason lies in the original purpose of an *EventEmitter* as explained in the [reference API](https://angular.io/api/core/EventEmitter) :

> Use in components with the @Output directive to emit custom events synchronously or asynchronously, and register handlers for those events by subscribing to an instance.

By using it for another purpose **might lead to bugs** if changes occur on this API for the benefit of its original purpose.

## How to refactor your codebase

A reminder of the previous usage:

```typescript
export class DataService {
  data: EventEmitter<Data> = new EventEmitter<Data>();

  updateData(data: Data): void {
    this.data.emit(data);
  }
}
```

The required changes are:
- the type from EventEmitter to Subject
- the exposure of the Subject as a private resource for the service to avoid external emissions
- the creation of a public Observable version of the Subject you can subscribe to
- an update to match the API to emit a new value

```typescript
export class DataService {
  // change the type and the visibility
  private dataSubject: Subject<Data> = new Subject<Data>();
  // create a public observable out of the subject for external usage
  data$: Observable<Data> = this.dataSubject.asObservable();

  updateData(data: Data): void {
    // update the API
    this.dataSubject.next(data);
  }
}
```

Such a move is also a great opportunity to explore [variant Subjects](https://rxjs.dev/guide/subject): BehaviorSubject, ReplaySubject, and AsynSubject.

Happy coding!
