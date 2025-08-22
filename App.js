import Home from "./src/app";
import { GameProvider } from "./src/contexts/gameContext";
import { UpgradesProvider } from "./src/contexts/upgradesContext";

export default function App() {
  return (
    <GameProvider>
      <UpgradesProvider>
      <Home />
      </UpgradesProvider>
    </GameProvider>
  )
}