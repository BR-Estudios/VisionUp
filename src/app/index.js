import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Vibration,
} from "react-native";
import { styles } from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useGame } from "../contexts/gameContext.js";
import { playEffect } from "../audios/index.js";
import Upgrades from "../components/modals/Upgrades/index.js";
import { colors } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reward from "../components/modals/Reward";

export default function Home() {
  const { game, setGame } = useGame();

  const [visibleUpgrades, setVisibleUpgrades] = useState(false);
  const [visibleSettings, setVisibleSettings] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [reward, setReward] = useState(0);

  useEffect(() => {
    let interval;

    if (game.clickForSecond > 0) {
      interval = setInterval(() => {
        setGame((prev) => ({
          ...prev,
          vps: prev.vps + prev.clickForSecond,
        }));

        playEffect("click", require("../../assets/audios/pop.mp3"));
      }, 1000);

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [game.clickForSecond]);

  useEffect(() => {
    const checkReward = async () => {
      const last = await AsyncStorage.getItem("lastOnline");

      if (last) {
        const now = Date.now();

        const minutes = Math.floor((now - last) / 60000);

        const reward = minutes * 1;
      }
    };

    checkReward();

    return () => {
      AsyncStorage.setItem("lastOnline", JSON.stringify(Date.now()));
    };
  }, []);

  const incrementVPs = async () => {
    setGame({ ...game, vps: game.vps + game.vpsForClick });

    ToastAndroid.show(
      `Você ganhou ${game.vpsForClick} VPs!`,
      ToastAndroid.SHORT
    );

    Vibration.vibrate(100);

    await playEffect("click", require("../../assets/audios/pop.mp3"));
  };

  const openUpgrades = async () => {
    Vibration.vibrate(150);

    await playEffect("open", require("../../assets/audios/open.wav"));

    setVisibleUpgrades(true);
  };

  const openInfo = () => {
    Vibration.vibrate(200);

    ToastAndroid.show("Indisponível!", ToastAndroid.SHORT);

    setVisibleInfo(true);
  };

  const openSettings = () => {
    Vibration.vibrate(200);

    ToastAndroid.show("Indisponível!", ToastAndroid.SHORT);

    setVisibleSettings(true);
  };

  const close = async (playSound = true) => {
    Vibration.vibrate(150);

    setVisibleUpgrades(false);
    setVisibleInfo(false);
    setVisibleSettings(false);
    setShowReward(false);

    if (playSound) {
      await playEffect("close", require("../../assets/audios/close.wav"));
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View style={styles.vpsContainer}>
          <Entypo
            accessibilityLabel={`Você tem ${game.vps} VPs`}
            name="eye"
            size={40}
            color={colors.comment}
          />

          <Text importantForAccessibility="no" style={styles.vps}>
            {game.vps}
          </Text>
        </View>

        <Text style={styles.info}>{`+${game.vpsForClick} VPs/clique`}</Text>
        <Text style={styles.info}>{`+${game.clickForSecond} VPs/segundo`}</Text>
      </View>

      <View style={styles.eyeContainer}>
        <TouchableOpacity
          accessibilityLabel="Olho"
          accessibilityHint={`Toque para ganhar +${game.vpsForClick} VPs`}
          accessibilityRole="button"
          style={styles.eye}
          activeOpacity={0.5}
          onPress={() => incrementVPs()}
        >
          <Entypo name="eye" size={100} color={colors.green} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          accessibilityLabel="Loja de melhorias"
          accessibilityRole="button"
          accessibilityHint="Toque para abrir a loja de melhorias"
          style={styles.tab}
          activeOpacity={0.6}
          onPress={openUpgrades}
        >
          <Entypo name="shop" size={40} color={colors.cyan} />
          <Text style={styles.titleTab}>Loja</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Informações do jogo"
          accessibilityRole="button"
          accessibilityHint="Toque para abrir as informações do jogo"
          style={styles.tab}
          activeOpacity={0.6}
          onPress={openInfo}
        >
          <Entypo name="info" size={40} color={colors.cyan} />
          <Text style={styles.titleTab}>Informações</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityLabel="Configurações"
          accessibilityRole="button"
          accessibilityHint="Toque para abrir as configurações"
          style={styles.tab}
          activeOpacity={0.6}
          onPress={openSettings}
        >
          <Entypo name="cog" size={40} color={colors.cyan} />

          <Text style={styles.titleTab}>Config</Text>
        </TouchableOpacity>
      </View>

      <Upgrades visible={visibleUpgrades} onClose={close} />
      <Reward visible={showReward} onClose={close} reward={reward} />
    </View>
  );
}
