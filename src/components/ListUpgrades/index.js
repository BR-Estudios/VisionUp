import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles.js";
import { useGame } from "../../contexts/gameContext.js";
import { STRINGS } from "../../utils/strings";

export default function ListUpgrades({ item, buy }) {
  const { game, setGame } = useGame();
  return (
    <TouchableOpacity
      style={
        game.vps >= item.levels[item.currentLevel].cost
          ? styles.upgradeButton
          : styles.upgradeButtonDisabled
      }
      activeOpacity={0.5}
      onPress={buy}
    >
      <Text style={styles.upgradeName}>{item.name}</Text>
      <Text style={styles.upgradeDesc}>{item.description}</Text>
      <Text style={styles.upgradeAction}>
        {item.levels[item.currentLevel].action.type ===
          "addClicks"
          ? STRINGS.interface.listUpgrades.addClicks(item.levels[item.currentLevel].action.value)
          : item.levels[item.currentLevel].action.type ===
            "addVpsOffline"
            ? STRINGS.interface.listUpgrades.vpsOffline(item.levels[item.currentLevel].action.value)
            : STRINGS.interface.listUpgrades.forSecond(item.levels[item.currentLevel].action.value)
        }
      </Text>
      <View style={styles.info}>
        <Text style={styles.upgradeCost}>
          {STRINGS.interface.listUpgrades.cost(item.levels[item.currentLevel].cost)}
        </Text>

        <Text style={styles.upgradeLevel}>
          {STRINGS.interface.listUpgrades.level(item.currentLevel, item.levels.length)}
        </Text>
      </View>
    </TouchableOpacity>
  )
}