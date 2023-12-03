import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import Book from "../models/Book";
import BookService from "./BookService";
import { fbFirestore } from "../firebase/App";

const booksCollection = collection(fbFirestore, "books");

class BookServiceImpl implements BookService {
  async findAll(): Promise<[string, Book][]> {
    const books = [];
    const querySnapshot = await getDocs(booksCollection);
    querySnapshot.forEach((b) => books.push([b.id, b.data()]));
    return books;
  }

  async find(id: string): Promise<Book> {
    const docData = await getDoc(doc(fbFirestore, booksCollection.path, id));
    return docData.data() as unknown as Book;
  }

  async add(book: Book): Promise<void> {
    await addDoc(booksCollection, book);
  }

  async update(id: string, book: Book): Promise<void> {
    await setDoc(doc(fbFirestore, booksCollection.path, id), book);
  }

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(fbFirestore, booksCollection.path, id));
  }
}

export default new BookServiceImpl();
