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
import { useGame } from "../../../contexts/gameContext";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "../../../theme";
import { playEffect } from "../../../audios";

export default function Reward({ visible, onClose, reward }) {
  const { game, setGame } = useGame();

  const collectReward = async () => {
    setGame({ ...game, vps: game.vps + reward });

    ToastAndroid.show(`Você coletou ${reward} VPs`, ToastAndroid.SHORT);
    await playEffect("collectReward", require("../../../../assets/audios/collectReward.mp3"));

    onClose(false);
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
                accessibilityHint="Toque para fechar a tela de recompensa."
                activeOpacity={0.6}
                style={styles.closeButton}
                onPress={onClose}
              >
                <Ionicons name="close" size={28} color={colors.foreground} />
              </TouchableOpacity>

              <Text style={styles.title}>COLETE AGORA</Text>

              <Text style={styles.message}>
                Enquanto não jogava, Você coletou{" "}
                <Text style={styles.reward}>{reward}</Text> VPs
              </Text>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={collectReward}
              >
                <Text style={styles.textButton}>Coletar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
