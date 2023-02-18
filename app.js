function triangle(){
const b = document.getElementById('tb');
const b1 = b.value;
const b2 = parseFloat(b1).toFixed(2);

const h = document.getElementById('th');
const h1 = h.value;
const h2 = parseFloat(h1).toFixed(2);

const area = .5 * b2 * h2;
const a1 = parseFloat(area).toFixed(2)

document.getElementById("ans1").innerText = a1;


}



function rectangle(){
    const b = document.getElementById('rw');
    const b1 = b.value;
    const b2 = parseFloat(b1).toFixed(2);
    
    const h = document.getElementById('rl');
    const h1 = h.value;
    const h2 = parseFloat(h1).toFixed(2);
    
    const area =  b2 * h2;
    const a1 = parseFloat(area).toFixed(2)
    
    document.getElementById("ans2").innerText = a1;

}

function para(){
    const b = document.getElementById('pb');
    const b1 = b.value;
    const b2 = parseFloat(b1).toFixed(2);
    
    const h = document.getElementById('ph');
    const h1 = h.value;
    const h2 = parseFloat(h1).toFixed(2);
    
    const area =  b2 * h2;
    const a1 = parseFloat(area).toFixed(2)
    
    document.getElementById("ans3").innerText = a1;

}

function rohmbus(){
    const b = document.getElementById('d1');
    const b1 = b.value;
    const b2 = parseFloat(b1).toFixed(2);
    
    const h = document.getElementById('d2');
    const h1 = h.value;
    const h2 = parseFloat(h1).toFixed(2);
    
    const area =  .5 * b2 * h2;
    const a1 = parseFloat(area).toFixed(2)
    
    document.getElementById("ans4").innerText = a1;

}


function pentagon(){
    const b = document.getElementById('ptp');
    const b1 = b.value;
    const b2 = parseFloat(b1).toFixed(2);
    
    const h = document.getElementById('ptb');
    const h1 = h.value;
    const h2 = parseFloat(h1).toFixed(2);
    
    const area =  .5 * b2 * h2;
    const a1 = parseFloat(area).toFixed(2)
    
    document.getElementById("ans5").innerText = a1;
}


function ellipse(){
    const b = document.getElementById('ea');
    const b1 = b.value;
    const b2 = parseFloat(b1).toFixed(2);
    
    const h = document.getElementById('eh');
    const h1 = h.value;
    const h2 = parseFloat(h1).toFixed(2);
    
    const area =  3.1416 * b2 * h2;
    const a1 = parseFloat(area).toFixed(2)
    
    document.getElementById("ans6").innerText = a1;
}