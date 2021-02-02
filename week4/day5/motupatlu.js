function runProgram(input){
    var data = input.split(/[\r\n]+/)
    var array= data[0].trim().split(" ").map(Number)
    var steps=0;
    if(array%5==0){
        

    }
    else if(array%4==0){


    }
    else if(array%3==0){

    }
    else if(array%2==0){

    }
    else if(array%1==0){

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