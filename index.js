const container = document.getElementById('container');


function generate(){
    for(let i=0 ; i<20 ; i++){
        let est = new Estudiante(`A000${i}`,`Name${i}`,`DMI`);
        est.render(container);
    }
}

//Usar la función
generate();