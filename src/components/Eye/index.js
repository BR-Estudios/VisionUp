import { TouchableOpacity } from "react-native"
import { styles } from "./styles";
import { useGame } from "../../contexts/gameContext"
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../theme";
import { STRINGS } from "../../utils/strings";

export default function eye({ incrementVPs }) {
  const { game, setGame } = useGame();

  return (
    <TouchableOpacity
      accessibilityLabel={STRINGS.accessibilityLabel.eye}
      accessibilityHint={STRINGS.accessibilityHint.eye(game.forClick)}
      accessibilityRole="button"
      style={styles.container}
      activeOpacity={0.5}
      onPress={() => incrementVPs()}
    >
      <Entypo name="eye" size={100} color={colors.green} />
    </TouchableOpacity>
  )
}