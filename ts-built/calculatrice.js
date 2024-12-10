var tex = document.getElementById('result');

function check(value) {
    var tex = document.getElementById('result');
    if (tex.innerHTML === "Comment peut-on vous aider ?") {
        //tex.value = '';
    }
    tex.value += value;
}
function Ac() {
    var tex = document.getElementById('result');
    tex.value = '';
}
function DEL() {
    var tex = document.getElementById('result');
    tex.value = tex.value.slice(0, -1);
}
function egale() {
    var tex = document.getElementById('result');
    try {
        tex.value = eval(tex.value);
    }
    catch (e) {
        tex.value = 'Erreur de saisie';
    }
}
function racine(){ var numero=Math.sqrt(tex.value)
tex.value=numero}

function decimal(){
    po=tex.value
    const base10 = parseInt(po, 10);
    tex.value=base10
}
function hexa() {
    try{
        const po1 = tex.value; 
        const decimal = parseInt(po1, 16);
        tex.value = decimal;
    }catch{
        tex.value='Syntaxe Error'
    }
}
function binaire() {
    try{
        const po = parseInt(tex.value, 10); 
        const hexadecimale = po.toString(2); 
        tex.value = hexadecimale.toUpperCase(); 
    }catch{
        tex.value='Syntaxe Error'
    }
}
function factoriell(moy) {
    if (moy === 0) {
        return 1;
    } else {
        return moy * factoriell(moy - 1);
    }
}

function factoriel() {
    const moy = parseInt(tex.value, 10); 
    if (isNaN(moy) || moy < 0) {
        tex.value = "Erreur";
    } else {
        tex.value = factoriell(moy);
    }
}

function logarithme(){
    const logNatural = Math.log(tex.value);
    tex.value=logNatural
}

function  cosinus() {
    const angleInRadians = tex.value
    tex.value=Math.cos(angleInRadians*Math.PI/180);
}

function sinus() {
    const angleInRadians = tex.value
    tex.value=Math.sin(angleInRadians*Math.PI/180);
}

function  tang() {
    const angleInRadians = tex.value
    tex.value=Math.tan(angleInRadians*Math.PI/180);
}

function  expo() {
    const angleInRadians = tex.value
    tex.value=Math.exp(angleInRadians);
}

function carrer(){
    const net = tex.value
    const puissance = Math.pow(net, 2);
    tex.value=puissance
}

function carrere(){
    const net = tex.value
    const puissance = Math.pow(net, 3);
    tex.value=puissance
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();


document.addEventListener('DOMContentLoaded', function() {
    const scientificButtons = document.querySelectorAll('.scienti');
    const normalButton = document.getElementById('normalButton');
    const scientificButton = document.getElementById('scientificButton');

    // Masquer les boutons scientifiques par défaut
    //scientificButtons.forEach(button => {
      //  button.style.display = 'block';
    //});

    // Afficher les boutons scientifiques
    scientificButton.addEventListener('click', function() {
        scientificButtons.forEach(button => {
            button.style.display='block' // Afficher les boutons scientifiques
        });
    });

    // Masquer les boutons scientifiques
    normalButton.addEventListener('click', function() {
        scientificButtons.forEach(button => {
            button.style.display = 'none'; // Masquer les boutons scientifiques
        });
    });
});

