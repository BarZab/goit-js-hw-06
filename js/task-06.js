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
}

textArea.addEventListener('blur', checkLength)