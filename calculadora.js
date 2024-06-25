let campoOperaciones = document.getElementById('campo')
let numeros = document.querySelectorAll('.numeros')
let signos = document.querySelectorAll('.signo')
let borrarUno = document.getElementById('delete')
let historial = document.getElementById('historial')
let punto = document.querySelector('.punto')
let arrSigno = ['+', '-', 'x', '÷', '^', '.']

numeros.forEach((elemento) =>{
    elemento.addEventListener('click', () => {
        let textNum = elemento.textContent
        campoOperaciones.value += textNum
        if(campoOperaciones.value.length > 16){
            campoOperaciones.style.fontSize = '20px'
        }
    })
})

let expresionRegular = /\.?/
punto.addEventListener('click', () => {
    if(!arrSigno.includes(campoOperaciones.value.slice(-1)) && campoOperaciones.value.length > 0){
        if(expresionRegular.test(campoOperaciones.value)){
            let textNum = punto.textContent
            campoOperaciones.value += textNum              
         }
    }
})

signos.forEach((elemento) =>{
    elemento.addEventListener('click', () => {
        if(campoOperaciones.value.length > 0 &&
            !arrSigno.includes(campoOperaciones.value.slice(-1))
        ){
            let textNum = elemento.textContent
            campoOperaciones.value += textNum
        }
    })
})

borrarUno.addEventListener('click', () =>{
    if(campoOperaciones.value.length > 0){
        let nuevoValor = campoOperaciones.value.slice(0, -1)
        campoOperaciones.value = nuevoValor
    }
})

let btnTransition = document.getElementById('switch')
btnTransition.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnTransition.classList.toggle('active')

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
    }else{
        localStorage.setItem('dark-mode', 'false')
    }
})

if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark')
    btnTransition.classList.add('active')
}else{
    document.body.classList.remove('dark')
    btnTransition.classList.remove('active')
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
        if(!arrSigno.includes(campoOperaciones.value.slice(-1))){
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
        })
        if(campoOperaciones.value.length > 16){
            campoOperaciones.style.fontSize = '20px'
        }
        }
        
    })
}
identificarEjecutar()