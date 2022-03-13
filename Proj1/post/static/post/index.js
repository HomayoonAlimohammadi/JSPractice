let counter = 1;
let quantity = 20;

function add_post(content) {
    const body = document.querySelector('body')
    const div = document.createElement('div')
    div.className = 'post'
    div.innerHTML = content + '<button class="hide">Hide</button>'
    body.append(div)
}

function load() {
    const start = counter;
    const end = start + quantity - 1;
    counter = end + 1 

    fetch(`load?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(data => {
        // console.log('data: ',data['posts'])
        data['posts'].forEach(add_post);
    })
}

function hide_post(event) {
    console.log('19')
    console.log(event.target)
}

document.addEventListener('DOMContentLoaded', () => {
    load();
})

document.addEventListener('click', event => {
    const target = event.target;
    if (target.className === 'hide') {
        console.log(target.parentElement);
        target.parentElement.style.animationPlayState = 'running'
        target.parentElement.addEventListener('animationend', () => {
            target.parentElement.remove();
        })
    }
})

window.onscroll = () => {
if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    } 
}

