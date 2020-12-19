function hello() {
    console.log('Hello') 
}

function dom(){
    const p = document.createElement('p')
    const text = document.createTextNode('ohyeah')
    document.body.appendChild(p).appendChild(text)
}

let i = 0
function countUp(){
    i += 1
    let v = null

    if (i % 3 == 0 && i % 5 == 0) {
        v = 'fizzbuzz'
    } else if (i % 3 == 0) {
        v = 'fizz'
    } else if (i % 5 == 0) {
        v = 'buzz'
    } else {
        v = i
    }

    const span = document.createElement('span')
    const inode = document.createTextNode(v)
    document.body.appendChild(span).appendChild(inode)
}

let messageCounter = 0

function talk(){
    const message = document.getElementsByName('texts')[0].value
    window.localStorage.setItem(messageCounter, message)
    createMessageDom(message)
    console.log(`キー「${messageCounter}」を保存しました`)
}

function createMessageDom(message) {
    const p = document.createElement('p')
    const button = document.createElement('button')
    const texts = document.createTextNode(message)
    const deleteButton = document.createTextNode('×')
    document.body.appendChild(p).appendChild(texts)
    document.body.appendChild(p).appendChild(button).appendChild(deleteButton) 
    button.className = 'delete-button'
    button.setAttribute('onclick','removeTexts(this)')
    p.setAttribute('onmouseover','removeCssClass(this)')
    p.setAttribute('onmouseout','moveCssClass(this)')
    p.setAttribute('id', messageCounter)
    messageCounter += 1
}

function removeCssClass(element) {
    element.lastChild.className = ' '
}

function moveCssClass(element) {
    element.lastChild.className = 'delete-button'
}

function removeTexts(element) {
    element.parentNode.remove()
    window.localStorage.removeItem(element.parentNode.getAttribute('id'))
    console.log(element.parentNode.getAttribute('id'))
}

let archiveMessageCounter = 0
function loadMessage() {
    while (true) {
        let archiveMessage = window.localStorage.getItem(archiveMessageCounter)
        if (archiveMessage == null) break
        createMessageDom(archiveMessage)
        archiveMessageCounter += 1
    }    
}