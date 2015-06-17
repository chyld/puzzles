function multiplicationTable(size){
  var table = [];
  for(var col = 1; col <= size; col++){
    for(var row = 1; row <= size; row++){
      table[row-1] ? table[row-1].push(row * col) : table[row-1] = [row * col];
    };
  };

  return table;
}

console.log(multiplicationTable(5));
