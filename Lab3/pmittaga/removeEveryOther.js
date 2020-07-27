function removeEveryOther(arr){
  //your code here
 
  var givenarray=arr;
  var keeparray=[];
  var removearray=[];
  for (var i=0;i<arr.length;i++){
    if (i%2==0)
    {
        keeparray.push(arr[i]);
    }
    else {
          removearray.push(removearray[i]);
    }
 
  }
  return keeparray;
}

Test.describe("Basic tests",_=>{
Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
})