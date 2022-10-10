'use strict';
const dado = document.querySelector('.dice')
const actual1 = document.querySelector('#current--0')
const actual2 = document.querySelector('#current--1')
const puntaje1 = document.querySelector('#score--0')
const puntaje2 = document.querySelector('#score--1')
const newBoton = document.querySelector('.btn--new')
const rollBoton = document.querySelector('.btn--roll')
const holdBoton = document.querySelector('.btn--hold')
const player = document.querySelectorAll('.player')

const actualArray = document.querySelectorAll('.current-score')
const puntajeArray = document.querySelectorAll('.score')

puntajeArray.forEach(p=>p.textContent =0)

dado.classList.add("hidden")
let jugadorActual = 0
let dadoActual = 0
let totalGlobal = 0
const puntajeTotal = [0,0]

let game = true
const obsrver = () =>{

    puntajeTotal.forEach((pun,i)=>{
        if(pun >= 100){
            game = false
            alert(`Felicidades al Player ${i+1} `)
        }
    })
    
}
holdBoton.addEventListener('click',()=>{
    obsrver()
    if(game) {
    player.forEach((play,i)=>{
       if(play.classList.contains("player--active"))  {
            const current = play.childNodes[3]
            const actual = play.childNodes[5].childNodes[3]
            puntajeTotal[i] += totalGlobal
            obsrver()
            current.textContent = puntajeTotal[i]
            totalGlobal = 0
            actual.textContent = totalGlobal
            play.classList.remove("player--active")

        }else{
            play.classList.add("player--active")
        }
        
    })

}else{
    alert(`presione New game`)
}

})


rollBoton.addEventListener('click',()=>{
    obsrver()
    if(game){
    dado.classList.remove("hidden")
    dadoActual = numeroRamdon()
    dado.src = `dice-${dadoActual}.png`
    if(dadoActual===1){
        player.forEach((play,i)=>{   
            const current = play.childNodes[3]
            const actual = play.childNodes[5].childNodes[3]
            if(play.classList.contains("player--active"))  {
                totalGlobal = 0
                actual.textContent = totalGlobal
                play.classList.remove("player--active")

            }else{
                play.classList.add("player--active")
            }
           totalGlobal = 0
           actual.textContent = totalGlobal
            
            
        })
    }else{

       player.forEach((play,i)=>{
        const current = play.childNodes[3]
        const actual = play.childNodes[5].childNodes[3]
        if(play.classList.contains("player--active")){
            totalGlobal += dadoActual
            actual.textContent = totalGlobal

        }

       })
    }


}else{
    alert('Presione New game')
}

})

newBoton.addEventListener('click',()=>{
    player.forEach((play,i)=>{
        const current = play.childNodes[3]
        const actual = play.childNodes[5].childNodes[3]

        current.textContent = 0
        actual.textContent = 0
        game = true
        dado.classList.add("hidden")
        puntajeTotal[i] = 0





       })
})





const numeroRamdon = () => Math.floor(Math.random()*6)+1;

const num = numeroRamdon()

