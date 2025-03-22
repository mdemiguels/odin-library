import { myLibrary, addBookToLibrary } from './library.js';

const tbody = document.querySelector('#book-table tbody');

document.addEventListener('DOMContentLoaded', () => {
    loadBooksOnTable();
});

function loadBooksOnTable() {
    myLibrary.forEach(book => {
        const row = createRow(book);
        tbody.appendChild(row);
    });
}

function createRow(book) {
    const row = document.createElement('tr');

    const { title, author, pages, isRead, options} = createCoulmns(book);

    row.id = book.id;
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(isRead);
    row.appendChild(options);

    return row;
}

function createCoulmns(book) {
    const title = document.createElement('td');
    title.textContent = book.title;
    const author = document.createElement('td');
    author.textContent = book.author;
    const pages = document.createElement('td');
    pages.textContent = book.pages;
    const isRead = document.createElement('td');
    isRead.textContent = book.isRead? 'Already read' : 'Not read yet';

    const options = document.createElement('td');
    options.classList = 'options-image';
    const optionsImg = document.createElement('img');
    optionsImg.src = './img/trash.svg';
    options.appendChild(optionsImg);

    return { title, author, pages, isRead, options };
}