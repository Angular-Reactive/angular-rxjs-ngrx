import { from, interval } from "rxjs";
import { take, merge } from "rxjs/operators";

// merge() operator
// It takes data from different streams and combines it.
// These streams can ve of any kind as long as they are
// of type Observable.
// What mergind does is to interleave the emitted data.
// If you just need to combine one stream with another, then
// use the instance method version of this operator.
// If you have several streams, then use the static version.
// The ordeer in which the streams are specified matters.

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