import Book from "../model/Book";

export default interface BookService {
  findAll(): Book[];
  find(id: number): Book;
  add(book: Book): Book;
  update(book: Book): Book;
  remove(id: number): Book;
}
