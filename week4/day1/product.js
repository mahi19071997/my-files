function runProgram(input) {
    var data=input.split(/[\r\n]+/)
    var num = data[0].trim().split(" ").map(Number)[0]
    var arr = data[1].trim().split(" ").map(Number)
    var product = 1
    for (var i = 0; i < num; i++) {
        product = product * arr[i]

    }
    console.log(product)





}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});