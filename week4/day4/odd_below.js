function runProgram(input){
    var num= (input).split(/[\r\n]+/)
    var number= num[0].trim().split(" ").map(Number)
    var sum=0
    for(var i=0;i<=number;i++){
        if(i%2==1){
            sum+=i
        }
    }
    console.log(sum)
    

    
    
    
    
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