import { StyleSheet } from "react-native";
import { colors } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  info: {
    color: colors.foreground,
    fontSize: 20,
  },
  vpsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  vps: {
    color: colors.foreground,
    fontSize: 40,
  },
  eyeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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
