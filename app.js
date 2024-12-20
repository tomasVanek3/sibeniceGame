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

function getRandomSlovo(slova){
    const num = Math.floor(Math.random() * (slova.length));
    return slova[num];
}


let slova = ["AUTO", "POLE", "KOSTEL", "PRAHA", "LOKOMOTIVA", "GARGAMEL", "LUKA", "PRSTEN", "KORUNA", "LES"];
let slovo = getRandomSlovo(slova);
let pocet_pismen = slovo.length;
let spatne = 0;
let poleSlov = new Array(pocet_pismen);

window.onload = function(){
    console.log(slovo);
    let k = 0;
    while (pocet_pismen != k){
        const nadpis = document.createElement("h2");
        nadpis.textContent = "_";
        nadpis.id = "pismeno" + k;
        const rodic = document.getElementById("slovo");
        rodic.appendChild(nadpis);
        k++;
    }

};

function spravnaOdpoved(pozice_pismene, pismeno){
    for(let i = 0; i < pocet_pismen; i++){
        if (pozice_pismene == i){
            document.getElementById("pismeno" + pozice_pismene).textContent = pismeno;
            continue;
        }

    } 

}

//vygeneruj elementy

function TlacA(){
    console.log(slovo);
    Boolean = false;
    //projdeme náhodně vygenerované slovo
    for(let i = 0; i < slovo.length; i++){
        //pokud se v tom slově na nějaké pozici nachází A 
        if (slovo[i] == "A"){
            Boolean = true;
            spravnaOdpoved(i, slovo[i]);
            pocet_pismen--;
            continue;
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
        console.log(spatne); 
        spatnaOdpoved(); 
    }
    
}

function TlacB(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "B"){
            Boolean = true;
            pocet_pismen--;
        }
        else{
            continue;
        }
    }

    const B_pis = document.getElementById('B');
    if (Boolean == true){
        console.log("B tam je");
        spravnaOdpoced(pocet_pismen);
        B_pis.remove();
    }
    else{
        console.log("B tam není");
        B_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
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
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
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
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacE(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "E"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const E_pis = document.getElementById('E');
    if (Boolean == true){
        console.log("E tam je");
        E_pis.remove();
    }
    else{
        console.log("E tam není");
        E_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacF(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "F"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const F_pis = document.getElementById('F');
    if (Boolean == true){
        console.log("F tam je");
        F_pis.remove();
    }
    else{
        console.log("F tam není");
        F_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacG(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "G"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const G_pis = document.getElementById('G');
    if (Boolean == true){
        console.log("G tam je");
        G_pis.remove();
    }
    else{
        console.log("G tam není");
        G_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacH(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "H"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const H_pis = document.getElementById('H');
    if (Boolean == true){
        console.log("H tam je");
        H_pis.remove();
    }
    else{
        console.log("H tam není");
        H_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacI(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "I"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const I_pis = document.getElementById('I');
    if (Boolean == true){
        console.log("I tam je");
        I_pis.remove();
    }
    else{
        console.log("I tam není");
        I_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacJ(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "J"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const J_pis = document.getElementById('J');
    if (Boolean == true){
        console.log("J tam je");
        J_pis.remove();
    }
    else{
        console.log("J tam není");
        J_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacK(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "K"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const K_pis = document.getElementById('K');
    if (Boolean == true){
        console.log("K tam je");
        K_pis.remove();
    }
    else{
        console.log("K tam není");
        K_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacL(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "L"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const L_pis = document.getElementById('L');
    if (Boolean == true){
        console.log("L tam je");
        L_pis.remove();
    }
    else{
        console.log("L tam není");
        L_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}
function TlacM(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "M"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const M_pis = document.getElementById('M');
    if (Boolean == true){
        console.log("M tam je");
        M_pis.remove();
    }
    else{
        console.log("M tam není");
        M_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacN(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "N"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const N_pis = document.getElementById('N');
    if (Boolean == true){
        console.log("N tam je");
        N_pis.remove();
    }
    else{
        console.log("N tam není");
        N_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacO(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "O"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const O_pis = document.getElementById('O');
    if (Boolean == true){
        console.log("O tam je");
        O_pis.remove();
    }
    else{
        console.log("O tam není");
        O_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacP(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "P"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const P_pis = document.getElementById('P');
    if (Boolean == true){
        console.log("P tam je");
        P_pis.remove();
    }
    else{
        console.log("P tam není");
        P_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacQ(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "Q"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const Q_pis = document.getElementById('Q');
    if (Boolean == true){
        console.log("Q tam je");
        Q_pis.remove();
    }
    else{
        console.log("Q tam není");
        Q_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacR(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "R"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const R_pis = document.getElementById('R');
    if (Boolean == true){
        console.log("R tam je");
        R_pis.remove();
    }
    else{
        console.log("R tam není");
        R_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacS(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "S"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const S_pis = document.getElementById('S');
    if (Boolean == true){
        console.log("S tam je");
        S_pis.remove();
    }
    else{
        console.log("S tam není");
        S_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacT(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "T"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const T_pis = document.getElementById('T');
    if (Boolean == true){
        console.log("T tam je");
        T_pis.remove();
    }
    else{
        console.log("T tam není");
        T_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacU(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "U"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const U_pis = document.getElementById('U');
    if (Boolean == true){
        console.log("U tam je");
        U_pis.remove();
    }
    else{
        console.log("U tam není");
        U_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacV(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "V"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const V_pis = document.getElementById('V');
    if (Boolean == true){
        console.log("V tam je");
        V_pis.remove();
    }
    else{
        console.log("V tam není");
        V_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacW(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "W"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const W_pis = document.getElementById('W');
    if (Boolean == true){
        console.log("W tam je");
        W_pis.remove();
    }
    else{
        console.log("W tam není");
        W_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacX(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "X"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const X_pis = document.getElementById('X');
    if (Boolean == true){
        console.log("X tam je");
        X_pis.remove();
    }
    else{
        console.log("X tam není");
        X_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacY(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "Y"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const Y_pis = document.getElementById('Y');
    if (Boolean == true){
        console.log("Y tam je");
        Y_pis.remove();
    }
    else{
        console.log("Y tam není");
        Y_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function TlacZ(){
    console.log(slovo);
    Boolean = false;
    for(let i = 0; i < slovo.length; i++){
        if (slovo[i] == "Z"){
            Boolean = true;
            break;
        }
        else{
            continue;
        }
    }

    const Z_pis = document.getElementById('Z');
    if (Boolean == true){
        console.log("Z tam je");
        Z_pis.remove();
    }
    else{
        console.log("Z tam není");
        Z_pis.remove();
        spatne++;
        console.log(spatne);  
        spatnaOdpoved();
    }
}

function spatnaOdpoved(){
    if (spatne == 1){
        document.getElementById("a").textContent = "a";
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
}


