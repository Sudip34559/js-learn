const form = document.querySelector("form")
const returnbox = document.querySelector("#returnbox")
const box = document.querySelector("#box")


form.addEventListener("submit", function (s) {
    s.preventDefault()

    const money = parseInt(document.querySelector("#money").value)
    const rate = parseInt(document.querySelector("#rate").value)
    const time = parseInt(document.querySelector("#time").value) * 12
    const invest = document.querySelector("#invest")
    const totalreturn = document.querySelector("#totalreturn")
    const total = document.querySelector("#total")
    
    if ((money === "" || money < 0 || isNaN(money)) && (rate === "" || rate < 0 || isNaN(rate)) && (rate === "" || rate < 0 || isNaN(rate))){
      box.style.display = "none"
      returnbox.innerHTML = `<h1 style="color:red;">ERROR</h1>`

    }else {
        const power = Math.pow((1+(rate/(100*12))), (time));
        const value =Math.round(money*((power - 1)/(rate/(100*12)))*((rate/(100*12)) + 1))
        invest.innerHTML = `${money*time}`
        totalreturn.innerHTML = `${value - (money*time)}`
        total.innerHTML = `${value}`
    }
})
