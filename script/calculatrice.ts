const tex = document.getElementById('result') as HTMLInputElement;

function check(value: string): void {
    if (tex.value === "Comment peut-on vous aider ?") {
        tex.value = ''; // Décommenter si nécessaire
    }
    tex.value += value;
}

function Ac(): void {
    tex.value = '';
}

function DEL(): void {
    tex.value = tex.value.slice(0, -1);
}

function egale(): void {
    try {
        // Utiliser une fonction de parsing sécurisée pour éviter les erreurs d'évaluation
        tex.value = eval(tex.value).toString();
    } catch (e) {
        tex.value = 'Erreur de saisie';
    }
}

function racine(): void {
    const numero = Math.sqrt(parseFloat(tex.value));
    tex.value = numero.toString();
}

function decimal(): void {
    const po = tex.value;
    const base10 = parseInt(po, 10);
    tex.value = isNaN(base10) ? 'Erreur' : base10.toString();
}

function hexa(): void {
    try {
        const po1 = tex.value; 
        const decimal = parseInt(po1, 16);
        tex.value = isNaN(decimal) ? 'Erreur' : decimal.toString();
    } catch {
        tex.value = 'Syntaxe Error';
    }
}

function binaire(): void {
    try {
        const po = parseInt(tex.value, 10); 
        if (isNaN(po)) throw new Error();
        const hexadecimale = po.toString(2); 
        tex.value = hexadecimale.toUpperCase(); 
    } catch {
        tex.value = 'Syntaxe Error';
    }
}

function factoriell(moy: number): number {
    return (moy === 0) ? 1 : moy * factoriell(moy - 1);
}

function factoriel(): void {
    const moy = parseInt(tex.value, 10); 
    if (isNaN(moy) || moy < 0) {
        tex.value = "Erreur";
    } else {
        tex.value = factoriell(moy).toString();
    }
}

function logarithme(): void {
    const logNatural = Math.log(parseFloat(tex.value));
    tex.value = isNaN(logNatural) ? 'Erreur' : logNatural.toString();
}

function cosinus(): void {
    const angleInRadians = parseFloat(tex.value);
    tex.value = Math.cos(angleInRadians * Math.PI / 180).toString();
}

function sinus(): void {
    const angleInRadians = parseFloat(tex.value);
    tex.value = Math.sin(angleInRadians * Math.PI / 180).toString();
}

function tang(): void {
    const angleInRadians = parseFloat(tex.value);
    tex.value = Math.tan(angleInRadians * Math.PI / 180).toString();
}

function expo(): void {
    const angleInRadians = parseFloat(tex.value);
    tex.value = Math.exp(angleInRadians).toString();
}

function carre(): void {
    const net = parseFloat(tex.value);
    tex.value = Math.pow(net, 2).toString();
}

function cuber(): void {
    const net = parseFloat(tex.value);
    tex.value = Math.pow(net, 3).toString();
}

function showTime(): void {
    const date = new Date();
    let h: number | string = date.getHours();
    let m: number | string = date.getMinutes();
    let s: number | string = date.getSeconds();
    let session: string = "AM";

    if (h === 0) {
        h = 12;
    }

    if (h > 12) {
        h -= 12; 
        session = "PM";
    }

    
    h = (h < 10) ? "0" + h : h.toString();
    m = (m < 10) ? "0" + m : m.toString();
    s = (s < 10) ? "0" + s : s.toString();

    const time = `${h}:${m}:${s} ${session}`;
    const clockDisplay = document.getElementById("MyClockDisplay");
    
    if (clockDisplay) {
        clockDisplay.innerText = time;
    }

    setTimeout(showTime, 1000);
}

showTime();

showTime();

document.addEventListener('DOMContentLoaded', function() {
    const scientificButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.div-boutton3, .groupe-scientifique7, .groupe-scientifique6');
    const normalButton = document.getElementById('normalButton') as HTMLButtonElement;
    const scientificButton = document.getElementById('scientificButton') as HTMLButtonElement;

    scientificButtons.forEach((button: HTMLElement) => {
        button.style.display = 'none';
    });

    scientificButton.addEventListener('click', function() {
        scientificButtons.forEach((button: HTMLElement) => {
            button.style.display = 'block'; 
        });
    });

    normalButton.addEventListener('click', function() {
        scientificButtons.forEach((button: HTMLElement) => {
            button.style.display = 'none'; 
        });
    });
});