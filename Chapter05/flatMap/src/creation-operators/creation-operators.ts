/**
*
*/
import { of, from, range, fromEvent } from "rxjs";
import { map } from 'rxjs/operators';

// of() operator
// It takes an unknown number of comma-separated arguments, which can be integers, strings, or objects.
// It is useful if you want to emit a limited set of values.
const numberStream$ = of(1, 2, 3);
const objectStream$ = of({age: 37}, {name: 'chris'});

numberStream$.subscribe(data => console.log(data));
objectStream$.subscribe(data => console.log(data));

// from() operator
// It can takes arrays or a Promise as input and turn them into a stream.

const promiseStream$ = from(
    new Promise(resolve => setTimeout(() => resolve("Data"), 3000))
);

const arrayStream$ = from([1,2,3,4]);

// emits data after 3 seconds
promiseStream$.subscribe(data => console.log("data: ", data));

// emits 1, 2, 3, 4
arrayStream$.subscribe(data => console.log("data: ", data));

// range() operator
// It lets you specify a range.
const stream$ = range(1,99);

// emits 1 .. 99
stream$.subscribe(data => console.log("data: ", data));

// fromEvent() operator
// It allow us to mix a UI event and turn into an stream.

const elem = document.getElementById('input');
const eventStream$ = fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    map(ev => ev.key)
);

eventStream$.subscribe(data => console.log(data));
