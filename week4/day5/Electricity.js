function runProgram(input){
    var data = input.split(/[\r\n]+/)
    var rupee= data[0].trim().split(" ").map(Number)
    var unit=0
    if(rupee>=80 && rupee<=230){
       unit= (rupee-80)/3
    }
    else if(rupee>335 && rupee<1580){
        unit= (rupee-80)/5
     }
     else if(rupee>1580){
        unit= (rupee-80)/10
     }
    console.log(unit)





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