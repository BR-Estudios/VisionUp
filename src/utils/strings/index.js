export const STRINGS = {
  interface: {
    header: {
      forClick: (param) => `+${param} VPs por clique`,
      forSecond: (param) => `+${param} VPs por segundo`,
    },
    tabs: {
      upgrades: "Loja",
      info: "Info",
      settings: "Config",
      credits: "Créditos"
    },
    reward: {
      title: "Recompensa",
      message: "Enquanto estava inativo, você coletou",
      reward: (param) => `${param} VPs`,
      buttonCollect: "Coletar agora"
    },
    upgrades: {
      title: "Melhorias",
      visionPercentage: (param) => `Visão: ${param}%`,
    },
    listUpgrades: {
      addClicks: (param) => `+${param} VPs por clique`,
      vpsOffline: (param) => `+${param} VPs por minuto offline`,
      forSecond: (param) => `+${param} VPs por segundo`,
      cost: (param) => `Custa: ${param} VPs`,
      level: (param1, param2) => `Nível: ${param1}/${param2}`,
    },
  },
  accessibilityLabel: {
    vps: (param) => `Você tem ${param} VPs`,
    eye: "Olho",
    upgrades: "Loja de melhorias",
    info: "Informações do jogo",
    settings: "Configurações",
    closeScreen: "Fechar tela"
  },
  accessibilityHint: {
    eye: (param) => `Toque para ganhar +${param} VPs`,
    upgrades: "Toque para abrir a tela de melhorias",
    info: "Toque para abrir a tela de informações",
    settings: "Toque para abrir a tela de configurações",
    closeScreen: "Toque para voltar"
  },
  alert: {
    collectVps: (param) => `Você recebeu ${param} VPs`,
    unavailable: "Fiquei com preguiça e ainda não fiz essa tela!",
    collectReward: (param) => `Você coletou ${param} VPs`,
    insufficientVps: "Infelizmente você ainda não tem VPs suficiênte!",
    upgradePurchased: "Melhoria comprada com sucesso!",
  }
};
