
let fridge = JSON.parse(localStorage.getItem('fridge'));

let list = JSON.parse(localStorage.getItem('list'));

let tableBodyF = document.querySelector('#fridge');

let tableBodyL = document.querySelector('#list');

let divF = document.querySelector('#añadir');

let divL = document.querySelector('#añadirList');


function tableFridge() {

    
    tableBodyF.innerHTML = '';
    let th = document.createElement('th');
        th.textContent = 'Frigorifico';
        tableBodyF.appendChild(th);
    fridge.forEach((item, index) => {
        
        
        let rowF = document.createElement('tr');
        let colF = document.createElement('td');
        let textF = document.createTextNode(item);
        let buttonD = document.createElement('button');
        buttonD.textContent = 'Eliminar';

        buttonD.addEventListener('click', () =>{
            fridge.splice(index, 1);
            list.push(item);
            updateLocalStorage();
            tableFridge();
            tableList();
        })


        colF.appendChild(textF);
        rowF.appendChild(colF);
        rowF.appendChild(buttonD);
        tableBodyF.appendChild(rowF);


    })
}


function tableList() {

    
    tableBodyL.innerHTML = '';
    let th = document.createElement('th');
        th.textContent = 'Lista de la Compra';
        tableBodyL.appendChild(th);
    list.forEach((item, index) => {
        
        
        let rowF = document.createElement('tr');
        let colF = document.createElement('td');
        let textF = document.createTextNode(item);
        let buttonD = document.createElement('button');
        buttonD.textContent = 'Eliminar';

        buttonD.addEventListener('click', () =>{
            list.splice(index, 1);
            updateLocalStorage();
            tableList();
        })


        colF.appendChild(textF);
        rowF.appendChild(colF);
        rowF.appendChild(buttonD);
        tableBodyL.appendChild(rowF);

        

    })

}



function addFridge(event) {
    
    let labelF = document.createElement('label');
    labelF.textContent ='Añadir a Frigorífico:';
    
    let inputF = document.createElement('input');
    inputF.type = 'text';
    inputF.name = 'addFridge';
    
    let subm = document.createElement('button');
    subm.textContent = 'Añadir'
    


    subm.addEventListener('click', () =>{

        let newItemF = inputF.value;
        if (newItemF != '') {
            fridge.push(newItemF);
            updateLocalStorage();
            tableFridge();
            inputF.value = '';
        }
        
    
        
    });

    divF.appendChild(labelF);
    divF.appendChild(inputF);
    
    divF.appendChild(subm);

}


function addList() {
    
    let labelL = document.createElement('label');
    labelL.textContent ='Añadir a Lista de la compra: ';
    
    let inputL = document.createElement('input');
    inputL.type = 'text';
    inputL.name = 'addList';
    
    let subm = document.createElement('button');
    subm.textContent = 'Añadir'
    
    subm.addEventListener('click', () =>{

        let newItemL = inputL.value;
        if (newItemL != '') {
            list.push(newItemL);
            updateLocalStorage();
            tableList();
            inputL.value = '';
        }

    });

    divL.appendChild(labelL);
    divL.appendChild(inputL);
    
    divL.appendChild(subm);

}


function updateLocalStorage() {
    localStorage.setItem('fridge', JSON.stringify(fridge));
    localStorage.setItem('list', JSON.stringify(list));
}

tableList();

tableFridge();

addFridge();

addList();


