const categories = document.querySelectorAll('li.item')
console.log(`Number of categories: ${categories.length}`)

const categoryTitle = document.querySelectorAll('h2')

function itemCount() {
    for (let i = 0; i < categoryTitle.length; i++) {
        console.log(`Category: ${categoryTitle[i].innerHTML}`)
        const category = categories[i]
        const categoryItems = category.querySelectorAll('li')
        console.log(`Elements: ${categoryItems.length}`)
    }
}

console.log(itemCount())