

let inventory = {
    items: [
        { name: "Laptop", quantity: 5, price: 1200 },
        { name: "Mouse", quantity: 25, price: 20 },
        { name: "Keyboard", quantity: 15, price: 50 }
    ],
    totalItems: 0
};


let body = document.getElementsByTagName('body')[0];
let table = document.createElement('table');
table.id = 'tabla';
body.appendChild(table);

function createTable() {

    table.innerHTML = ""

    inventory.items.forEach((item, index) => {

        let tr = document.createElement('tr');

        let tdName = document.createElement('td');
        let tdQuan = document.createElement('td');
        let tdPrice = document.createElement('td');
        let button = document.createElement('button');
        button.textContent = 'Eliminar';

        tdName.textContent = item.name;
        tdQuan.textContent = item.quantity;
        tdPrice.textContent = item.price;

        button.addEventListener('click', ()=>{
            inventory.items.splice(index, 1);
            storage();
            createTable();

        }
        
        )


        tr.appendChild(tdName);
        tr.appendChild(tdQuan);
        tr.appendChild(tdPrice);
        tr.appendChild(button);
        table.appendChild(tr);


    }

    )

}

let form = document.createElement('form'); form.id = 'inventoryForm'; let nameLabel = document.createElement('label'); nameLabel.setAttribute('for', 'name'); nameLabel.textContent = 'Nombre:'; form.appendChild(nameLabel); let nameInput = document.createElement('input'); nameInput.type = 'text'; nameInput.id = 'name'; nameInput.name = 'name'; nameInput.required = true; form.appendChild(nameInput); form.appendChild(document.createElement('br')); form.appendChild(document.createElement('br')); let quantityLabel = document.createElement('label'); quantityLabel.setAttribute('for', 'quantity'); quantityLabel.textContent = 'Cantidad:'; form.appendChild(quantityLabel); let quantityInput = document.createElement('input'); quantityInput.type = 'number'; quantityInput.id = 'quantity'; quantityInput.name = 'quantity'; quantityInput.required = true; form.appendChild(quantityInput); form.appendChild(document.createElement('br')); form.appendChild(document.createElement('br')); let priceLabel = document.createElement('label'); priceLabel.setAttribute('for', 'price'); priceLabel.textContent = 'Precio:'; form.appendChild(priceLabel); let priceInput = document.createElement('input'); priceInput.type = 'number'; priceInput.id = 'price'; priceInput.name = 'price'; priceInput.required = true; form.appendChild(priceInput); form.appendChild(document.createElement('br')); form.appendChild(document.createElement('br')); let submitButton = document.createElement('input'); submitButton.type = 'submit'; submitButton.value = 'Añadir'; form.appendChild(submitButton); body.appendChild(form);







function addElement(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;

    inventory.items.push({name, quantity: parseInt(quantity),price: parseInt(price)})
    storage();
    createTable();
    form.reset();
}





document.getElementById('inventoryForm').addEventListener('submit', addElement);


function storage(){
    localStorage.setItem('inventory', JSON.stringify(inventory));
}


function loadFromLocalStorage() { let storedInventory = localStorage.getItem('inventory'); if (storedInventory) { inventory = JSON.parse(storedInventory); }
}

loadFromLocalStorage();
createTable();



