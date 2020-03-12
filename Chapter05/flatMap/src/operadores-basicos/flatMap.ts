/**
 * The flatMap operator take an array of streams
 * and turn them into one stream, a metastream.
 */
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

const stream$ = of(1, 2, 3);

stream$.pipe(
    flatMap(data => of(data))
)
.subscribe(val => console.log(val));