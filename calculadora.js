let campoOperaciones = document.getElementById('campo')
let numeros = document.querySelectorAll('.numeros')
let signos = document.querySelectorAll('.signo')
let borrarUno = document.getElementById('delete')
let historial = document.getElementById('historial')
let valor = campoOperaciones.value.slice(-1)

numeros.forEach((elemento) =>{
    elemento.addEventListener('click', () => {
        let textNum = elemento.textContent
        campoOperaciones.value += textNum
        if(campoOperaciones.value.length > 16){
            campoOperaciones.style.fontSize = '20px'
        }
    })
})

signos.forEach((elemento) =>{
    elemento.addEventListener('click', () => {
        if(campoOperaciones.value.length > 0 &&
            campoOperaciones.value.slice(-1) != '+' &&
            campoOperaciones.value.slice(-1) != '-' &&
            campoOperaciones.value.slice(-1) != 'x' &&
            campoOperaciones.value.slice(-1) != '÷' &&
            campoOperaciones.value.slice(-1) != '^' 
        ){
            let textNum = elemento.textContent
        campoOperaciones.value += textNum
        }
    })
})



let light = document.getElementById('light')
let dark = document.getElementById('dark')
let con = document.getElementById('contenedor-principal')
let conForm = document.getElementById('formulario')
let conBotones = document.getElementById('botones')
let botones = document.querySelectorAll('#botones button')
let borradores = document.querySelectorAll('.yellow')
let transitions = document.getElementById('boton-transition')
let ldTransition = document.querySelectorAll('.ld')
let classInactiva = document.querySelectorAll('.inactiva')

light.addEventListener('click', () => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    conForm.classList.remove('inactiva')
    conForm.classList.add('activa')

    con.classList.remove('inactiva')
    con.classList.add('activa')

    campoOperaciones.classList.remove('inactiva')
    campoOperaciones.classList.add('activa')
    campoOperaciones.style.color = '#000000'

    conBotones.classList.remove('inactiva')
    conBotones.classList.add('activa')

    transitions.classList.remove('inactiva')
    transitions.classList.add('activa')

    ldTransition.forEach((elemento) => {
        elemento.classList.remove('inactiva')
        elemento.classList.add('activa')
        elemento.style.color = '#000000'
    })

    botones.forEach((elemento) => {
        elemento.classList.remove('inactiva')
        elemento.classList.add('activa')
    })

    numeros.forEach((elemento)=>{
        elemento.style.color = '#000000'
    })
    
    borradores.forEach((elemento)=>{
        elemento.style.color = '#000000'
    })

    if(document.body.classList.contains('light')){
        localStorage.setItem('dark-mode', 'false')
    }
})

dark.addEventListener('click', () => {
    document.body.classList.remove('light')
    document.body.classList.add('dark')

    conForm.classList.remove('activa')
    conForm.classList.add('inactiva')

    con.classList.remove('activa')
    con.classList.add('inactiva')
    
    campoOperaciones.classList.remove('activa')
    campoOperaciones.classList.add('inactiva')
    campoOperaciones.style.color = '#ffffff'

    conBotones.classList.remove('activa')
    conBotones.classList.add('inactiva')

    transitions.classList.remove('activa')
    transitions.classList.add('inactiva')

    ldTransition.forEach((elemento) => {
        elemento.classList.remove('activa')
        elemento.classList.add('inactiva')
        elemento.style.color = '#ffffff'
    })

    botones.forEach((elemento) => {
        elemento.classList.remove('activa')
        elemento.classList.add('inactiva')
    })

    numeros.forEach((elemento)=>{
        elemento.style.color = '#ffffff'
    })

    borradores.forEach((elemento)=>{
        elemento.style.color = '#ffffff'
    })

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
    }
})

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.remove('light')
    document.body.classList.add('dark')

    conForm.classList.remove('activa')
    conForm.classList.add('inactiva')

    con.classList.remove('activa')
    con.classList.add('inactiva')
    
    campoOperaciones.classList.remove('activa')
    campoOperaciones.classList.add('inactiva')
    campoOperaciones.style.color = '#ffffff'

    conBotones.classList.remove('activa')
    conBotones.classList.add('inactiva')

    transitions.classList.remove('activa')
    transitions.classList.add('inactiva')

    ldTransition.forEach((elemento) => {
        elemento.classList.remove('activa')
        elemento.classList.add('inactiva')
        elemento.style.color = '#ffffff'
    })

    botones.forEach((elemento) => {
        elemento.classList.remove('activa')
        elemento.classList.add('inactiva')
    })

    numeros.forEach((elemento)=>{
        elemento.style.color = '#ffffff'
    })

    borradores.forEach((elemento)=>{
        elemento.style.color = '#ffffff'
    })
}else{
    document.body.classList.remove('dark')
    document.body.classList.add('light')

    conForm.classList.remove('inactiva')
    conForm.classList.add('activa')

    con.classList.remove('inactiva')
    con.classList.add('activa')

    campoOperaciones.classList.remove('inactiva')
    campoOperaciones.classList.add('activa')
    campoOperaciones.style.color = '#000000'

    conBotones.classList.remove('inactiva')
    conBotones.classList.add('activa')

    transitions.classList.remove('inactiva')
    transitions.classList.add('activa')

    ldTransition.forEach((elemento) => {
        elemento.classList.remove('inactiva')
        elemento.classList.add('activa')
        elemento.style.color = '#000000'
    })

    botones.forEach((elemento) => {
        elemento.classList.remove('inactiva')
        elemento.classList.add('activa')
    })

    numeros.forEach((elemento)=>{
        elemento.style.color = '#000000'
    })
    
    borradores.forEach((elemento)=>{
        elemento.style.color = '#000000'
    })
}

