function runProgram(input){
    // Write code here
    var winning = input.split(/[\r\n]+/)
    var winning1= winning[0].trim().split(" ").map(Number)
    var winning2= winning[1].trim().split(" ").map(Number)

    var score1 = winning1[0]
    var superover1 = winning1[1]
    var four_new = winning1[2]
    var score2 = winning2[0]
    var superover2 = winning2[1]
    var four_eng = winning2[2]

    if(score1>score2){
        console.log("New Zealand")
    }
    else if(score2>score1){
        console.log("England")
    }
    

    if(score1==score2){
        if(superover1>superover2){
            console.log("New Zealand")
        }else if(superover1<superover2){
            console.log("England")
        }
    }
    if(score1==score2 && superover1==superover2){
        if(four_new>four_eng){
            console.log("New Zealand")
        }
        else if (four_new<four_eng){
            console.log("England")
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