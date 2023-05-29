const input = document.querySelector('input#font-size-control')

const text = document.querySelector('span#text')

input.oninput = function()
    {
        text.setAttribute('style', `font-size: ${input.value + 'px'}`)
    }

input.addEventListener("input", function () {
});