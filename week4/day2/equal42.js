function runProgram(input){
    // Write code here
   var num= input.split(/[\r\n]+/)
   var N=num[0].trim().split(" ").map(Number)
   var arr=num[1].trim().split(" ").map(Number)
   var count=0
   for(var i=0;i<arr.length;i++)
   if(arr[i]==42){
       console.log("Yes")
   }
   else{
       count++
   }
   if(count==N){
       console.log("No")
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