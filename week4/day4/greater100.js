function runProgram(input){
    var num= (input).split(/[\r\n]+/)
    var number= num[0].trim().split(" ").map(Number)
    var nums= num[1].trim().split(" ").map(Number)
    var sum=0
    
    for(var i=0;i<number;i++){
        sum+=nums[i]
    }

    if(sum>100){
        console.log("Greater")
    }else{
        console.log("Lesser")
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