function flatten(){
  return [].reduce.call(arguments, function(arr, val){
    if(Array.isArray(val)){
      return arr.concat(flatten.apply(null, val));
    }else{
      return arr.concat(val);
    }
  }, []);
}

console.log(flatten(true,2,null, ['x'], [5,6], [7, [8,9]]));
