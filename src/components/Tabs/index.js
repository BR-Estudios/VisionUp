import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../theme/index.js";
import { STRINGS } from "../../utils/strings/index.js";

export default function Tabs({ openInfo, openSettings, openUpgrades, onClose }) {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        accessibilityLabel={STRINGS.accessibilityLabel.upgrades}
        accessibilityHint={STRINGS.accessibilityHint.upgrades}
        accessibilityRole="button"
        style={styles.tab}
        activeOpacity={0.6}
        onPress={openUpgrades}
      >
        <Entypo name="shop" size={40} color={colors.cyan} />
        <Text style={styles.titleTab}>{STRINGS.interface.tabs.upgrades}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityLabel={STRINGS.accessibilityLabel.info}
        accessibilityHint={STRINGS.accessibilityHint.info}
        accessibilityRole="button"
        style={styles.tab}
        activeOpacity={0.6}
        onPress={openInfo}
      >
        <Entypo name="info" size={40} color={colors.cyan} />
        <Text style={styles.titleTab}>{STRINGS.interface.tabs.info}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        accessibilityLabel={STRINGS.accessibilityLabel.settings}
        accessibilityHint={STRINGS.accessibilityHint.settings}
        accessibilityRole="button"
        style={styles.tab}
        activeOpacity={0.6}
        onPress={openSettings}
      >
        <Entypo name="cog" size={40} color={colors.cyan} />

        <Text style={styles.titleTab}>{STRINGS.interface.tabs.settings}</Text>
      </TouchableOpacity>
    </View>
  )
}