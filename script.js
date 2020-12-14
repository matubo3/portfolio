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

function talk(){
    const textBox = document.getElementsByName('texts')[0].value
    const p = document.createElement('p')
    const button = document.createElement('button')
    const texts = document.createTextNode(textBox)
    const deleteButton = document.createTextNode('×')
    document.body.appendChild(p).appendChild(texts)
    document.body.appendChild(p).appendChild(button).appendChild(deleteButton) 
    button.className = 'delete-button'
    button.setAttribute('onclick','removeTexts(this)')
    p.setAttribute('onmouseover','removeCssClass(this)')
    p.setAttribute('onmouseout','moveCssClass(this)')
}

function removeCssClass(element) {
    element.lastChild.className = ' '
}

function moveCssClass(element) {
    element.lastChild.className = 'delete-button'
}

function removeTexts(element) {
    element.parentNode.remove()
}