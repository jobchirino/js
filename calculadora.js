let campoOperaciones = document.getElementById('campo')
let numeros = document.getElementById('botones')


let botonesFuncionando = (num) => {
    numeros.children[num].addEventListener('click', () => {
        let textNum = numeros.children[num].textContent
        campoOperaciones.value += textNum
    })
}

botonesFuncionando(1)
botonesFuncionando(3)
botonesFuncionando(4)
botonesFuncionando(5)
botonesFuncionando(6)
botonesFuncionando(7)
botonesFuncionando(8)
botonesFuncionando(9)
botonesFuncionando(10)
botonesFuncionando(11)
botonesFuncionando(12)
botonesFuncionando(13)
botonesFuncionando(14)
botonesFuncionando(15)
botonesFuncionando(17)
botonesFuncionando(18)

let igual = document.getElementById('igualdad')
let borrarTodo = document.getElementById('borrar')


borrarTodo.addEventListener('click', () => {
    campoOperaciones.value = "" 
})

let identificarEjecutar = () => {
    igual.addEventListener('click', () => {
        let cant = campoOperaciones.value 
        let arreglo = cant.split('')
        let busqueda = arreglo.filter((op) => {
            if(op === '+'){
                let preresultado = arreglo.join('')
                let resultado = preresultado.split('+')
                campoOperaciones.value = parseFloat(resultado[0]) + parseFloat(resultado[1])
            }else if(op === '-'){
                let preresultado = arreglo.join('')
                let resultado = preresultado.split('-')
                campoOperaciones.value = parseFloat(resultado[0]) - parseFloat(resultado[1])
            }else if(op === 'x'){
                let preresultado = arreglo.join('')
                let resultado = preresultado.split('x')
                campoOperaciones.value = parseFloat(resultado[0]) * parseFloat(resultado[1])
            }else if(op === '÷'){
                let preresultado = arreglo.join('')
                let resultado = preresultado.split('÷')
                campoOperaciones.value = parseFloat(resultado[0]) / parseFloat(resultado[1])
            }else if(op === '^'){
                let preresultado = arreglo.join('')
                let resultado = preresultado.split('^')
                campoOperaciones.value = parseFloat(resultado[0]) ** parseFloat(resultado[1])
            }
        })
    })
}

identificarEjecutar()
