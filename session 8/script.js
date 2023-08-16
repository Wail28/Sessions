// let boxes = document.getElementById("boxes")
// let btn = document.getElementById("btn")
// let red = document.getElementById("red")
// let blue = document.getElementById("blue")
// let green = document.getElementById("green")


// btn.addEventListener("click",()=>{
//     setTimeout(()=>{
//         red.style.display="block"
//     },1000)
//     setTimeout(()=>{
//         blue.style.display="block"
//     },2000)
//     setTimeout(()=>{
//         green.style.display="block"
//     },3000)
// })

let display = document.getElementById("dis")
let img = document.getElementsByClassName("img")

for(let i = 0; i<=img.length; i++){
    img[i].addEventListener("click",function(){
        let x = img[i].getAttribute('src')
        display.setAttribute('src',x)
    })
}
