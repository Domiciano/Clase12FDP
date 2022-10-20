const container = document.getElementById('container');
const nameInput = document.getElementById('nameInput');
const idInput = document.getElementById('idInput');
const programInput = document.getElementById('programInput');
const addBtn = document.getElementById('addBtn');

//Los datos a representar
const data = [];

function generate(){
    for(let i=0 ; i<20 ; i++){
        let est = new Estudiante(`A000${i}`,`Name${i}`,`DMI`);
        est.delete = function(){
            let index = data.indexOf(est);
            data.splice(index, 1);
            showData();
        }
        data.push(est);
    }
}

function showData(){
    container.innerHTML = "";
    for(let i=0 ; i<data.length ; i++){
        data[i].render(container);
    }
}

//Usar la función
//generate();
showData();

function addCard(){
    let name = nameInput.value;
    let id = idInput.value;
    let program = programInput.value;
    let estudiante = new Estudiante(id, name, program);
    estudiante.delete = function(){
        let index = data.indexOf(estudiante);
        data.splice(index, 1);
        showData();
    }
    data.push(estudiante);
    showData();
}

addBtn.addEventListener('click', addCard);