document.getElementById("send").addEventListener("click", calcolaPrezzo);
let scontiArray = ["YHDNU32", "JANJC63","PWKCN25", "SJDPO96", "POCIE24"]

let tariffaBackEnd = 20.5;
let tariffaFrontEnd = 15.30;
let analisiProgettuale = 33.6;

function calcolaPrezzo(){
    //prima di tutto prendo tutti i valori che l'utente ha inserito perché mi serviranno per i calcoli
    let ore = document.getElementById("ore").value;
    let corso = document.getElementById("corsi").value;
    let sconto = document.getElementById("codiceSconto").value;
    
    //creo una variabile per il prezzo totale che ha di default valore 0 ma che conterrà tutti i risultati dei miei calcoli
    let prezzoTotale = 0;

    //utilizzo lo switch case ( va bene anche l'if a cascata) per capire quale delle tre opzioni (corsi) ha selezionato l'utente. 
    //Posso impostare già i valori 1,2,3 perché sono già conosciuti.
    switch(corso){
        case "1":
            prezzoTotale = tariffaBackEnd * ore;
            break;
        case "2":
            prezzoTotale = tariffaFrontEnd * ore;
            break;
        case "3":
            prezzoTotale = analisiProgettuale * ore;
            break;
        default:
            break;
    }

    //controllo se l'utente ha inserito almeno un codice di sconto
    //se l'ha inserito allora controllo che il codice di sconto inserito rientri nella lista/array dei codici sconto validi
    //per fare ciò creo un ciclo for che controlla che almeno un elemento dell'array corrisponda al codice di sconto inserito dall'utente
    if(sconto != ""){
        let trovato = false;
        for(i = 0; i< scontiArray.length; i++){
            if(sconto == scontiArray[i]){
                trovato = true;
            }
        }

        //se il codice di sconto è stato trovato allora applico lo sconto con questa formula
        if(trovato){
            prezzoTotale = prezzoTotale - (prezzoTotale * 0.25);
        }
    }

    //infine seleziono la label/etichetta "risultato" e ci inserisco dentro il risultato (prezzototale)
    document.getElementById("risultato").innerHTML = prezzoTotale;
}

