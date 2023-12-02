import { useAppSelector } from "../reducers";
import { StyleSheet, Text, View } from "react-native";
import MainColors from "../style/MainColors";
import MainStyle from "../style/MainStyle";

export default function TopBar() {
  const username = useAppSelector((state) => state.user.username);
  return (
    <View style={componentStyle.topBar}>
      <Text style={MainStyle.largeText}>{username}</Text>
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
  picture:{
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: MainColors.backgroundTertiary
  }
});
