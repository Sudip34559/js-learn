const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
    // console.log(button);
  button.addEventListener('click', function (e) {
  console.log(e);
  console.log(e.target);
    
  switch (e.target.id) {
    case "grey":
        body.style.backgroundColor = e.target.id
        break;
    case "white":
        body.style.backgroundColor = e.target.id
        break;
    case "blue":
        body.style.backgroundColor = e.target.id
        break;
    case "yellow":
        body.style.backgroundColor = e.target.id
        break;
  
    default:
        body.style.backgroundColor = "white"
        break;
  }
  });
});
const click = document.querySelector(".body").children[0]
const clickButton = document.querySelector(".clickbutton")
const cross = document.querySelector("#cross")
 click.style.display = 'none'
clickButton.addEventListener("click", function (t) {
    
    switch (t.target.id) {
        case "click":
            click.style.display = 'flex'
            break;
    
        default:
            click.style.display = 'none'
            break;
    }
} )
cross.addEventListener("click", function (c) {
    console.log(c);
    if (c.target.id === "cross") {
        click.style.display = 'none'
    }
})
