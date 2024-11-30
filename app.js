if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function ZpetButton(){
    
    document.getElementById("strana1").className = "MENU";
    document.getElementById("strana2").className = "HRA";
}

function getRandomSlovo(slova){
    const num = Math.floor(Math.random() * (slova.length));
    return slova[num];
}

function FunkceHrat(){
    window.location.href = 'https://www.youtube.com/watch?v=TRI--nfcWws&t=133s';
}
let slova = ["AUTO", "POLE", "KOSTEL", "PRAHA", "LOKOMOTIVA", "GARGAMEL", "LUKA", "PRSTEN", "KORUNA", "LES"];
let slovo = getRandomSlovo(slova);
let pocet_pismen = slovo.length;
let spatne = 0;



function TlacA(){
    console.log(slovo);
    Boolean = false;
    //projdeme náhodně vygenerované slovo
    for(let i = 0; i < slovo.length; i++){
        //pokud se v tom slově na nějaké pozici nachází A 
        if (slovo[i] == "A"){
            Boolean = true;
            break;
        }
        else{
            continue;
        } 
    }
    
    const A_pis = document.getElementById('A');
    if (Boolean == true){
        console.log("A tam je");
        A_pis.remove();
    }
    else{
        A_pis.remove();
        console.log("A tam není");
        if (spatne == 5){
            console.log("konec");
        }
        else{
            spatne++;
            console.log(spatne);
        }
        
    }
    
}

function TlacB(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "B"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const B_pis = document.getElementById('B');
    if (Boolean == true){
        console.log("B tam je");
        B_pis.remove();
    }
    else{
        console.log("B tam není");
        B_pis.remove();
        if (spatne == 5){
            console.log("konec");
        }
        else{
            spatne++;
            
            console.log(spatne);
        }
        
    }
}

