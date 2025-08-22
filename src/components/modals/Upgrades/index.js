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

export default function Upgrade({ visible, onClose }) {
  const { upgrades, setUpgrades } = useUpgrades();
  const { game, setGame } = useGame();

  const buyUpgrade = async (upgradeId) => {
    const upgrade = upgrades.find((u) => u.id === upgradeId);
    if (!upgrade) return;

    const level = upgrade.levels[upgrade.currentLevel];

    if (!level) {
      ToastAndroid.show(
        "Você chegou no nível máximo desta melhoria.",
        ToastAndroid.SHORT
      );
      return;
    }

    if (game.vps < level.cost) {
      Vibration.vibrate(300);
      ToastAndroid.show(
        "Você não tem VPs suficiente para essa melhoria.",
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
        newGame.vpsForClick += level.action.value;
      }
      if (level.action.type === "addVpsForSecond") {
        newGame.clickForSecond += level.action.value;
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

    ToastAndroid.show("Upgrade comprado!", ToastAndroid.SHORT);
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
                accessibilityLabel="Fechar tela"
                accessibilityRole="button"
                accessibilityHint="Toque para fechar a tela de melhorias."
                activeOpacity={0.6}
                style={styles.closeButton}
                onPress={onClose}
              >
                <Ionicons name="close" size={28} color={colors.foreground} />
              </TouchableOpacity>

              <Text style={styles.title}>MELHORIAS</Text>
              <FlatList
                data={upgrades.filter((u) => u.currentLevel < u.levels.length)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={
                      game.vps >= item.levels[item.currentLevel].cost
                        ? styles.upgradeButton
                        : styles.upgradeButtonDisabled
                    }
                    activeOpacity={0.5}
                    onPress={() => buyUpgrade(item.id)}
                  >
                    <Text style={styles.upgradeName}>{item.name}</Text>
                    <Text style={styles.upgradeDesc}>{item.description}</Text>
                    <Text style={styles.upgradeAction}>
                      {item.levels[item.currentLevel].action.type ===
                      "addClicks"
                        ? `+${
                            item.levels[item.currentLevel].action.value
                          } VPs por clique`
                        : item.levels[item.currentLevel].action.type ===
                          "addVpsOffline"
                        ? `+${
                            item.levels[item.currentLevel].action.value
                          } VPs por minuto se não estiver jogando`
                        : `+${
                            item.levels[item.currentLevel].action.value
                          } VPs por segundo`}
                    </Text>
                    <View style={styles.info}>
                      <Text style={styles.upgradeCost}>
                        Custo: {item.levels[item.currentLevel].cost}
                      </Text>
                      <Text style={styles.upgradeLevel}>
                        Nível: {item.currentLevel + 1}/{item.levels.length}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />

              <Text style={styles.visionPercentage}>
                Visão: {game.visionPercentage}%
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
