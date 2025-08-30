import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Vibration,
} from "react-native";
import { STRINGS } from "../utils/strings/index.js";
import { styles } from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { useGame } from "../contexts/gameContext.js";
import { playEffect } from "../audios/index.js";
import Upgrades from "../components/modals/Upgrades/index.js";
import { colors } from "../theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Reward from "../components/modals/Reward";
import Tabs from "../components/Tabs/index.js";
import Eye from "../components/Eye/index.js";
import Header from "../components/Header/index.js";

export default function Home() {
  const { game, setGame } = useGame();

  const [visibleUpgrades, setVisibleUpgrades] = useState(false);
  const [visibleSettings, setVisibleSettings] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [reward, setReward] = useState(0);

  useEffect(() => {
    let interval;

    if (game.forSecond > 0) {
      interval = setInterval(() => {
        setGame((prev) => ({
          ...prev,
          vps: prev.vps + prev.forSecond,
        }));

        playEffect("click", require("../../assets/audios/pop.mp3"));
      }, 1000);

      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [game.forSecond]);

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
      <StatusBar hidden />

<Header />
      
      <Eye incrementVPs={incrementVPs} />

<Tabs openUpgrades={openUpgrades} openInfo={openInfo} openSettings={openSettings} onClose={close} />

      <Upgrades visible={visibleUpgrades} onClose={close} />
      <Reward visible={showReward} onClose={close} reward={reward} />
    </View>
  );
}
