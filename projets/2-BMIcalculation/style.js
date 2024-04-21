const form = document.querySelector("form")

form.addEventListener('submit',function (s) {
    s.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

      if ((weight === '' || weight < 0 || isNaN(weight)) && (weight === '' || weight < 0 || isNaN(weight))) {
        result.innerHTML = "<span>Error</span>"
    }else {
       const BMIvalue = ( weight/((height * height )/ 10000)).toFixed(2)
       result.innerHTML =  `<span>${BMIvalue}</span>`
    }

} )