import { of, zip } from "rxjs";

// zip() operator
// It's useful to stich as many values together as possible.
// The values are stitched together vertically.

const stream$ = of(1,2,3,4);
const secondStream$ = of(5,6,7,8);
const thirdStream$ = of(9,10);

const zippedStream$ = zip(
    stream$, 
    secondStream$, 
    thirdStream$);

zippedStream$.subscribe(data => console.log(data));    
    


