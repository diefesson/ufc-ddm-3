import { StyleSheet } from "react-native";
import MainColors from "./MainColors";

export default StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
    gap: 10,
    backgroundColor: MainColors.backgroundPrimary,
  },
  smallText: {
    color: MainColors.textPrimary,
    fontSize: 14,
  },
  mediumText: {
    color: MainColors.textPrimary,
    fontSize: 20,
  },
  largeText: {
    color: MainColors.textPrimary,
    fontSize: 24,
  },
  field: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 5,
  },
  textInput: {
    color: MainColors.textPrimary,
    backgroundColor: MainColors.backgroundTertiary,
    borderRadius: 8,
    padding: 8,
  },
  multilineTextInput:{
    color: MainColors.textPrimary,
    backgroundColor: MainColors.backgroundTertiary,
    borderRadius: 8,
    padding: 8,
    textAlignVertical: "top"
  },
  button:{
    textAlign: "center",
    padding: 10,
    borderRadius: 5
  },
  buttonText:{
    textAlign: "center",
    color: MainColors.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
  }
});

