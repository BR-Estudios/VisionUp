import { StyleSheet } from "react-native";
import { colors } from "../../theme";

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
  upgradeButton: {
    backgroundColor: colors.currentLine,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  upgradeButtonDisabled: {
    backgroundColor: "#222",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  upgradeName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.foreground,
  },
  upgradeDesc: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 4,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  upgradeCost: {
    fontSize: 14,
    color: colors.green,
    marginTop: 6,
    fontWeight: "600",
  },
  upgradeLevel: {
    fontSize: 14,
    color: colors.yellow,
    marginTop: 6,
    fontWeight: "600",
  },
  visionPercentage: {
    fontSize: 14,
    color: colors.cyan,
    marginTop: 6,
    fontWeight: "600",
  },
  upgradeAction: {
    fontSize: 16,
    color: colors.orange,
    marginTop: 6,
    fontWeight: "600",
  },
});
