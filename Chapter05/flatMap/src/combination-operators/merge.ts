import { from, interval } from "rxjs";
import { take, merge } from "rxjs/operators";

// merge() operator

const promiseStream$ = from(new Promise(resolve => resolve('data')));

const stream$ = interval(500).pipe(
    take(3)
);

const stream2$ = interval(500).pipe(
    take(5)
);

// instance method version of merge(), emits 0,0,1,1,2,2,3,4
stream$.pipe(
    merge(stream2$)
).subscribe(data => console.log("merged: ", data));

// static version of merge(), emits 0,0,1,1,2,2,3,4 and 'data'
merge(stream$, stream2$, promiseStream$);