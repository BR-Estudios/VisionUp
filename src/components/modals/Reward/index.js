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
import { STRINGS } from "../../../utils/strings";

export default function Reward({ visible, onClose, reward }) {
  const { game, setGame } = useGame();

  const collectReward = async () => {
    setGame({ ...game, vps: game.vps + reward });

    ToastAndroid.show(STRINGS.alert.collectReward(reward), ToastAndroid.SHORT);
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
                accessibilityLabel={STRINGS.accessibilityLabel.closeScreen}
                accessibilityHint={STRINGS.accessibilityHint.closeScreen}
                accessibilityRole="button"
                activeOpacity={0.6}
                style={styles.closeButton}
                onPress={onClose}
              >
                <Ionicons name="close" size={28} color={colors.foreground} />
              </TouchableOpacity>

              <Text style={styles.title}>{STRINGS.interface.reward.title}</Text>

              <Text style={styles.message}>
                {STRINGS.interface.reward.message}
                <Text style={styles.reward}>{STRINGS.interface.reward.reward(reward)}</Text>
              </Text>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                onPress={collectReward}
              >
                <Text style={styles.textButton}>{STRINGS.interface.reward.buttonCollect}</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
