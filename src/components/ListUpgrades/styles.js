import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
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
  upgradeAction: {
    fontSize: 16,
    color: colors.orange,
    marginTop: 6,
    fontWeight: "600",
  },
});