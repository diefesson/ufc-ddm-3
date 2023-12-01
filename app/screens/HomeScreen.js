import { Text, View } from "react-native/";
import MainStyle from "../style/MainStyle";

export default function HomeScreen() {
  return (
    <View style={MainStyle.root}>
      <Text style={MainStyle.smallText}>Hello</Text>
    </View>
  );
}
