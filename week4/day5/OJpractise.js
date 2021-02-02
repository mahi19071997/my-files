function runProgram(input){
    // Write code here
    var data = input.split(/[\r\n]+/)
    var count1= data[0].trim().split(" ").map(Number)
    var squ= count1**2
    // var count2= data[1].trim().split(" ").map(Number)
    // var sum=0
    // for(var i=0;i<count1;i++){
    //     if(i%2==0){
    //         sum+=count2[i]
    //     }
        

    console.log(squ)
    // var count2= data[1].trim().split(" ").map(Number)
    // var sum=0
    // for(var i=0;i<count1;i++){
    //     sum+=count2[i]
    // }if(sum>100){
    //     console.log("greater")
    // }else{

    //     console.log("smaller")
    // }
    // var reqd_L= count1[0];
    // var reqd_B= count1[1];
    // var up_L= count2[0];
    // var up_B= count2[1];
    // if(reqd_L<up_L && reqd_B<up_B ){
    //     console.log("UPLOAD")
    // }
    // else if(reqd_L>up_L && reqd_B<up_B){
    //     console.log("INCREASE LENGTH")
    // }
    // else if(reqd_B>up_B){
    //     console.log("INCREASE WIDTH")
    // }



    // var left= count1[0]
    // var k= count1[1]
    // var right= count1[2]
    // var count=0
    // for(var i=left; i<=right;i++ ){
    //     if(i%k==0){
    //         count++
    //     }
    // }console.log(count)
    // var count2= data[1].trim().split(" ").map(Number)
    // var product=1;
    // for(var i=0;i<count1;i++){
    //    product=product*count2[i]
    //     }
    
    // console.log(product)




    // var numbers= data[1].trim().split(" ").map(Number)
    // count=0
    // for(var i=0;i<count1;i++)
    // if(numbers[i]==42){
    //     console.log("yes")
    //     break;
    // }else{
    //     count++
    // }
    // if(count==count1){
    //     console.log("not present")
    // }
    



    // if(marks1>90){
    //     console.log("A")
    // }
    // else if(marks1>80){
    //     console.log("B")
    // }
    // else if(marks1>70){
    //     console.log("C")
    // }
    // else{
    //     console.log("F")
    // }
// var phy1= marks1[0]
// var chem1= marks1[1]
// var maths1= marks1[2]
// var phy2= marks2[0]
// var chem2= marks2[1]
// var maths2= marks2[2]

// var sum1=0
// sum1= phy1 + chem1 +maths1
// var sum2=0
// sum2= phy2 + chem2 +maths2


// if(sum1>sum2){
//     console.log("first")
// }
// else if(sum1<sum2){
//     console.log("first")
// }

// if(sum1==sum2){
//     if(maths1>maths2){
//         console.log("first")
//     }else if(maths1<maths2){
//         console.log("second")
//     }
// if(sum1==sum2 && maths1==maths2){
//     if(phy1>phy2){
//         console.log("first")
//     }else {
//         console.log("second")
//     }
// }
// }


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