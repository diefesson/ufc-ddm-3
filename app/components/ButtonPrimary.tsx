import { GestureResponderEvent, Pressable, Text } from "react-native";
import MainStyle from "../style/MainStyle";

interface Props {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function ButtonPrimary({ title, onPress }: Props) {
  return (
    <Pressable style={MainStyle.buttonPrimary} onPress={onPress}>
      <Text style={MainStyle.buttonPrimaryText}>{title}</Text>
    </Pressable>
  );
}
