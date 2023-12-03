import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import MainStyle from "../style/MainStyle";
import CustomButton from "../components/CustomButton";
import BookServiceImpl from "../services/BookServiceImpl";

interface Props {
  navigation: any,
  route: {
    params?: {
      id?: string;
    };
  };
}

export default function BookScreen({navigation, route}: Props) {
  const id = route.params?.id;
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  function onSavePress() {
    if (id === undefined) {
      BookServiceImpl.add({ title, details });
    } else {
      BookServiceImpl.update(id, { title, details });
    }
    navigation.pop();
  }

  async function fetchBook() {
    const book = await BookServiceImpl.find(id);
    setTitle(book.title);
    setDetails(book.details);
  }

  useEffect(() => {
    if (id !== undefined) fetchBook();
  }, []);

  return (
    <View style={MainStyle.root}>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Titulo:</Text>
        <TextInput
          style={MainStyle.textInput}
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={MainStyle.field}>
        <Text style={MainStyle.mediumText}>Detalhes:</Text>
        <TextInput
          style={MainStyle.multilineTextInput}
          multiline={true}
          numberOfLines={4}
          value={details}
          onChangeText={setDetails}
        />
      </View>
      <CustomButton title="SALVAR" onPress={onSavePress} />
    </View>
  );
}
