import { StyleSheet } from "react-native";
import { colors } from "../../../theme";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "85%",
    height: "70%",
    backgroundColor: colors.background,
    borderRadius: 16,
    padding: 16,
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: colors.red,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.foreground,
    marginBottom: 16,
    textAlign: "center",
  },
  visionPercentage: {
    fontSize: 14,
    color: colors.cyan,
    marginTop: 6,
    fontWeight: "600",
  },
});
