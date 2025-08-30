import React, { useContext } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  ToastAndroid,
  Vibration,
} from "react-native";
import { useUpgrades } from "../../../contexts/upgradesContext";
import { useGame } from "../../../contexts/gameContext";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../../theme";
import { playEffect } from "../../../audios";
import { STRINGS } from "../../../utils/strings"
import ListUpgrades from "../../ListUpgrades";

export default function Upgrade({ visible, onClose }) {
  const { upgrades, setUpgrades } = useUpgrades();
  const { game, setGame } = useGame();

  const buyUpgrade = async (upgradeId) => {
    const upgrade = upgrades.find((u) => u.id === upgradeId);
    if (!upgrade) return;

    const level = upgrade.levels[upgrade.currentLevel];

    if (game.vps < level.cost) {
      Vibration.vibrate(300);
      ToastAndroid.show(
        STRINGS.alert.insufficientVps,
        ToastAndroid.SHORT
      );
      return;
    }

    setGame((prev) => {
      let newGame = {
        ...prev,
        vps: prev.vps - level.cost,
        visionPercentage: prev.visionPercentage + 1,
      };

      if (level.action.type === "addClicks") {
        newGame.forClick += level.action.value;
      }
      if (level.action.type === "addVpsForSecond") {
        newGame.forSecond += level.action.value;
      }
      if (level.action.type === "addVpsOffline") {
        newGame.vpsOffline += level.action.value;
      }

      return newGame;
    });

    setUpgrades((prev) =>
      prev.map((u) =>
        u.id === upgradeId
          ? {
            ...u,
            currentLevel: u.currentLevel + 1,
          }
          : u
      )
    );

    ToastAndroid.show(STRINGS.alert.upgradePurchased, ToastAndroid.SHORT);
    await playEffect(
      "upgrade",
      require("../../../../assets/audios/buyUpgrade.mp3")
    );
  };

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <TouchableOpacity
                accessibilityLabel={STRINGS.accessibilityLabel.closeScreen}
                accessibilityHint={STRINGS.accessibilityHint.closeScreen}
                accessibilityRole="button"
                activeOpacity={0.6}
                style={styles.closeButton}
                onPress={onClose}
              >
                <Ionicons name="close" size={28} color={colors.foreground} />
              </TouchableOpacity>

              <Text style={styles.title}>{STRINGS.interface.upgrades.title}</Text>
              <FlatList
                data={upgrades.filter((u) => u.currentLevel < u.levels.length)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ListUpgrades item={item} buy={() => buyUpgrade(item.id)} />}
              />

              <Text style={styles.visionPercentage}>
                {STRINGS.interface.upgrades.visionPercentage(game.visionPercentage)}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
