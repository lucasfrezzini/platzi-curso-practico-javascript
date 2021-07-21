// UTILIDADES
// ===================

list = [];

function cleanError (id) {
    const errors = document.getElementById(id).querySelectorAll('.error');
    for (e of errors) {
        e.innerHTML = '';
    }
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function renderList(list) {
    l = document.getElementById('list-values');
    l.innerHTML = '';

    list.forEach((element, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<strong>${index + 1} -</strong> ${element}`;

        l.appendChild(listElement);
    });
}

function addListNumber() {
    cleanError('form');
    const element = document.getElementById('addValue');
    const value = parseInt(element.value);
    element.value = '';

    if (Number.isNaN(value) || value < 0) {
        e = document.getElementById('errorAddValue');
        e.innerHTML = 'Ingrese un valor válido para la lista de números';
        return false;
    }
    
    list.push(value);
    renderList(list);
}

function removeListNumber() {
    cleanError('form');
    const element = document.getElementById('removeValue');
    let value = parseInt(element.value);
    element.value = '';

    if (Number.isNaN(value) || value <= 0) {
        e = document.getElementById('errorRemoveValue');
        e.innerHTML = 'Ingrese una posición válida de la lista de números';
        return false;
    }

    value -= 1;

    list.splice(value, 1);
    renderList(list);
}

function switchFormula () {
    const f = document.getElementById('formulaSelect').value;
    const btn = document.getElementById('btn-render');
    cleanError('form');
    switch (f) {
        case '1':
            btn.setAttribute('onclick', 'renderMediaAritmetica();');
            btn.innerText = 'Calcular Media Aritmetica'
            break;
        case '2':
            btn.setAttribute('onclick', 'renderMediaArmonica();');
            btn.innerText = 'Calcular Media Armonica'
            break;
        case '3':
            btn.setAttribute('onclick', 'renderMediaGeometrica();');
            btn.innerText = 'Calcular Media Geometrica'
            break;
        case '4':
            btn.setAttribute('onclick', 'renderModa();');
            btn.innerText = 'Calcular Moda'
            break;
        case '5':
            btn.setAttribute('onclick', 'renderMediana();');
            btn.innerText = 'Calcular Mediana'
            break;
    }
}

function checkList() {
    if (list.length == 0) {
        e = document.getElementById('errorList');
        e.innerHTML = '<strong>Ingrese valores en la Lista.</strong>';
        return false;
    }
    return true;
}
// Promedios

function calcularMediaAritmetica(list) {
    const sumaList = list.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado + nuevoElemento;
        }, 0
    );

    const mediaAritmetica = sumaList / list.length;
    return parseFloat(mediaAritmetica.toFixed(2))
}

function renderMediaAritmetica() {
    if (checkList(list)){
        const r = calcularMediaAritmetica(list);
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/discount.png';
        resultH2.innerHTML = 'Media Aritmetica';

        resultH4.innerHTML = `La Media Aritmetica es: <strong class="unit"> ${r}</strong>`;
    }
}

function calcularMediaGeometrica (list) {
    const multiplicacionList = list.reduce(
        (valorAcumulado, nuevoElemento) => {
            return valorAcumulado * nuevoElemento;
        }, 1
    );

    const mediaGeometrica = multiplicacionList ** (1/list.length);
    return parseFloat(mediaGeometrica.toFixed(3));
}

function renderMediaGeometrica() {
    if (checkList(list)){
        const r = calcularMediaGeometrica(list);
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/discount.png';
        resultH2.innerHTML = 'Media Geometrica';

        resultH4.innerHTML = `La Media Geometrica es: <strong class="unit"> ${r}</strong>`;
    }
}

function calcularMediaArmonica (list) {
    const sumaList = list.reduce(
        (valorAcumulado, nuevoElemento) => valorAcumulado + (1 / nuevoElemento), 0
    );

    console.log(sumaList);

    const mediaArmonica = list.length / sumaList;
    return parseFloat(mediaArmonica.toFixed(3));
}

function renderMediaArmonica() {
    if (checkList(list)){
        const r = calcularMediaArmonica(list);
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/discount.png';
        resultH2.innerHTML = 'Media Armonica';

        resultH4.innerHTML = `La Media Armonica es: <strong class="unit"> ${r}</strong>`;
    }
}

// Modas

function calcularModa () {
    const listaCount = {};

    list.map(
        function (e) {
            if (listaCount[e]) {
                listaCount[e] += 1;
            } else {
                listaCount[e] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1][0];
    return moda;
}

function renderModa() {
    if (checkList(list)){
        const r = calcularModa();
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/discount.png';
        resultH2.innerHTML = 'Moda';

        resultH4.innerHTML = `La Moda es: <strong class="unit"> ${r}</strong>`;
    }
}

// Mediana

function esPar(value) {
    return value % 2 === 0 ? true : false; 
}


function calcularMediana (lista) {
    // Ordenamos la lista
    const listaOrdenada = lista.sort( 
        function(a, b) {
            return a - b;
        }
    )
    
    // Ubicamos elementos y calculamos
    const mitadLista = parseInt(listaOrdenada.length / 2);

    if (esPar(listaOrdenada.length)) {
        // dos elementos
        const elemento1 = listaOrdenada[mitadLista-1];
        const elemento2 = listaOrdenada[mitadLista];

        const mediana = calcularMediaAritmetica([elemento1, elemento2]);
        return mediana;

    } else {
        // un elemento
        const mediana = lista[mitadLista];
        return mediana;

    }
}

function renderMediana() {
    if (checkList(list)){
        r = calcularMediana(list);
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/discount.png';
        resultH2.innerHTML = 'Mediana';

        resultH4.innerHTML = `La Mediana es: <strong class="unit"> ${r}</strong>`;
    }
}