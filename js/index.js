var myObservable = Rx.Observable.create(function(observer) {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(
    function(value){
        console.log(value)  
    } 
);



// typing "hello world"
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// Filter out target values less than 3 characters long
input.filter(event => event.target.value.length > 2)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hel"
/*
// Delay the events
input.delay(200)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "h" -200ms-> "e" -200ms-> "l" ...

// Only let through an event every 200 ms
input.throttleTime(200)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "h" -200ms-> "w"

// Let through latest event after 200 ms
input.debounceTime(200)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "o" -200ms-> "d"

// Stop the stream of events after 3 events
input.take(3)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hel"

// Passes through events until other observable triggers an event
var stopStream = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
input.takeUntil(stopStream)
  .map(event => event.target.value)
  .subscribe(value => console.log(value)); // "hello" (click)
  
  */