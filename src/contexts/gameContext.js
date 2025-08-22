import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { gameData } from "../utils/game";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState(gameData);

  useEffect(() => {
    const loadGame = async () => {
      const data = await AsyncStorage.getItem("game");
      if (data) {
        const saved = JSON.parse(data);

        const merged = {
          ...gameData,
          ...saved,
        };

        setGame(merged);
      }
    };

    loadGame();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("game", JSON.stringify(game));
  }, [game]);

  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
