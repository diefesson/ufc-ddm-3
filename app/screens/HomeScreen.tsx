import { StyleSheet, View } from "react-native/";
import MainStyle from "../style/MainStyle";
import BookServiceImpl from "../service/BookServiceImpl";
import BookList from "../components/BookList";

export default function HomeScreen() {
  const books = BookServiceImpl.findAll();

  function onEditPress(id: number) {
    console.log(`edit: ${id}`);
  }

  function onDeletePress(id: number) {
    console.log(`delete: ${id}`);
  }

  return (
    <View style={[MainStyle.root, stylesheet.root]}>
      <BookList
        books={books}
        onEditPress={onEditPress}
        onDeletePress={onDeletePress}
      />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
