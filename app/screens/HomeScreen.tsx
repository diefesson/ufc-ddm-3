import { ScrollView, StyleSheet, Text, View } from "react-native/";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";
import BookServiceImpl from "../services/BookServiceImpl";
import BookList from "../components/BookList";
import Book from "../models/Book";
import TopBar from "../components/TopBar";

export default function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  const [books, setBooks] = useState<[string, Book][]>([]);

  function onAddPress() {
    navigation.navigate("book");
  }

  function onEditPress(id: string) {
    navigation.navigate({ name: "book", params: { id } });
  }

  function onDeletePress(id: string) {
    BookServiceImpl.remove(id);
    refreshBooks();
  }

  async function refreshBooks() {
    setBooks(await BookServiceImpl.findAll());
  }

  useEffect(() => {
    if (isFocused) refreshBooks();
  }, [isFocused]);

  return (
    <View style={[MainStyle.root, stylesheet.root]}>
      <TopBar />
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
