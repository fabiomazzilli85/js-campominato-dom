document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); 
    const showButton = document.getElementById('showButton');
    let clickCount = 0; // Questo contatore è inizializzato. Sarà utile per sommare e mostrare in console il numero di click fortunati dell'utente.

    
    // Array dei numeri bomba.
    // 1. Creo una costante e le do il nome di bombNumber.
    // 2. Con il ciclo For incremento di uno la variabile ''j'' fino a che è vera la condizione che ''j'' <= di 16.
    // 3. Con includes mi accerto che un numero non si ripeta.
    const bombNumbers = [];
    for (let j = 1;  j <= 16; j++) {
        let bombNumber;
        do {
            bombNumber = Math.floor(Math.random() * 100) + 1;
        } while (bombNumbers.includes(bombNumber)); 
        bombNumbers.push(bombNumber);
    }
    

    // Creo una funzione. Le do nome ''restartGame' e istruzioni ''reload'.
    function restartGame() {
        location.reload(); 
    }
    

    // Creo un ciclo For.
    // 1. Creo una variabile che, partendo da 1, si incrementa di 1 fino a che è vera la condizione che la variabile è  <=100.
    // 2. Aggiungo due classi: box e hidden.
    // 3. Creo il contenuto = i.
    // 4. Al listener '''gioco'' con la rimozione e l'aggiunta delle classi.  
    for (let i = 1; i <= 100; i++) {
        const div = document.createElement('div'); 
        div.classList.add('box', 'hidden'); 
        div.textContent = i;  
        div.addEventListener('click', function() {
            document.querySelectorAll('.box').forEach(box => {
                box.classList.remove('clicked'); 
            });
            
            
    // Questa è la parte più importante del progetto. Se il bombNumber è incluso (tramite il metodo includes) nei clickedNumber mando a schermo il messaggio in console.log con la logica dell'if ed else.
    // A if si aggiunge una classe (bg-red) ad esle se ne aggiunge un'altra (bg-green).           
    this.classList.add('clicked'); 
    const clickedNumber = parseInt(this.textContent);
        if (bombNumbers.includes(clickedNumber)) { 
            this.classList.add('bg-red');
            console.log("Hai cliccato su una bomba. La fortuna è cieca, ma la tua sfiga ci vede benissimo.");
            alert ("Hai cliccato su una bomba. La fortuna è cieca, ma la tua sfiga ci vede benissimo.")
            alert('I numeri che avresti dovuto evitare sono: ' + bombNumbers.join(', ')); //bombNumers ovviamente non è una stringa ma un numero; con .join converto il numero in stringa.

             restartGame(); // Invoco la funzione dichiarata precedentemente. La invoco solo dopo aver visualizzato il messaggio in Alert e in console.log
            } 
        else {
            this.classList.add('bg-green');
            console.log("Ti è andata bene...");
            alert ("Ti è andata bene...")
            clickCount++; // Incrementa il contatore di clic
            console.log("Numero di clic:", clickCount);
                
            
        if(clickCount === 5){
            alert ('La fortuna non dura tutta la vita, a meno che tu non muoia giovane :-)')
                }    
            }
     
        });
        container.appendChild(div);
    }
    
    
    // Qui lavoro sul bottone.
    // 1. Quando clicco sul bottone, esso rimuove la classe hidden dal mio box che, di conseguenza, risulta visualizzabile (la classe hidden, nel file CSS, ha proprietà Display None). 
    // 2. Riga 82: dopo aver cliccato sul bottone, lavoro con lo style e lo mando in display none. 
    showButton.addEventListener('click', function() {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('hidden');
        });
        
        showButton.style.display = 'none'; 
    });
});
