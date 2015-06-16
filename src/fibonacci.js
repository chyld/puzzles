function fibR(n){
  if(n === 0) return 0;
  if(n === 1) return 1;

  return fib(n-1) + fib(n-2);
}

function fibI(n){
  if(n === 0) return 0;
  if(n === 1) return 1;

  var a = 0;
  var b = 1;
  var c;

  for(var i = 2; i <= n; i++){
    c = a + b;
    a = b;
    b = c;
  }

  return c;
}

function topNthFib(n){
  var fibs = [];
  for(var i = 0; i < n; i++)
    fibs.push(fibI(i));

  return fibs;
}

function fibGoldenRatio(n){
  var fibs = topNthFib(n);
  var ratios = fibs.map(function(f, i){
    return f / fibs[i-1];
  }).filter(function(r){
    return !isNaN(r) && r !== Infinity;
  });

  return ratios;
}
