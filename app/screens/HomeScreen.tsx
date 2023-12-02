import { ScrollView, StyleSheet, View } from "react-native/";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";
import BookServiceImpl from "../service/BookServiceImpl";
import BookList from "../components/BookList";
import Book from "../model/Book";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [books, setBooks] = useState<Book[]>([]);

  function onAddPress() {
    navigation.navigate("book");
  }

  function onEditPress(id: number) {
    navigation.navigate({ name: "book", params: { id } });
  }

  function onDeletePress(id: number) {
    BookServiceImpl.remove(id);
    refreshBooks();
  }

  function refreshBooks() {
    setBooks(BookServiceImpl.findAll());
  }

  useEffect(() => {
    if (isFocused) refreshBooks();
  }, [isFocused]);

  return (
    <View style={[MainStyle.root, stylesheet.root]}>
      <ScrollView>
        <BookList
          books={books}
          onEditPress={onEditPress}
          onDeletePress={onDeletePress}
        />
      </ScrollView>
      <CustomButton title="NOVO" onPress={onAddPress} />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  root: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
