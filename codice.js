// Esempio di riga del tuo CSV già filtrato (la colonna[5] è l'indice 5)
// Nota: JavaScript conta gli indici partendo da 0.
const rigaFiltrata = ["val0", "val1", "val2", "val3", "val4", "val5", "2"];

function apriFoto() {
    // Estrae il valore dalla colonna 6 (il 6° elemento dell'array)
    let Posizione = rigaFiltrata[5]; 
    
    // Seleziona l'elemento immagine
    let img = document.getElementById("mappaImg"); 
    
    // Controlla la condizione ed esegue il cambio immagine
    if (Posizione === "1") {
        img.src = "immagini/AvesaniLina.jpg";
    } else if (Posizione === "2") {
        img.src = "immagini/AvesaniAntonio.jpg"; 
    } else {
        console.log("Valore non riconosciuto");
    }
}