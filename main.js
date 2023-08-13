

let bienvenido = document.getElementById('bienvenido')
let  barra = document.getElementById('barra')
let boton = document.getElementById('boton')
//
let check = document.getElementById('check')
let label = document.getElementById('label')

// para modificar cuando ingresas tu nombre en la web
boton.addEventListener('click', function(){
    let nombre = barra.value
    bienvenido.innerHTML = 'Hola '+nombre+ ' 👋🏼'
})

// listaddo

check.addEventListener('click', function(){
    
})

const lista = document.querySelectorAll('.list')

lista.forEach(lista => {
    lista.addEventListener('click', () => {
        lista.classList.toggle('completed')
        const input = lista.querySelector('input')
        input.checked = !input.checked
    })
})
