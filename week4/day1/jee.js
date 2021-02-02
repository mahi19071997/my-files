function runProgram(input){
    // Write code here
    var data = input.split(/[\r\n]+/)
    var student1= data[0].trim().split(" ").map(Number)
    var student2= data[1].trim().split(" ").map(Number)
    var phy1= student1[0]
    var chem1= student1[1]
    var maths1= student1[2]
    var phy2= student2[0]
    var chem2= student2[1]
    var maths2= student2[2]

    var sum1=0
    var sum2=0
    sum1+= phy1+chem1+maths1
    sum2+= phy2+chem2+maths2
    if(sum1>sum2){
        console.log("First")
    }else if(sum1<sum2){
        console.log("Second")
    }

    if(sum1==sum2){
        if(maths1>maths2){
            console.log("First")
        }else if(maths1<maths2){
            console.log("Second")
        }

    }
    if(sum1==sum2 && maths1==maths2){
        if(phy1>phy2){
            console.log("First")
        }
        else if(phy1<phy2){
            console.log("Second")
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