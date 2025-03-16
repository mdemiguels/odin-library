export const myLibrary = [];

function Book(title, author, pages, isRead) {
    
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
    this.info = function() {
        return `${this.id}, ${this.title}, ${this.author}, ${this.pages}, ${this.isRead}`;
    }

}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead)
    myLibrary.push(book);
}

addBookToLibrary('Atomic Habits', 'James Clear', 190, 'Is read');
addBookToLibrary('Build your Second Brain', 'Tiago Forte', 280, 'Is read');
addBookToLibrary('Your Money or your Life', 'Vicky Robin', 390, 'Is read');