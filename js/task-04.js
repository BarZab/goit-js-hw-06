const startingValue = document.querySelector('#value')

let counterValue = 0

const buttons = document.querySelectorAll('button')

const increaseButton = buttons[1]

const decreaseButton = buttons[0]

const increaseValue = () => {
    counterValue += 1
    startingValue.innerHTML = counterValue
}

const decreaseValue = () => {
    counterValue -= 1
    startingValue.innerHTML = counterValue
}

increaseButton.addEventListener('click', increaseValue)

decreaseButton.addEventListener('click', decreaseValue)