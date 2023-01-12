function getData(event){

        event.preventDefault()
        var name = document.getElementById("name").value
        var age = document.getElementById("age").value

        //alert("Name: "+name+" Age: "+age)
        if(age>25){
            document.getElementById("ageerr").innerHTML = "Age is too high"
        }
        else{

            document.getElementById("aged").innerHTML = age
            document.getElementById("named").innerHTML = name
        }

}