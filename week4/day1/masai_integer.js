function runProgram(input){
    // Write code here
    var data = input.split(/[\r\n]+/)
    var num= data[0].trim().split(" ").map(Number)
    if(num%35===0){
        console.log("Masai School")
    }
    else if (num%7===0){
        console.log("Masai")
    }
    else if(num%5===0){
        console.log("School")
    }
    else{
        console.log("Hurray!")
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