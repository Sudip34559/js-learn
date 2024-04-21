
// function randomColor() {
//     const colorCode1 = Math.floor(Math.random()*225)
//     const colorCode2 = Math.floor(Math.random()*225)
//     const colorCode3 = Math.floor(Math.random()*225)
//     color = `rgb(${colorCode1}, ${colorCode2}, ${colorCode3})`
//     return color
// }

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color
}

let colorChange;

document.querySelector(".start").addEventListener("click", function () {
  if (!colorChange) {
    colorChange = setInterval(() => {
        document.querySelector("body").style.backgroundColor = randomColor()
       
    }, 2000);
  }
    
    document.querySelector(".stop").addEventListener("click", function () {
        clearInterval(colorChange)
        colorChange = null;
    })
})




