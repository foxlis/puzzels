var iterations = 1000;
var matchRate = 0;
console.log("Always pick 1 gate and assume that change is made to other gate after showing gate where for sure there is nothing.");
var i = 0;
for(i=0; i<iterations; i++) {
  var gateWithPrice = Math.floor(Math.random() * 3) + 1;
 
  if(gateWithPrice === 1) {
    console.log("LOOSE, changed to gate 2 or 3.");
  } else {
    console.log("WIN, changed to correct gate since it is known where is nothing.");
    matchRate++;
  }
}
console.log("Match rate is: " + (matchRate*100/iterations));