let igual = document.getElementById('igualdad')
let borrarTodo = document.getElementById('borrar')


borrarTodo.addEventListener('click', () => {
    historial.innerHTML = ""
    campoOperaciones.value = "" 
    campoOperaciones.style.fontSize = '30px'
})

let identificarEjecutar = () => {
    igual.addEventListener('click', () => {
        historial.innerHTML = `<p>${campoOperaciones.value}</p>`

        let cant = campoOperaciones.value 
        let arreglo = cant.split('')
        arreglo.filter((op) => {
            switch(op) {
                case '+':
                    preresultado = arreglo.join('')
                    resultado = preresultado.split('+')
                    campoOperaciones.value = parseFloat(resultado[0]) + parseFloat(resultado[1])
                    break
                case '-':
                    preresultado = arreglo.join('')
                    resultado = preresultado.split('-')
                    campoOperaciones.value = parseFloat(resultado[0]) - parseFloat(resultado[1])
                    break

                case 'x':
                    preresultado = arreglo.join('')
                    resultado = preresultado.split('x')
                    campoOperaciones.value = parseFloat(resultado[0]) * parseFloat(resultado[1])
                    break
                case '÷':
                    preresultado = arreglo.join('')
                    resultado = preresultado.split('÷')
                    campoOperaciones.value = parseFloat(resultado[0]) / parseFloat(resultado[1])
                    break
                case '^':
                    preresultado = arreglo.join('')
                    resultado = preresultado.split('^')
                    campoOperaciones.value = parseFloat(resultado[0]) ** parseFloat(resultado[1])
                    break
            }
            // if(op === '+'){
            //     let preresultado = arreglo.join('')
            //     let resultado = preresultado.split('+')
            //     campoOperaciones.value = parseFloat(resultado[0]) + parseFloat(resultado[1])
            // }else if(op === '-'){
            //     let preresultado = arreglo.join('')
            //     let resultado = preresultado.split('-')
            //     campoOperaciones.value = parseFloat(resultado[0]) - parseFloat(resultado[1])
            // }else if(op === 'x'){
            //     let preresultado = arreglo.join('')
            //     let resultado = preresultado.split('x')
            //     campoOperaciones.value = parseFloat(resultado[0]) * parseFloat(resultado[1])
            // }else if(op === '÷'){
            //     let preresultado = arreglo.join('')
            //     let resultado = preresultado.split('÷')
            //     campoOperaciones.value = parseFloat(resultado[0]) / parseFloat(resultado[1])
            // }else if(op === '^'){
            //     let preresultado = arreglo.join('')
            //     let resultado = preresultado.split('^')
            //     campoOperaciones.value = parseFloat(resultado[0]) ** parseFloat(resultado[1])
            // }
            
        })
        let valor = campoOperaciones.value
        if(valor.length > 16){
            campoOperaciones.style.fontSize = '20px'
        }
    })
}

identificarEjecutar()

borrarUno.addEventListener('click', () =>{
    let cantidad = campoOperaciones.value

    if(cantidad.length > 0){
        let nuevoValor = campoOperaciones.value.slice(0, -1)
        campoOperaciones.value = nuevoValor
    }
})