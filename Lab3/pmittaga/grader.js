function grader(score) {
   
   
  if(score>1 || score<0.6)
    var  grade = "F";
      else if(score>=0.9)
    var  grade = "A";
      else if(score>=0.8)
     var grade = "B";
      else if(score>=0.7)
     var grade = "C";
      else if(score>=0.6)
     var grade = "D";
      else
      var grade ="";
      
      return grade;
      
}

Test.describe("Solution", function() {
  Test.it("should pass some sample tests", function() {
    Test.assertEquals(grader(0.7), "C");
    Test.assertEquals(grader(0.9), "A");
    Test.assertEquals(grader(0.6), "D");
  });
});