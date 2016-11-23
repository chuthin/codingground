
var source = Rx.Observable.fromArray(['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13']);

var result = source
  .map(x => parseInt(x))
  .filter(x => !isNaN(x))
  .filter(x => x%2 == 0)
  .subscribe(x => console.log(x));
console.log('--------------------------------------------------------------')