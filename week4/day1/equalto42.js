function runProgram(input){
    // Write code here
    var data = input.split(/[\r\n]+/)
    var num= data[0].trim().split(" ").map(Number)
    var arr= data[1].trim().split(" ").map(Number)
    for(var i=0;i<num;i++){
        if(arr[i]==42){
            console.log("Yes")
            break;
        }
        else
        {
            console.log("No")
            
        }
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