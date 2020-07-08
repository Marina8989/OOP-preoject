//Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
       this.title = title;
       this.author = author;
       this.isbn = isbn;
    }
}
//UI class: handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book 1',
                author: 'Author 1',
                isbn: 735425
            },
            {
                title: 'Book 2',
                author: 'Author 2',
                isbn: 8668
            }
        ];
        const books = StoredBooks;

        books.forEach(book => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}
//Store class: handles storage (local)

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault();

    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //instantiate book 
    const book = new Book(title, author, isbn);

})
//Event: Remove a Book
 