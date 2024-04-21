function newelement(container, type, id) {

    type = document.createElement(type)
   inject = document.querySelector(`#${container}`)
   return inject.appendChild(type), type.id = `${id}`
}

const div = new newelement("body", "div", "div")

const p = new newelement("div", "p", "p")
p.innerHTML = 'hello i am sudip'

