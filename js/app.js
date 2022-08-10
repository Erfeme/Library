const btn = document.querySelector('.newBook');
const container = document.querySelector('.container');

btn.addEventListener('click',(e)=>{

    var form = document.createElement('form');
    var formtitle = document.createElement('h2');

    formtitle.innerText="Por favor rellené los campos del nuevo libro"

    //Title input
    var divTitle = document.createElement('div');
    var titlelbl = document.createElement('label');
    var titleinput = document.createElement('input');
    divTitle.classList.add("input-item")
    titleinput.id= "title";
    titleinput.required = true;
    titlelbl.htmlFor = "title";
    titlelbl.innerText = "Titulo del libro: ";

    //Creating the Title input
    divTitle.appendChild(titlelbl);
    divTitle.appendChild(titleinput);

    //Author input
    var divAuthor = document.createElement('div');
    var authorlbl = document.createElement('label');
    var authorInput = document.createElement('input')
    divAuthor.classList.add('input-item');
    authorInput.required = true;
    authorInput.id = 'author';
    authorlbl.htmlFor = 'author';
    authorlbl.innerText = 'Autor: '

    //Creating the author input
    divAuthor.append(authorlbl, authorInput);

    //Pages input
    divPages = document.createElement('div');
    pageslbl = document.createElement('label');
    pagesInput = document.createElement('input');
    divPages.classList.add('input-item');
    pagesInput.id='pages';
    pagesInput.type = 'number';
    pagesInput.required = true;
    pageslbl.htmlFor='pages';
    pageslbl.innerText='Páginas del libro: ';
    
    //Creating the pages Input
    divPages.append(pageslbl,pagesInput);

    //Read Input

    divRead = document.createElement('div');
    reada = document.createElement('a');
    trueInput=document.createElement('input');
    truelbl = document.createElement('label');
    falseInput=document.createElement('input');
    falselbl = document.createElement('label');
    br = document.createElement('br');
    divRead.classList.add('input-item');
    reada.innerText = 'Indica por favor si ya leíste el libro: '
    trueInput.type = 'radio';
    trueInput.name = 'read';
    trueInput.id='true';
    truelbl.innerText='Leído';
    truelbl.htmlFor='true';
    falseInput.type = 'radio';
    falseInput.name = 'read';
    falseInput.checked = 'true';
    falseInput.id='false';
    falselbl.innerText = 'No leído';
    falselbl.htmlFor = 'false';

    //create read inputs

    divRead.append(reada,br, truelbl, trueInput, falselbl,falseInput);

    //Aditional info inputs
    divInfo = document.createElement('div');
    arealbl = document.createElement('lbl');
    areabr = document.createElement('br');
    infoinput = document.createElement('textarea');
    infoinput.required = true;
    arealbl.innerText = "Detalle la información adicional de este libro";
    arealbl.htmlFor = 'info';
    infoinput.id='info';

    //create info inputs
    divInfo.append(arealbl,areabr, infoinput);

    //buttons
    btnAceptar = document.createElement('button');
    btnCancelar = document.createElement('button');
    btnCancelar.innerText = 'Cancelar';
    btnAceptar.innerText = 'Aceptar';

    btnCancelar.addEventListener('click', (e)=>{
        btn.disabled = false;
        form.remove();
    })

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
    })

    btnAceptar.addEventListener('click',(e)=>{
        
    })

    

    //Appending the form elements into the form
    form.appendChild(formtitle);
    form.appendChild(divTitle);
    form.appendChild(divAuthor);
    form.appendChild(divPages);
    form.appendChild(divRead);
    form.appendChild(divInfo);
    form.appendChild(btnCancelar);
    form.appendChild(btnAceptar);
    
    //Append the form into the html
    container.appendChild(form);

    btn.disabled = true;

    
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