var array= ["Apple", "Windows", "Linux", "Kindle", "Quiz"]
var str= function(el){
    return el.length
}
var len =array.map(str)
var odd=function(el){
    return el%2==1
}
var sum= function(a,e){
    return a+e
}
var odd_length_sum= array.map(str).filter(odd).reduce(sum)
console.log(odd_length_sum)