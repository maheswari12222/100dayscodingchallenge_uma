function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    };
}

let Library = {
  books: [],
  addBook(book) {
    this.books.push(book);
  },
  listBooks() {
    this.books.forEach(book => console.log(book.info()));
  }
};

let book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
Library.addBook(book1);
Library.listBooks(); // This will log the info of all books in the library