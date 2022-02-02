let list = document.querySelectorAll('.item')
console.log(` в списке ${list.length} категории`)
list.forEach(e => {
    let head = e.querySelector('h2').textContent
    let len = e.querySelectorAll('li')
    console.log(`категория: ${head}`)
    console.log(`Количество элементов: ${len.length}`)
})