var no1 = 100
var no2 = 100

//false 100 > 100
//TRUE
if(no1>=no2){
    console.log("no1 is greater")
}
else if(no1===no2){
    console.log("both are equal")
}
else{
    console.log("no2 is greater")
}

var age = 8
if(age>=18){
    console.log("you are eligible for voting")
    if(age>=21){
        console.log("you are eligible for mrg")
    }
    else{
        console.log("you are not eligible for mrg")
    }
}
else{
    console.log("you are not eligible for voting")
    if(age>=5){
        console.log("you are eligible for school")
    }
    else{
        console.log("you are not eligible for school")
    }
}


//x%2==0 && x>=500
//T   T   T
//T   F   F
//F   -  F
//x%2==0 || x>=500
//T  - T
//F  T T
//F  F F




x = 551
if(x%2==0 || x>=500){
    console.log("x is even or greater than 500")
}
else{
    console.log("x is odd or less than 500")
}












