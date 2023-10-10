const lamp = document.getElementById('lamp')
const inte = document.getElementById('inte')
const audi = document.getElementById('audi')
audi.volume = 0.5

const luz = document.getElementById('luz')

let stat = false
let falha = false

inte.addEventListener('click', interruptor)

function interruptor() {
    if (stat == false) {

        audi.play()

        lamp.src = 'src/img/lamp-on.png'
        inte.src = 'src/img/int-on.png'

        lamp.style.opacity = '1'
        inte.style.opacity = '1'

        luz.style.background = 'radial-gradient(circle at 50% 25%, yellow, yellow, black, black)'
        luz.style.opacity = '0.3'
        luz.style.backgroundColor = 'none'

        stat = true
        falha = true
    }
    else if (stat == true) {
        luz.style.background = 'black'
        luz.style.opacity = '1'

        lamp.style.opacity = '0.25'
        inte.style.opacity = '0.5'

        audi.play()

        lamp.src = 'src/img/lamp-off.png'
        inte.src = 'src/img/int-off.png'

        luz.style.background = 'black'

        stat = false
        falha = false
    }

}

function piscar() {
    lamp.src = 'src/img/lamp-off.png'
}