import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { styles } from "./styles.js";
import { Entypo } from "@expo/vector-icons";
import { useGame } from "../contexts/gameContext.js";
import Upgrades from "../components/modals/Upgrades/index.js";
import { colors } from "../theme";
import Reward from "../components/modals/Reward";
import Tabs from "../components/Tabs/index.js";
import Eye from "../components/Eye/index.js";
import Header from "../components/Header/index.js";
import { useHome } from "../hooks/useHome/index.js";

export default function Home() {
  const { game, setGame } = useGame();
  const { visibleUpgrades, visibleInfo, visibleSettings, showReward, reward, incrementVPs, openUpgrades, openInfo, openSettings, close } = useHome();

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
