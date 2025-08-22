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
    height: "40%",
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
  message: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
    textAlign: 'center',
    margin: 'auto',
  },
  reward: {
    fontSize: 14,
    color: colors.yellow,
    fontWeight: "600",
  },
  button: {
    width: "50%",
    height: "15%",
    backgroundColor: colors.comment,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: "auto",
  },
  textButton: {
    color: colors.foreground,
    fontWeight: 'bold',
    fontSize: 20,
  }
});
