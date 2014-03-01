// describe ("fibonacciNumGen", function() {
//   it("takes the sum of two numbers before it", function() {
//     fibonacciNumGen(0).should.equal.(0);
//   });
//   it("Return 1 if input is 0", function() {
//     factorial(0).should.equal(1);
//   });
// });

describe ('fibonacciNumGen', function() {
    it("takes the sum of two numbers before it", function() {
    bottlesOfFibonacci(8).should.equal(13);
  });
});


describe ('cryptoRemovePunc', function() {
    it("removes punctuation ot the sentence", function() {
    cryptoRemovePunc("Have a nice day. Feed the dog & chill out!").should.equal("Have a nice day Feed the dog chill out");
  });
});
