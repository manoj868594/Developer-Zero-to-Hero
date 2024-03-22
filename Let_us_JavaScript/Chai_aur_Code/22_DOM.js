// console.log(document.getElementById('title'))
// console.log(document.getElementById('title').id)
// console.log(document.getElementById('title').classList)
// console.log(document.getElementById('title').className)
// console.log(document.getElementById('title').getAttribute)
// console.log(document.getElementById('title').setAttribute('class', 'title2'))

const title = document.getElementById('title')
// title.style.backgroundColor = "green" 
// title.style.padding = "15px" 
// title.style.margin = "15px" 
// title.style.borderRadius = "15px" 

// console.log(title.textContent) // hidden text also print
// console.log(title.innerText)
// console.log(title.innerHTML) // with html text value output
// console.log(document.getElementsByClassName('heading'))

const querySelect = document.querySelector('h1')
// console.log(querySelect)

const ulgreen = document.querySelector('ul')
// console.log(ulgreen)
// ulgreen.style.backgroundColor = "green"

const ligreen = document.querySelector('li')
// ligreen.style.padding = "10px"
// ligreen.innerText = "Five" //value change

const templi = document.querySelectorAll('li')
// console.log(templi)
// templi[2].style.color = 'green'
templi.forEach(function (e) {
    // e.style.backgroundColor = 'white'
})

const myH1 = document.querySelectorAll('h1')
// myH1[0].style.color = "red"

const classList = document.getElementsByClassName('class-list')
// console.log(classList)
const ConvertedArrayClassList = Array.from(classList)
// console.log(ConvertedArrayClassList)
ConvertedArrayClassList.forEach(function(e) {
    // e.style.color = 'orange'
})

const liColor = document.querySelectorAll('#licolor')
const ConvertedliColor = Array.from(liColor)
// console.log(ConvertedliColor)
// console.log(liColor) //limited methods
ConvertedliColor.forEach(function(e) {
    e.style.color = 'yellow'
    e.style.backgroundColor = 'orange'
})

const bodyBg = document.querySelectorAll('.class-list')
bodyBg.forEach(function(e) {
    // e.style.color = 'yellow'
    // e.style.backgroundColor = 'green'
    // e.style.padding = '10px'
    // e.innerHTML = "Hitesh" // value manipulate
})
// bodyBg[2].style.color = 'green'


const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[2].innerHTML)
// parent.children[0].style.color = 'orange'
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML)
}

const day = document.querySelector('.day')
// console.log(day)
// console.log(day.parentElement)


const div = document.createElement('div')
// console.log(div)
div.className = "divClass"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "Genrated Title")
div.style.padding = "10px"
div.style.backgroundColor = "yellow"
// div.innerText = "This is a Div Element"
const addText = document.createTextNode("This is Sec Node")
div.appendChild(addText)
document.body.appendChild(div)

const ul = document.createElement('ul')
console.log(ul)
ul.className = 'language'
const li = document.createElement('li')
const addLi = document.createTextNode("JavaScript")
li.appendChild(addLi)
ul.appendChild(li)
document.body.appendChild(ul)

function UnOptimizeLanguage(lanName) {
    const li = document.createElement('li');
    li.innerHTML = `${lanName}`
    document.querySelector('.language').appendChild(li) // This is work only when created element use in html otherwise got error appendChild
    ul.appendChild(li)
    // console.log(li)
}
UnOptimizeLanguage("Python")

function OptimizeLanguage(lanName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lanName))
    ul.appendChild(li)
}
OptimizeLanguage('C Language')

// Edit value
const seclang = document.querySelector('li:nth-child(2)')
// seclang.innerHTML = 'Python replaceWith Mojo'
// console.log(seclang)
const newSecLang = document.createElement('li')
newSecLang.textContent = 'Mojo'
// seclang.replaceWith(newSecLang)

// edit using outerHTML
const firstlang = document.querySelector('li:first-child')
// firstlang.outerHTML = '<li>TypeScript</li>'

// remove
const firstLang = document.querySelector('li:first-child')
firstLang.remove()