import { StyleSheet } from "react-native";
import MainColors from "./MainColors";

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    backgroundColor: MainColors.backgroundPrimary,
  },
  smallText: {
    color: MainColors.textPrimary,
    fontSize: 12,
  },
  mediumText: {
    color: MainColors.textPrimary,
    fontSize: 14,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    color: MainColors.textPrimary,
    backgroundColor: MainColors.backgroundTertiary,
    flexGrow: 1,
    borderRadius: 10,
    padding: 8,
  },
  buttonPrimary:{
    backgroundColor: MainColors.primary,
    padding: 10,
    borderRadius: 5
  },
  buttonPrimaryText:{
    color: MainColors.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  }
});

