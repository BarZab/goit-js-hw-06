const textArea = document.querySelector('#validation-input')

const dataLength = textArea.getAttribute('data-length')

const checkLength = (event) => {
    const stringLength = event.currentTarget.value.length + ''
    if (dataLength === stringLength) {
        textArea.removeAttribute('class')
        textArea.classList.add('valid')
    } else {
        textArea.removeAttribute('class')
        textArea.classList.add('invalid')
    }
    console.log(dataLength === stringLength)
}

textArea.addEventListener('blur', checkLength)

console.log(dataLength)