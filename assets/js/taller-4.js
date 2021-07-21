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

function renderListDefault(list) {
    l = document.getElementById('list-values-default');
    l.innerHTML = '';

    list.forEach((element, index) => {
        const listElement = document.createElement('li');
        listElement.innerHTML = `<strong>${index + 1} -</strong> ${element.name}, <strong>USD$ ${element.salary}</strong>`;

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
            btn.setAttribute('onclick', 'renderMedianaSalarial();');
            btn.innerText = 'Calcular Media Salarial'
            break;
        case '2':
            btn.setAttribute('onclick', 'renderMedianaTop10();');
            btn.innerText = 'Calcular Media Top 10'
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

// HELPERS

function esPar(n) {
    return n % 2 === 0;
};

// Calculadora de medianas
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
           return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    
}

// Mediana General
function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personMitad1 = lista[mitad-1];
        const personMitad2 = lista[mitad];

        return mediana = calcularMediaAritmetica([personMitad1, personMitad2])
    } else {
        const personMitad = lista[mitad];
        return personMitad;
    }
}

function renderMedianaSalarial () {
    const checked = document.getElementById('checkInput').checked;
    let r;
    let render = false;

    if (checked) {
        const salariosCol = colombia.map (
            function (person) {
                return person.salary;
            }
        );
        const salariosColSorted = salariosCol.sort(
            (salaryA, salaryB) => salaryA - salaryB
        );
        r = medianaSalarios(salariosColSorted);
        render = true;
    } else {
        if (checkList(list)) {
            const listSorted = list.sort((salaryA, salaryB) => salaryA - salaryB);
            r = medianaSalarios(listSorted);
            render = true;
        }
    }
    
    if (render) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/dollar.png';
        resultH2.innerHTML = 'Mediana Salarial';

        resultH4.innerHTML = `La Mediana Salarial es: <strong class="unit"> ${r}</strong>`;
    }
    
}
// const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%
function spliceList(list) {
    const spliceStart = parseInt((list.length * 90) / 100);
    const spliceCount = parseInt(list.length - spliceStart);
    const listTop10 = list.splice(spliceStart, spliceCount);

    return listTop10;
}

function renderMedianaTop10() {
    const checked = document.getElementById('checkInput').checked;
    let r;
    let render = false;

    if (checked) {
        const salariosCol = colombia.map ( person => person.salary );
        const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB );
        r = medianaSalarios(spliceList(salariosColSorted));
        render = true;
    } else {
        if (checkList(list)) {
            const listSorted = list.sort((salaryA, salaryB) => salaryA - salaryB);
            r = medianaSalarios(spliceList(listSorted));
            render = true;
        }
    }
    
    if (render) {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'grid';


        const resultIMG = document.getElementById('resultIMG');
        const resultH2 = document.getElementById('resultH2');        
        const resultH4 = document.getElementById('resultH4');

        resultIMG.src = 'assets/img/dollar.png';
        resultH2.innerHTML = 'Mediana Salarial TOP 10%';

        resultH4.innerHTML = `La Mediana Salarial Top 10% es: <strong class="unit"> ${r}</strong>`;
    }
}
