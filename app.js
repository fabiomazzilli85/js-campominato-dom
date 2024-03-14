document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); 
    const showButton = document.getElementById('showButton');
    
    // Creo 100 div che vanno a sostituire il markup HTML.
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div');
        div.classList.add('box', 'hidden'); // Aggiungo, oltre alla classe `box`, che ha le sue proprietà CSS, la classe 'hidden' per nascondere i div (utile successiivamente).
        div.textContent = i; 
        div.addEventListener('click', function() { // Qui ho fatto molto copia e incolla ma  la lettura del codice mi pare abbastanza chiara.
            
            document.querySelectorAll('.box').forEach(box => {
                box.classList.remove('clicked'); // Qui rimuovo la classe `clicked` a tutti i box.
            });
            
            this.classList.add('clicked'); // Qui, invece, aggiungo la classe agli elementi su cui clicco. ''This'' lo abbiamo visto oggi con Gianliuca.
            const clickedNumber = parseInt(this.textContent);
            console.log("Hai cliccato sul div numero:", clickedNumber); // Qui mando in console la frase `Hai cliccaro sul duv numero` e il `clickedNumber`.
        });
        container.appendChild(div);
    }
    
    // Aggiungo un listener al bottone.
    showButton.addEventListener('click', function() {
        
        
        const boxes = document.querySelectorAll('.box');
        
        // Rimuovo la classe 'hidden' per mostrare i div.
        boxes.forEach(box => {
            box.classList.remove('hidden');
        });
        
        // Nascondo il bottone dopo averci  cliccato.
        showButton.style.display = 'none';
    });
});