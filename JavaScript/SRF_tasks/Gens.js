var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

// alert(pazzlers[3](9))
console.log(puzzlers[3](9));
console.log(puzzlers[1](3));
console.log(puzzlers[puzzlers[1](3)](puzzlers[3](9)));