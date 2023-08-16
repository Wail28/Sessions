let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    let ans = Number(n1) + Number(n2);

    document.getElementById("output").innerHTML = ans;

})


window.addEventListener("keydown",function(letter){
     console.log(letter.code)
    if(letter.code==="ArrowLeft"){
        let box = document.getElementsByClassName("box")[0]
        box.classList.toggle("left");
    }
})