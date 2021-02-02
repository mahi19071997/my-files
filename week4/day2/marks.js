function runProgram(input){
    // Write code here
   var num= input.split(/[\r\n]+/)
   var N=num[0].trim().split(" ").map(Number)
   if(N==100){
       console.log("A")
   }
   else if(N>=90){
    console.log("B")
   }
   else if(N>=80){
    console.log("C")
   }
   else{
    console.log("F")
   }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});