function test(event){

   let name =  document.getElementById("txt").value
   console.log(name)
   document.getElementById("ptxt").innerHTML = name

   if(name.length>5){
    alert("Name is too long")
   }
}
function test1(){

    alert("focus lost")

}

