
var numbers = [1, 2, 6, 8, 12, 14];
// Normal Way
var result = numbers.filter(function(element) {
  if (element>5){
      return element
  };
})
console.log(result);
 
// ES6 way
var a= numbers.filter(element => element>5)
console.log(result);
