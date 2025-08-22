import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { upgradesData } from "../utils/upgrades";

const UpgradesContext = createContext();

export const UpgradesProvider = ({ children }) => {
  const [upgrades, setUpgrades] = useState(upgradesData);

  useEffect(() => {
    const loadUpgrades = async () => {
      const data = await AsyncStorage.getItem("upgrades");
      if (data) {
        const saved = JSON.parse(data);

        const merged = upgradesData.map((defaultUpgrade) => {
          const found = saved.find((u) => u.id === defaultUpgrade.id);
          return found
            ? { ...defaultUpgrade, currentLevel: found.currentLevel }
            : defaultUpgrade;
        });

        setUpgrades(merged);
      }
    };

    loadUpgrades();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("upgrades", JSON.stringify(upgrades));
  }, [upgrades]);

  return (
    <UpgradesContext.Provider value={{ upgrades, setUpgrades }}>
      {children}
    </UpgradesContext.Provider>
  );
};

export const useUpgrades = () => useContext(UpgradesContext);
