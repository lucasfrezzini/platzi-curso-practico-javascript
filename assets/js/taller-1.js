// CALCULOS Y FORMULAS
// ===================

// Codigo del cuadrado 

function perimetroCuadrado(lado) { 
    return lado * 4; 
}
function areaCuadrado (lado) {
    return lado * lado
}

// Codigo del rectangulo 

function perimetroRectangulo(lado1, lado2) { 
    return lado1 * 2 + lado2 + 2; 
}
function areaRectangulo (lado1, lado2) {
    return lado1 * lado2;
}

// Codigo del triangulo

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, base) {
    return ladoTriangulo1 + ladoTriangulo2 + base;
}

function areaTriangulo (base, altura) {
    return ((base * altura) / 2).toFixed(2);
}

function esIsosceles(ladoTriangulo1, ladoTriangulo2, base) {
    if (ladoTriangulo1 == ladoTriangulo2 && ladoTriangulo1 != base) {
        // formula de altura de un isosceles --> raiz(a^2 - b^2 / 4)
        altura = Math.sqrt((ladoTriangulo1 ** 2) - (base ** 2) / 4 );
        console.log('aca')
        console.log(altura)
        return altura.toFixed(2);
    } else {
        return false;
    }
}

// Codigo del circulo
const PI = Math.PI;

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI).toFixed(2);
}

function areaCirculo(radio) {
    return ((radio * radio) * PI).toFixed(2);
}

// UTILIDADES
// ===================

function cleanError (id) {
    errors = document.getElementById(id).querySelectorAll('.error');
    for (e of errors) {
        e.innerHTML = '';
    }
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// LLAMADAS
// ==========

// Cuadrado

function checkInputsSquare(l1) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado A';
        return false;
    }
    return true;
}

function renderResultSquare(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'assets/img/square.png';
    resultH2.innerHTML = 'Cuadrados';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>cuadrado</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);

    if(checkInputsSquare(lado)) {
        const result = perimetroCuadrado(lado);
        renderResultSquare(result, 'Perimetro');
    }
}

function calcularAreaCuadrado() {
    cleanError('cuadrados');

    const lado = parseInt(document.getElementById('inputCuadrado').value);

    if(checkInputsSquare(lado)) {
        const result = areaCuadrado(lado);
        renderResultSquare(result, 'Area');
    }
}

// Rectangulo

function checkInputsCube(l1, l2) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorRL1');
        e.innerHTML = 'Ingrese un valor válido para el Lado A';
        return false;
    }
    if (Number.isNaN(l2) || l2 <= 0) {
        e = document.getElementById('errorRL2');
        e.innerHTML = 'Ingrese un valor válido para el Lado B';
        return false;
    }

    return true;
}

function renderResultCube(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'assets/img/cube.png';
    resultH2.innerHTML = 'Rectangulos';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>rectangulo</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroRectangulo() {
    cleanError('rectangulos');

    const lado1 = parseInt(document.getElementById('inputRectangulo1').value);
    const lado2 = parseInt(document.getElementById('inputRectangulo2').value);

    if(checkInputsCube(lado1, lado2)) {
        const result = perimetroRectangulo(lado1, lado2);
        renderResultCube(result, 'Perimetro');
    }
}

function calcularAreaRectangulo() {
    cleanError('rectangulos');

    const lado1 = parseInt(document.getElementById('inputRectangulo1').value);
    const lado2 = parseInt(document.getElementById('inputRectangulo2').value);

    if(checkInputsCube(lado1, lado2)) {
        const result = areaRectangulo(lado1, lado2);
        renderResultCube(result, 'Area');
    }
}

// Circulo
function checkInputsCircle(l1) {
    if (Number.isNaN(l1) || l1 <= 0) {
        e = document.getElementById('errorCirculo');
        e.innerHTML = 'Ingrese un valor válido para el Lado A';
        return false;
    }
    return true;
}

function renderResultCircle(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'assets/img/circle.png';
    resultH2.innerHTML = 'Circulos';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>circulo</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}

function calcularPerimetroCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCircle(radio)){
        const result = perimetroCirculo(radio);
        renderResultCircle(result, 'Perimetro');
    }
}

function calcularAreaCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCircle(radio)){
        const result = areaCirculo(radio);
        renderResultCircle(result, 'Area');
    }
}

function calcularDiametroCirculo() {
    cleanError('circulos');
    
    const radio = parseInt(document.getElementById('inputCirculo').value);

    if(checkInputsCircle(radio)){
        const result = diametroCirculo(radio);
        renderResultCircle(result, 'Diametro');
    }
}


// Triangulo

function calcularAreaTriangulo() {
    cleanError('triangulos');

    const lado1 = false;
    const lado2 = false;
    const base = parseInt(document.getElementById('inputBase').value);
    const altura = parseInt(document.getElementById('inputAltura').value);

    console.log('aca1')
    console.log(lado1)
    console.log(lado2)
    console.log(base)
    console.log(altura)

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = areaTriangulo(base, altura);
        renderResultTriangles(result, 'Area');
    }
}

function calcularPerimetroTriangulo() {
    cleanError('triangulos');

    const lado1 = parseInt(document.getElementById('inputTriangulo1').value);
    const lado2 = parseInt(document.getElementById('inputTriangulo2').value);
    const base = parseInt(document.getElementById('inputBase').value);
    const altura =  false;

    if (checkInputsTriangulo(lado1, lado2, base, altura)) {
        const result = perimetroTriangulo(lado1, lado2, base);

        renderResultTriangles(result, 'Perimetro');
    }    
}

function checkInputsTriangulo (l1, l2, b, h) {
    if (h == false) {
        if (Number.isNaN(l1) || l1 <= 0) {
            e = document.getElementById('errorT1');
            e.innerHTML = 'Ingrese un valor válido para el Lado A';
            return false;
        }

        if (Number.isNaN(l2) || l2 <= 0) {
            e = document.getElementById('errorT2');
            e.innerHTML = 'Ingrese un valor válido para el Lado B';
            return false;
        }

        if (Number.isNaN(b) || b <= 0) {
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }
        
    } else {
        // Area
        if (Number.isNaN(b) || b <= 0) {
            console.log(32)
            e = document.getElementById('errorTBase');
            e.innerHTML = 'Ingrese un valor válido para la Base';
            return false;
        }

        console.log(h);

        if (Number.isNaN(h) || h <= 0) {
            e = document.getElementById('errorTAltura');
            e.innerHTML = 'Ingrese un valor válido para la Altura';
            return false;
        }

    }
    return true;
}

function renderResultTriangles(r, calc) {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'grid';

    const unit = calc == 'Area' ? 'cm<span>2</span>' : 'cm';

    const resultIMG = document.getElementById('resultIMG');
    const resultH2 = document.getElementById('resultH2');        
    const resultH4 = document.getElementById('resultH4');

    resultIMG.src = 'assets/img/triangle.png';
    resultH2.innerHTML = 'Triangulos';

    resultH4.innerHTML = `El <strong>${calc}</strong> del <strong>triangulo</strong> es: <strong class="unit"> ${r} ${unit}</strong>`;
}