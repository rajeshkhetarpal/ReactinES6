import Rx from 'rxjs/Rx';


let visitors = [
    "Namita",
    "Amit",
    "Rohit",
    "Neetika"
];

let source = Rx.Observable.from(visitors)
    .switchMap(x => Rx.Observable.of('Hello ' + x));

source.subscribe(x => console.log(x) );

