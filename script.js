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
    textBox = document.getElementsByName('texts')[0].value
    const p = document.createElement('p')
    const texts = document.createTextNode(textBox)
    document.body.appendChild(p).appendChild(texts)  
}