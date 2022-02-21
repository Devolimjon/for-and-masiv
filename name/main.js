let names = ['Harry', 'Ross', 'Bruce', 'Cook', 'Carolyn', 'Morgan', 'Albert', 'Walker', 'Randy', 'Reed'];
let add = ['Frontend Developer', 'React Developer',
    'Javascript Backend Developer', 'Java Developer', 'DevOps', 'Go Developer', 'Android Developer', 'Flutter Developer',
    'Graphic Designer', 'Team Lead'];
let btn = document.querySelector('#find')
let input = document.querySelector('#id')
let text = document.querySelector('#text')
btn.onclick = function () {
    if (input.value === '1') {
        text.innerHTML = `${names[0]} is a ${add[0]}`
    }
    else if (input.value === '2') {
        text.innerHTML = `${names[1]} is a ${add[1]}`
    }
    else if (input.value === '3') {
        text.innerHTML = `${names[2]} is a ${add[2]}`
    }
    else if (input.value === '4') {
        text.innerHTML = `${names[3]} is a ${add[3]}`
    }
    else if (input.value === '5') {
        text.innerHTML = `${names[4]} is a ${add[4]}`
    }
    else if (input.value === '6') {
        text.innerHTML = `${names[5]} is a ${add[5]}`
    }
    else if (input.value === '7') {
        text.innerHTML = `${names[6]} is a ${add[6]}`    }
    else if (input.value === '8') {
        text.innerHTML = `${names[7]} is a ${add[7]}`
    }
    else if (input.value === '9') {
        text.innerHTML = `${names[8]} is a ${add[8]}`
    }
    else if (input.value === '10') {
        text.innerHTML = `${names[9]} is a ${add[9]}`
    }
    else {
        text.innerHTML = `Undefined value`
    }
}