const btn = document.querySelector('.newBook');
const container = document.querySelector('.container');

btn.addEventListener('click',(e)=>{
    console.log('working')
    var form = document.createElement('form');
    var formtitle = document.createElement('h2');
    formtitle.innerText="Por favor rellené los campos del nuevo libro"
    //Title input
    var divTitle = document.createElement('div');
    var titlelbl = document.createElement('label');
    var titleinput = document.createElement('input');
    divTitle.classList.add("input-item")
    titlelbl.for = "title";
    titlelbl.innerText = "Titulo del libro: "
    divTitle.appendChild(titlelbl);
    divTitle.appendChild(titleinput);

    form.appendChild(formtitle);
    form.appendChild(divTitle);
    
    //Appends
    container.appendChild(form);

})
 
let myLibrary = [
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: true,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: false,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: true,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: false,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: true,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: false,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    },
    {
        title: 'Las mil y una noches',
        author: 'Al Jamar Zajir',
        pages: 150,
        read: true,
        info: 'Una de las obras del islam más importantes de todos los tiempos, probablemente la más influyente en occidente'
    }
];

spawnLibrary = ()=>{

    for(i = 0; i <myLibrary.length; i++){

        var div = document.createElement('div');
        var title = document.createElement('h2');
        var author = document.createElement('p');
        var pages = document.createElement('p');
        var read = document.createElement('button');
        var info = document.createElement('p');
        var del = document.createElement('button');
        title.innerText = myLibrary[i].title;
        author.innerText = 'Autor: ' + myLibrary[i].author;
        pages.innerText = 'Páginas: ' + myLibrary[i].pages;
        if(myLibrary[i].read == true){
            read.innerText="Leído";
            read.classList.add('leido')
        } else if(myLibrary[i].read == false){
            read.innerText = "Sin Leer";
            read.classList.add('noleido');
        }
        info.innerText = "Información relevante: " + myLibrary[i].info;

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(info);
        div.classList.add('card');
        container.appendChild(div);   

    }
    
}

function Library(){

}

Library.prototype.sayInfo = function(){
    return this.info
}

function Book(title, author, pages, read, info){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info;

}



Book.prototype = Object.create(Library.prototype); 