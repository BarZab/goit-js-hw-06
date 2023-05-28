const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

const changeText = event => {
    if (event.currentTarget.value > 0) {
        output.textContent = event.currentTarget.value
    } else { 
        output.textContent = 'Anonymous'
    }
}

input.addEventListener('input', changeText)