import { View, Text } from "react-native";
import { styles } from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { useGame } from "../../contexts/gameContext.js";
import { colors } from "../../theme/index.js";
import { STRINGS } from "../../utils/strings/index.js";

export default function Header() {
  const { game, setGame } = useGame();
  return (
    <View style={styles.header}>
      <View style={styles.vpsContainer}>
        <Entypo
          accessibilityLabel={STRINGS.accessibilityLabel.vps(game.vps)}
          name="eye"
          size={40}
          color={colors.comment}
        />

        <Text importantForAccessibility="no" style={styles.vps}>
          {game.vps}
        </Text>
      </View>

      <Text style={styles.info}>{STRINGS.interface.header.forClick(game.forClick)}</Text>
      <Text style={styles.info}>{STRINGS.interface.header.forSecond(game.forSecond)}</Text>
    </View>
  )
}