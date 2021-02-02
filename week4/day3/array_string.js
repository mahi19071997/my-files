var names =["apple", "windows", "ubuntu", "cola", "system"]
var str=function(el){
    return el[0]==='a'|| el[el.length-1]==='a';
    
}
var strr =names.filter(str)
console.log(strr)
