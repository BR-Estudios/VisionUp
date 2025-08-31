import { useEffect, useState } from "react";
import { Vibration, ToastAndroid } from "react-native";
import { STRINGS } from "../../utils/strings";
import { useGame } from "../../contexts/gameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playEffect } from "../../audios";

export function useHome() {
  const { game, setGame } = useGame();

  const [visibleUpgrades, setVisibleUpgrades] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [visibleSettings, setVisibleSettings] = useState(false);
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

        playEffect("click", require("../../../assets/audios/pop.mp3"));
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
    setGame({ ...game, vps: game.vps + game.forClick });

    ToastAndroid.show(
      STRINGS.alert.collectVps(game.forClick),
      ToastAndroid.SHORT
    );

    Vibration.vibrate(100);

    await playEffect("click", require("../../../assets/audios/pop.mp3"));
  };

  const openUpgrades = async () => {
    Vibration.vibrate(150);

    await playEffect("open", require("../../../assets/audios/open.wav"));

    setVisibleUpgrades(true);
  };

  const openInfo = () => {
    Vibration.vibrate(200);

    ToastAndroid.show(STRINGS.alert.unavailable, ToastAndroid.SHORT);

    setVisibleInfo(true);
  };

  const openSettings = () => {
    Vibration.vibrate(200);

    ToastAndroid.show(STRINGS.alert.unavailable, ToastAndroid.SHORT);

    setVisibleSettings(true);
  };

  const close = async (playSound = true) => {
    Vibration.vibrate(150);

    setVisibleUpgrades(false);
    setVisibleInfo(false);
    setVisibleSettings(false);
    setShowReward(false);

    if (playSound) {
      await playEffect("close", require("../../../assets/audios/close.wav"));
    }
  };

  return { visibleUpgrades, visibleInfo, visibleSettings, showReward, reward, incrementVPs, openUpgrades, openInfo, openSettings, close };
}