export const upgradesData = [
  {
    id: "touch",
    name: "Tato",
    description: "Melhore sua percepção tátil para ganhar mais VPs por clique.",
    levels: [
      {
        cost: 100,
        action: {
          type: "addClicks",
          value: 1,
        },
      },
      {
        cost: 500,
        action: {
          type: "addClicks",
          value: 2,
        },
      },
      {
        cost: 1000,
        action: {
          type: "addClicks",
          value: 4,
        },
      },
      {
        cost: 1500,
        action: {
          type: "addClicks",
          value: 6,
        },
      },
      {
        cost: 2000,
        action: {
          type: "addClicks",
          value: 8,
        },
      },
      {
        cost: 2500,
        action: {
          type: "addClicks",
          value: 10,
        },
      },
      {
        cost: 3000,
        action: {
          type: "addClicks",
          value: 12,
        },
      },
      {
        cost: 3500,
        action: {
          type: "addClicks",
          value: 14,
        },
      },
      {
        cost: 4000,
        action: {
          type: "addClicks",
          value: 16,
        },
      },
      {
        cost: 4500,
        action: {
          type: "addClicks",
          value: 18,
        },
      },
    ],
    currentLevel: 0,
  },
  {
    id: "support",
    name: "Suporte",
    description:
      "Receba ajuda de amigos e familiares para ganhar mais VPs por segundo.",
    levels: [
      {
        cost: 1000,
        action: {
          type: "addVpsForSecond",
          value: 2,
        },
      },
      {
        cost: 1500,
        action: {
          type: "addVpsForSecond",
          value: 6,
        },
      },
      {
        cost: 2000,
        action: {
          type: "addVpsForSecond",
          value: 10,
        },
      },
      {
        cost: 2500,
        action: {
          type: "addVpsForSecond",
          value: 14,
        },
      },
      {
        cost: 3000,
        action: {
          type: "addVpsForSecond",
          value: 18,
        },
      },
      {
        cost: 3500,
        action: {
          type: "addVpsForSecond",
          value: 22,
        },
      },
      {
        cost: 4000,
        action: {
          type: "addVpsForSecond",
          value: 26,
        },
      },
      {
        cost: 4500,
        action: {
          type: "addVpsForSecond",
          value: 30,
        },
      },
      {
        cost: 5000,
        action: {
          type: "addVpsForSecond",
          value: 34,
        },
      },
      {
        cost: 5500,
        action: {
          type: "addVpsForSecond",
          value: 38,
        },
      },
    ],
    currentLevel: 0,
  },
  {
    id: "autonomy",
    name: "Autonomia",
    description:
      "Seja mais independente e colete mais VPs enquanto não está jogando.",
    levels: [
      {
        cost: 10000,
        action: {
          type: "addVpsOffline",
          value: 4,
        },
      },
      {
        cost: 10500,
        action: {
          type: "addVpsOffline",
          value: 10,
        },
      },
      {
        cost: 11000,
        action: {
          type: "addVpsOffline",
          value: 16,
        },
      },
      {
        cost: 11500,
        action: {
          type: "addVpsOffline",
          value: 22,
        },
      },
      {
        cost: 12000,
        action: {
          type: "addVpsOffline",
          value: 28,
        },
      },
      {
        cost: 12500,
        action: {
          type: "addVpsOffline",
          value: 34,
        },
      },
      {
        cost: 13000,
        action: {
          type: "addVpsOffline",
          value: 40,
        },
      },
      {
        cost: 13500,
        action: {
          type: "addVpsOffline",
          value: 46,
        },
      },
      {
        cost: 14000,
        action: {
          type: "addVpsOffline",
          value: 52,
        },
      },
      {
        cost: 14500,
        action: {
          type: "addVpsOffline",
          value: 58,
        },
      },
    ],
    currentLevel: 0,
  },
];
