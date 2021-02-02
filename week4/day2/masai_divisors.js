function runProgram(input){
    // Write code here
   var num= input.split(/[\r\n]+/)
   var N=num[0].trim().split(" ").map(Number)
   var left= N[0]
   var right= N[1]
   var k= N[2]
   count=0
   for(var i=left; i<=right;i++){
       if(i%k==0){
           
        count++
    }
    

   }console.log(count)
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