import Book from "../model/Book";
import BookService from "./BookService";

class BookServiceImpl implements BookService {
  books: Book[] = [
    { id: 1, title: "Livro Um", detail: "Detalhes do Livro Um" },
    { id: 2, title: "Livro Dois", detail: "Detalhes do Livro Dois" },
    { id: 3, title: "Livro Tres", detail: "Detalhes do Livro Tres" },
  ];
  nextId = 4;

  findAll(): Book[] {
    return this.books.map((book) => ({ ...book }));
  }

  find(id: number): Book {
    return { ...this.books.find((book) => book.id == id) };
  }

  add(book: Book): Book {
    book = { ...book, id: this.nextId++ };
    this.books.push(book);
    return { ...book };
  }

  remove(id: number): Book {
    const index = this.books.findIndex((book) => (book.id = id));
    return this.books.splice(index, 1)[0];
  }
}

export default new BookServiceImpl();