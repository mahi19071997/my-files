var array= ["apple", "windows", "ubuntu"]
var sum =function(ac,el){
    return ac+"_"+el
}
var snake= array.reduce(sum)
console.log(snake)