import { StyleSheet, View } from "react-native";
import Book from "../models/Book";
import BookComponent from "./BookComponent";

interface Props {
  books: [string, Book][];
  onEditPress: (id: string) => void;
  onDeletePress: (id: string) => void;
}

export default function ({ books, onEditPress, onDeletePress }: Props) {
  return (
    <View style={stylesheet.list}>
      {books.map(([id, book]) => (
        <BookComponent
          book={book}
          onEditPress={() => onEditPress(id)}
          onDeletePress={() => onDeletePress(id)}
          key={id}
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
