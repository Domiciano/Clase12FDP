class Estudiante{

    constructor(id, name, program){
        this.id = id;
        this.name = name;
        this.program = program;
    }
    render(container){
        let content = `<h3>${this.name}</h3>
                        <b>${this.id}</b>
                        <small>${this.program}</small>
                        <button id="show${this.id}">SHOW</button>
                        <button>DELETE</button>`;
        let card = document.createElement('div');
        //let cardString = '<div></div>';
        //Agregar contenido a nivel de string
        card.innerHTML = content;
        //Agregar la card al contenedor
        //Agregar contenido pero a nivel de elementos
        container.appendChild(card);
        let showBtn = document.getElementById(`show${this.id}`);   
        showBtn.addEventListener('click', this.show.bind(this));
   }

   show(){
        alert(this.name+"\n"+this.program);
   }

}