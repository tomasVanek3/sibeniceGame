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
    window.location.href = 'https://sibenicemenu.netlify.app/';
}

function getRandomSlovo(slova){
    const num = Math.floor(Math.random() * (slova.length));
    return slova[num];
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
            spatne++;
            if (spatne == 1){
                document.getElementById("a").innerText = "a";
            }
            else{
                if (spatne == 2){
                    document.getElementById("b").innerText = "b";
                }
                else{
                    if (spatne == 3){
                        document.getElementById("c").innerText = "c";
                    }
                    else{
                        if (spatne == 4){
                            document.getElementById("d").innerText = "d";
                        }
                        else{
                            if (spatne == 5){
                                document.getElementById("d").innerText = "d";
                                console.log("konec");
                            }
                        }
                    }
                }
            }
        console.log(spatne);  
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
        spatne++;
        if (spatne == 1){
            document.getElementById("a").innerText = "a";
        }
        else{
            if (spatne == 2){
                document.getElementById("b").innerText = "b";
            }
            else{
                if (spatne == 3){
                    document.getElementById("c").innerText = "c";
                }
                else{
                    if (spatne == 4){
                        document.getElementById("d").innerText = "d";
                    }
                    else{
                        if (spatne == 5){
                            document.getElementById("d").innerText = "d";
                            console.log("konec");
                        }
                    }
                }
            }
        }
    console.log(spatne);  
        
    }
}

function TlacC(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "C"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const C_pis = document.getElementById('C');
    if (Boolean == true){
        console.log("C tam je");
        C_pis.remove();
    }
    else{
        console.log("C tam není");
        C_pis.remove();
        if (spatne == 5){
            console.log("konec");
        }
        else{
            spatne++;
            console.log(spatne);
        }
        
    }
}

function TlacD(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "D"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const D_pis = document.getElementById('D');
    if (Boolean == true){
        console.log("D tam je");
        D_pis.remove();
    }
    else{
        console.log("D tam není");
        D_pis.remove();
        if (spatne == 5){
            console.log("konec");
        }
        else{
            spatne++;
            if (spatne == 1){
                
            }
            console.log(spatne);
        }
        
    }
}