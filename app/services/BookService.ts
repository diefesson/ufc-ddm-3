import Book from "../models/Book";

export default interface BookService {
  findAll(): Promise<[string, Book][]>;

  find(id: string): Promise<Book>;

  add(book: Book): Promise<void>;

  update(id: string, book: Book): Promise<void>;

  remove(id: string): Promise<void>;
}
