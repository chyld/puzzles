function goodVsEvil(good, evil){
  var g = [1, 2, 3, 3, 4, 10];
  var e = [1, 2, 2, 2, 3, 5, 10];

  var gs = score(good, g);
  var es = score(evil, e);

  if(gs > es)
    return 'Battle Result: Good triumphs over Evil';
  else if(es > gs)
    return 'Battle Result: Evil eradicates all trace of Good';
  else
    return 'Battle Result: No victor on this battle field';
}

function score(counts, ranks){
  return counts.split(' ')
  .map(function(count, index){
    return ranks[index] * count;
  })
  .reduce(function(sum, value){
    return sum + value;
  });
}
