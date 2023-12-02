import { GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import Book from "../model/Book";
import MainColors from "../style/MainColors";
import MainStyle from "../style/MainStyle";
import CustomButton from "./CustomButton";

interface Props {
  book: Book;
  onEditPress: (id: number) => void;
  onDeletePress: (id: number) => void;
}

export default function ({
  book,
  onEditPress: onEdit,
  onDeletePress: onDelete,
}: Props) {
  return (
    <View style={stylesheet.card}>
      <Text style={MainStyle.mediumText}>{book.title}</Text>
      <Text style={MainStyle.smallText}>{book.details}</Text>
      <View style={stylesheet.options}>
        <CustomButton title="EDITAR" onPress={() => onEdit(book.id)} />
        <CustomButton type="danger" title="REMOVER" onPress={() => onDelete(book.id)} />
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: MainColors.backgroundSecondary,
  },
  options:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10
  }
});
