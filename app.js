document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container'); 
    const showButton = document.getElementById('showButton');
    
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
            

    // // Questa è la parte più importante fino a questo momento. Se il bombNumber è incluso (tramite il metodo includes) nei clickedNumber mando a schermo il messaggio in console.log con la logica dell'if ed else
            this.classList.add('clicked'); 
            const clickedNumber = parseInt(this.textContent);
            if (bombNumbers.includes(clickedNumber)) { 
                console.log("Hai cliccato su una bomba. Mi dispiace");
                alert ("Hai cliccato su una bomba. Mi dispiace")
            } else {
                console.log("Ti è andata bene...");
                alert ("Ti è andata bene...")
            }
        });
        container.appendChild(div);
    }
    

    // Qui lavoro sul bottone.
    // 1. Quando clicco sul bottone, esso rimuove la classe hidden dal mio box che, di conseguenza, risulta visualizzabile (la classe hidden, nel file CSS, ha proprietà Display None). 
    // 2. Riga 55: dopo aver cliccato sul bottone, lavoro con lo style e lo mando in display none. 
    showButton.addEventListener('click', function() {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.classList.remove('hidden');
        });
        
        showButton.style.display = 'none'; 
    });
});
