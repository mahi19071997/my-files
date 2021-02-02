var array= ["apple", "windows", "ubuntu"];
var sum= function(al,el){
return al+"-"+el;
}
var dash= array.reduce(sum).toLowerCase();
console.log(dash);