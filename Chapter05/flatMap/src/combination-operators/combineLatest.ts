import { interval, combineLatest } from "rxjs";
import { take } from "rxjs/operators";

// combineLatest() operator
// It's useful in situations where one or several endpoints
// stop sending data after a while and you want to know what
// the last thing that happened was.
// It give us the ability to combine all the latest values 
// from all of the involved endpoints.
//
// This operator ensures we are still given the very last value.

const firstStream$ = interval(500).pipe(
    take(3)
);

const secondStream$ = interval(500).pipe(
    take(5)
);

const combinedStream$ = combineLatest(
    firstStream$,
    secondStream$
);

// emits [0,0] [1,1] [2,2] [2,3] [2,4] [2.5]
combinedStream$.subscribe(data => console.log(data));