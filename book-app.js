class Book {
  constructor(title, author, available) {
    this.title = title;
    this.author = author;
    this.available = available;
  }

  rent() {
    if (this.available) {
      this.available = false;
      console.log(`Book rented: ${this.title} by ${this.author}`);
    } else {
      console.log(`Book not available: ${this.title} by ${this.author}`);
    }
  }

  return() {
    this.available = true;
    console.log(`Book returned: ${this.title} by ${this.author}`);
  }
}

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = books;
  }

  search(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      console.log(`Book found: ${book.title} by ${book.author}`);
    } else {
      console.log(`Book not found: ${title}`);
    }
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', true);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', true);
const book3 = new Book('The Catcher in the Rye', 'J.D. Salinger', false);
const books = [book1, book2, book3];
const library = new Library('My Library', books);

library.search('The Great Gatsby');
book1.rent();
book1.return();
book3.rent();
