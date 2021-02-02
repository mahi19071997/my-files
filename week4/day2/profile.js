function runProgram(input){
    // Write code here
   var num= input.split(/[\r\n]+/)
   var reqd=num[0].trim().split(" ").map(Number)
   var upload=num[1].trim().split(" ").map(Number)
   var length_req= reqd[0]
   var width_req= reqd[1]
   var length_uploaded= upload[0]
   var width_uploaded= upload[1]
   if(length_req<length_uploaded && width_req<width_uploaded ){
       console.log("Upload")
   }
   else if(length_req>length_uploaded){
       console.log("Increase Length")
   }
   else{
       console.log("Increase Width")
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