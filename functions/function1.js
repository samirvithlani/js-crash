function sum(){
    console.log("sum function")
}

function add(a,b)
{
    var x = a + b
    return x

}

function div(){

    var p = parseFloat(prompt("enter no"))
    var q = parseFloat(prompt("enter no"))
    return p/q;
}
function mul(a,b){
    
    var ans = a * b
    console.log(ans)

}
sum()

var res = add(10,20)
console.log(res)
var res1 = div()
console.log(res1)
mul(10,2)