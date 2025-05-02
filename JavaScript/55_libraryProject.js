class Library{
    constructor(){
        this.books=[];
    }
    addBooks(books){
        this.books.push(...books);
    }
    removeBook(){
        this.books.pop();
    }
    countBook(){
        console.log(this.books.length);
    }
    listAllBooks(){
        this.books.forEach(function(book,index){
            console.log(`${index+1})${book.name}`);
        });
    }
}
class Book{
    constructor(name,isbn,pages,author,price){
        this.name=name;
        this.isbn=isbn; 
        this.pages=pages;
        this.author=author;
        this.price=price;
        this.readStatus=false;
    }
    info(){
        console.log(`Book name is ${this.name} , price is ${this.price} and ${this.readStatus ? "Book is read it " : "Book is not read it " }.`);
    }
    pages(){
        console.log(`Book name is ${this.name} and pages are ${this.pages}`);
    }
    changeReadStatus(){
        this.readStatus=!this.readStatus;
    }
}
let bhopalLibrary = new Library();
// console.log(bhopalLibrary);

// bhopalLibrary.addBook('Do it today');
// bhopalLibrary.addBook('Ego is the enemy');
// bhopalLibrary.addBook('Attitude is everything');
// bhopalLibrary.addBook('Deep work');
// bhopalLibrary.addBook('Rich Dad poor Dad');

// bhopalLibrary.countBook();

// bhopalLibrary.removeBook();

// bhopalLibrary.listAllBooks();

// bhopalLibrary.countBook();

let b1 = new Book('Do it today', 123456, 200, 'ronit', 500);
let b2 = new Book('Ego is the enemy', 123457, 300, 'ronit', 600);
let b3 = new Book('Attitude is everything', 123458, 400, 'ronit', 700);
let b4 = new Book('Deep work', 123459, 500, 'ronit', 800);
let b5 = new Book('Rich Dad poor Dad', 123460, 600, 'ronit', 900);

// console.log(b1);
// b1.info();
// b1.changeReadStatus();
// b1.info();

bhopalLibrary.addBooks([b1,b2,b3,b4,b5]);
bhopalLibrary.listAllBooks();


// mobile and mobileshop