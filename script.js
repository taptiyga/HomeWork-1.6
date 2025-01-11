// Ищем элементы на странице
const form = document.querySelector('#form')
const formInput = document.querySelector('#formInput')
const list = document.querySelector('#list')
const buttonAdd = document.querySelector('#buttonAdd')
const buttonDel = document.querySelector('#buttonDel')

form.addEventListener('submit', addTask)

list.addEventListener('click', delTask)

function addTask(e) {
    e.preventDefault()
    const formText = formInput.value
    const itemHTML = `<li class="item" id="item">
    <span class="item__text" id="itemText">${formText}</span>
    <button class="button" id="buttonDel">del</button>
    </li>`
    if (formText != "") {
        list.insertAdjacentHTML('beforeend', itemHTML)
    }
    formInput.value = ''
    formInput.focus()
}

function delTask(e) {
    if (e.target.id === 'buttonDel') {
        const parentItem = e.target.closest('.item')
        parentItem.remove()
    }
}
