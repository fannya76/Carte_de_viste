// Flip

let card = document.getElementById('card')

let btnRecto = document.getElementById('btn-recto')
let btnVerso = document.getElementById('btn-verso')

btnRecto.addEventListener('click', function() {
    card.style.transform = "rotateY(180deg)"
})
btnVerso.addEventListener('click', function() {
    card.style.transform = ""
})

// Mail select et copie on click
let mail = document.getElementById('mail')

mail.addEventListener('click', function() {
      let mailText = mail.innerText;
      navigator.clipboard.writeText(mailText);
      alert("Adresse Copiée : " + mailText);   
  });
