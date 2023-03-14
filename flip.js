// Flip

let card = document.getElementById('card')

let btnRecto = document.getElementById('btn-recto')
let btnVerso = document.getElementById('btn-verso')

btnRecto.addEventListener('click', function() {
    card.style.transform = "rotateY(180deg)"
    // document.getElementById('card').style.transform = "rotateY(180deg)"
})
btnVerso.addEventListener('click', function() {
    card.style.transform = ""
    // document.getElementById('card').style.transform = ""
})

// Mail select et copie on click
let mail = document.getElementById('mail')

mail.addEventListener('click', function(event) {
      let copyText = mail.textContent;
      navigator.clipboard.writeText(copyText);
      alert("Adresse Copiée : " + copyText);   
      console.log(navigator.clipboard.readText()); 
  });
