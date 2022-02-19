let input = document.getElementById('inp1')
let par = document.getElementById('nick')
input.addEventListener('keyup', nickname)
function nickname() {
    par.innerHTML = input.value
}

let start0 = document.getElementById('b_start')
let gen = document.getElementById('gen')
start0.addEventListener('click', start)
function start() {
    gen.style.opacity='1'
}

let b_left = document.getElementById('b_left')
let step1 = document.getElementById('img20')
let step2 = document.getElementById('img21')
let step3 = document.getElementById('img22')
let step4 = document.getElementById('img23')
let pos_h = 770
let dop = 10
b_left.addEventListener('click', left)
function left() {
    if (pos_h < 40){
        alert('Куда пошёл, давай разворачивайся!!!')
    } else {
        pos_h-=dop
        gen.style.left = pos_h + 'px'
        step1.style.opacity = '1'
        step2.style.opacity='0'
        step3.style.opacity='0'
        step4.style.opacity='0'
    }
}

let b_right = document.getElementById('b_right')
b_right.addEventListener('click', right)
function right(){
    if (pos_h >= 730){
        alert('Куда пошёл, давай разворачивайся!!!')
    } else {
        pos_h+=dop
        gen.style.left = pos_h + 'px'
        step2.style.opacity = '1'
        step1.style.opacity='0'
        step3.style.opacity='0'
        step4.style.opacity='0'
    }
}

let b_up = document.getElementById('b_up')
let pos_v = 22
b_up.addEventListener('click', up)
function up() {
    if (pos_v < 32){
        alert('Куда пошёл, давай разворачивайся!!!')
    } else {
        pos_v-=dop
        gen.style.top = pos_v + 'px'
        step4.style.opacity = '1'
        step2.style.opacity='0'
        step3.style.opacity='0'
        step1.style.opacity='0'
    }
}

let b_down = document.getElementById('b_down')
b_down.addEventListener('click', down)
function down () {
    if (pos_v >= 680){
        alert('Куда пошёл, давай разворачивайся!!!')
    } else {
        pos_v+=dop
        gen.style.top = pos_v + 'px'
        step3.style.opacity = '1'
        step2.style.opacity='0'
        step1.style.opacity='0'
        step4.style.opacity='0'
    }
}
if (pos_v > 670 && pos_h > 15) {
    alert("Поздравляю")
}



