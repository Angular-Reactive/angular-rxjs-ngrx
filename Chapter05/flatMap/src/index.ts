import { interval, combineLatest } from "rxjs";
import { take } from "rxjs/operators";

// combineLatest() operator

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