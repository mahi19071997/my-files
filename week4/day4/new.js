var array= ["Apple", "Windows", "UBUNTU"];
var sum= function(al,el){
return al+"-"+el;
}
var dash= array.reduce(sum).toLowerCase();
console.log(dash);