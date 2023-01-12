function demo(event){

    //alert("demo called...")
    console.log(event)
    //var x = document.getElementById("text").innerText = "hello world"
    var x = document.getElementById("text").innerHTML = "hello world"
    console.log(x)
    var link = document.getElementById("google").href = "https://www.facebook.com"
    var link1 =document.getElementById("google").innerHTML = "facebook"
    document.getElementById("hdr").style.backgroundColor = "red"
    document.getElementById("ip").style.height = "400px"
    document.getElementById("ip").style.width = "400px"

}

