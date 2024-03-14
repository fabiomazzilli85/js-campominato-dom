document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); 
    const showButton = document.getElementById('showButton');
    


    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div');
        div.classList.add('box', 'hidden');
        div.textContent = i; 
        div.addEventListener('click', function() {
            
            document.querySelectorAll('.box').forEach(box => {
                box.classList.remove('clicked'); 
            });
            
            this.classList.add('clicked'); 
            const clickedNumber = parseInt(this.textContent);
            console.log("Hai cliccato sul div numero:", clickedNumber);
        });
        container.appendChild(div);
    }
    
    showButton.addEventListener('click', function() {
        
        
        const boxes = document.querySelectorAll('.box');
        
    
        boxes.forEach(box => {
            box.classList.remove('hidden');
        });
        
            showButton.style.display = 'none';
    });
});


// Ho creato una costante e ho inserito manualmente 16 numeri e ho fatto un console.log.. Ora farò in modo che in numeri siano generati casualmente e commenterò il mio Array. 
const bombNumber = []

for (let i = 1; i <= 16; i++) {
    bombNumber.push(Math.floor(Math.random() * 100) + 1);
 }

 console.log(bombNumber.length);

 // Utilizzando il ciclo Fior ho appena generato un numero compreso tra 1 e 16 e ho eseguito il ''push'' in ''bombNumber', dichiarato precedentemente. '