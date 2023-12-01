import { StyleSheet, View } from "react-native";
import Book from "../model/Book";
import BookComponent from "./BookComponent";

interface Props {
  books: Book[];
  onEditPress: (id: number) => void;
  onDeletePress: (id: number) => void;
}

export default function ({ books, onEditPress, onDeletePress }: Props) {
  return (
    <View style={stylesheet.list}>
      {books.map((book) => (
        <BookComponent
          book={book}
          onEditPress={onEditPress}
          onDeletePress={onDeletePress}
          key={book.id}
        />
      ))}
    </View>
  );
}

const stylesheet = StyleSheet.create({
  list: {
    gap: 5,
  },
});
