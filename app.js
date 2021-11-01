var loadText = document.querySelector(".loading-text") // selecting the text
var bg = document.querySelector(".bg")  //selecting the picture

var load = 0  //initializing load to 0
let int = setInterval(blurring, 30) // initilizing int to get a set interval, the function blurring will start after 30ms

function blurring(){
    load++  //incrementing load 
    if (load > 99){ //when it reaches >99 has to stop
        clearInterval(int) //stopping the interval too
    }
    loadText.innerText = (load + "%") //assigning to the text, the incremented value
    loadText.style.opacity = scale (load, 0, 100, 1,0)  //scale has been taken from stack overflow website
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
}


// taken from stack overflow, it is a variable to get the number on the picture fade away
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}