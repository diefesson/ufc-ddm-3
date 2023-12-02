import { StyleSheet, Text, View } from "react-native";

import { useAppSelector } from "../state/Store";
import MainColors from "../style/MainColors";
import MainStyle from "../style/MainStyle";

export default function TopBar() {
  const name = useAppSelector((state) => state.user!.name);
  return (
    <View style={componentStyle.topBar}>
      <Text style={MainStyle.largeText}>{name}</Text>
      <View style={componentStyle.picture}></View>
    </View>
  );
}

const componentStyle = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    backgroundColor: MainColors.backgroundSecondary,
    padding: 10,
    borderRadius: 10,
  },
  picture: {
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: MainColors.backgroundTertiary,
  },
});
