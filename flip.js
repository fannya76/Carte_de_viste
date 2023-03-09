// let card = document.getElementById('card')
let btnRecto = document.getElementById('btn-recto')
let btnVerso = document.getElementById('btn-verso')

btnRecto.addEventListener('click', function() {
    document.getElementById('card').style.transform = "rotateY(180deg)"
})
btnVerso.addEventListener('click', function() {
    document.getElementById('card').style.transform = ""
})