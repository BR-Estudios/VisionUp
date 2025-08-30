import { StyleSheet } from "react-native";
import { colors } from "../../theme";

export const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  tab: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleTab: {
    color: colors.foreground,
    fontSize: 20,
    textAlign: "center",
  },
});