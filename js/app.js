let myLibrary = [];

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