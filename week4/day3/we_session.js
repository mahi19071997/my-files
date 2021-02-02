var num =[7,4,5,6]
num.forEach(function(el){
    console.log(el**2)
}
)
var number = function(el){
    return el*2
}
var double_number= number.map(double)