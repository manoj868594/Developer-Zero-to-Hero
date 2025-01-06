const a1 = document.body.firstChild

document.write(a1)
console.log(a1)

document.write(a1.parentNode)
console.log(a1.parentNode)

document.write(a1.parentElement)
console.log(a1.parentElement)

const ul = document.getElementById('ul');

const changeBgColor = document.body;
changeBgColor.addEventListener('click',function(){
    document.body.firstElementChild.style.background = "red"
    document.body.style.margin = '0 20%'
    ul.style.display = "flex"
    ul.style.listStyle = "none"
    ul.style.padding = "10px 15px"
    ul.style.background = "grey"
    ul.style.gap = '20px'
})