const btn = document.querySelector('.newBook');

btn.addEventListener('click',(e)=>{
    
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
        read: true,
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
        read: true,
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
        read: true,
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
    var div = document.createElement('div');
    var title = document.createElement('h2');
    
    console.log(div);
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