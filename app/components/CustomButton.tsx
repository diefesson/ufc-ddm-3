import { GestureResponderEvent, Pressable, Text } from "react-native";
import MainStyle from "../style/MainStyle";
import MainColors from "../style/MainColors";

type ButtonType = "primary" | "secondary" | "danger";

interface Props {
  type?: ButtonType;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

function pickColor(type: ButtonType): string {
  switch (type) {
    case "primary":
      return MainColors.primary;
    case "secondary":
      return MainColors.secondary;
    case "danger":
      return MainColors.danger;
  }
}

export default function CustomButton({
  type = "primary",
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      style={[MainStyle.button, {backgroundColor: pickColor(type)}]}
      onPress={onPress}
    >
      <Text style={MainStyle.buttonText}>{title}</Text>
    </Pressable>
  );
}
