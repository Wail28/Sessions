var myInfo = {
    stName : "Wail",
    stAge : 21,
    address : "Muscat",
    stNumber : Math.floor(Math.random()*10000000000)
}



if(myInfo.stAge <= 18 ){
    console.log("Try again Later!")
}
else{
    console.log(myInfo.stName +" "+myInfo.stAge + " " + myInfo.address + " " + myInfo.stNumber)
}