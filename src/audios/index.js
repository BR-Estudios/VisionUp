import { Audio } from "expo-av";

const sounds = {};
// let bgmSound = null;

export async function playEffect(key, asset) {
  try {
    if (!sounds[key]) {
      const { sound } = await Audio.Sound.createAsync(asset, { shouldPlay: false });
      sounds[key] = sound;
    }

    const sound = sounds[key];
    await sound.setPositionAsync(0); // volta pro início
    await sound.playAsync();
  } catch (e) {
    console.warn("Erro ao tocar efeito:", e);
  }
}

export async function playBgm(asset) {
  try {
    if (bgmSound) {
      await bgmSound.stopAsync();
      await bgmSound.unloadAsync();
    }

    const { sound } = await Audio.Sound.createAsync(asset, {
      isLooping: true,
      shouldPlay: true,
    });

    bgmSound = sound;
  } catch (e) {
    console.warn("Erro ao iniciar BGM:", e);
  }
}

export async function stopBgm() {
  if (bgmSound) {
    await bgmSound.stopAsync();
  }
}

export async function unloadAll() {
  for (const key in sounds) {
    await sounds[key].unloadAsync();
  }
  if (bgmSound) await bgmSound.unloadAsync();
}