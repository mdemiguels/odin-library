
function Book(title, author, pages, isRead) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    
    this.info = function() {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.isRead}`;
    }

}

const book1 = new Book('Hábitos Atómicos', 'James Clear', 350, 'Is read');
console.log(book1.info());