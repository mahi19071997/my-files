"use strict";

// You are given an array of N elements. Your task is to write a program that calculates sum of all the alternate elements starting from 2nd element of the array (index 1 of array).
function runProgram(input) {
  var data = input.split(/[\r\n]+/);
  var array = data[0].trim().split(" ").map(Number);
  var arr = data[1].trim().split(" ").map(Number);
  var sum = 0;

  for (var i = 0; i < array; i++) {
    if (i % 2 == 1) {
      sum += arr[i];
    }
  }

  console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});