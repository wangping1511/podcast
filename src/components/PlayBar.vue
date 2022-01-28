<template>
  <div v-show="playBarVisibleFlag" class="fixed bottom-0 w-full px-5.5 py-2 bg-gray-50 dark:bg-[#141414] shadow-md" @click="openPlayer">
    <div class="flex justify-between">
      <div class="flex items-center">
        <img v-if="playerStore.coverImg" class="h-12 w-12 rounded shadow-2xl" :src="playerStore.coverImg" alt="..." />
        <div v-else class="h-12 w-12 rounded shadow-2xl bg-primary flex items-center justify-center">
          <i-cib-google-podcasts  class="dark:text-white text-2xl text-white"></i-cib-google-podcasts>
        </div>
        <p class="w-50 font-medium text-base dark:text-white ml-4 truncate">{{ playerStore.epTitle }}</p>
      </div>
      <div class="flex items-center">
        <i-bi-play-fill v-if="!playerStore.play" @click.stop="playHandler(playerStore.epId)" class="text-primary text-2xl" />
        <i-bi-pause-fill v-else @click.stop="playHandler(playerStore.epId)" class="text-primary text-2xl" />
        <i-ic-round-forward-30 class="ml-2 text-primary text-2xl" />
      </div>
    </div>
  </div>
  <div v-show="playerVisibleFlag" class="fixed h-full w-full top-0 left-0 bg-white dark:bg-[#141414] pt-4 px-8 z-[1000] dark:text-white overflow-y-scroll"  >
    <div class="mx-auto text-center">
      <i-eva-arrow-ios-downward-outline class="text-secondary text-4xl" @click="closePlayer"></i-eva-arrow-ios-downward-outline>
    </div>
    <img v-if="playerStore.coverImg" class="mx-auto w-70 rounded shadow-2xl" :src="playerStore.coverImg" alt="..." />
    <div v-else class="mx-auto w-70 h-70 rounded shadow-2xl bg-primary flex items-center justify-center">
      <i-cib-google-podcasts  class="dark:text-white text-2xl text-white"></i-cib-google-podcasts>
    </div>
    <div class="mt-10 w-full h-1 rounded bg-[#E1E1E1] bg-opacity-40">
      <div class="w-[0%] h-1 bg-primary rounded" :style="'width: ' + currentTime/ duration*100 + '%'"></div>
    </div>
    <div class="flex justify-between text-secondary text-sm">
      <p>{{ currentTime }}</p>
      <p>{{ duration - currentTime }}</p>
    </div>
    <p class="mt-10 mx-auto text-center text-xl">{{ playerStore.epTitle }}</p>
    <p class="mx-auto text-center text-xl text-primary">{{ playerStore.programmeName }}</p>
    <div class="flex justify-between mx-6 items-center mt-6">
      <i-ic-round-replay-30 class="text-4xl"></i-ic-round-replay-30>
      <i-bi-play-fill v-if="!playerStore.play" @click.stop="playHandler(playerStore.epId)" class="text-6xl" />
      <i-bi-pause-fill v-else @click.stop="playHandler(playerStore.epId)" class="text-6xl" />
      <i-ic-round-forward-30 class="text-4xl" />
    </div>
    <audio ref="audioRef" src="https://m7.music.126.net/20220216232939/2bdb56dd0c281fbcb039093ef6071774/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/11843431414/b606/ef55/2ddf/73adebfe77d69db16caac2026a6a3979.mp3" hidden>

    </audio>
  </div>
</template>


<script setup lang="ts">
import emitter from '@/utils/mitter'
import { usePlayerStore } from '@/store/player'
import { SingleEpisodeProp, getOne } from '../../mock/SingleEpisodeData'
// 向上滚动显示播放条，向下隐藏 目前不稳定
const playBarVisibleFlag = ref(true)

let startY = 0;
const touchStartHandler = (e: TouchEvent) => {
  e.preventDefault(); //阻止默认事件（长按的时候出现复制）
  startY = window.scrollY
}

const scrollHandler = () => {
  const endY = window.scrollY
  const offset = startY - endY
  if (Math.abs(offset) > 100) {
    playBarVisibleFlag.value = offset >= 0
    startY = window.scrollY
  }
}

// 打开播放器
const playerVisibleFlag = ref(false)
const openPlayer = () => {
  playerVisibleFlag.value = true
  const bodyEl = document.querySelector('body')
  if (bodyEl) {
    bodyEl.style.position = 'fixed'
    bodyEl.style.top = '0'
    bodyEl.style.height = '100%'
    bodyEl.style.overflow = 'hidden'
  }
}
const closePlayer = () => {
  playerVisibleFlag.value = false
  const bodyEl = document.querySelector('body')
  if (bodyEl) {
    bodyEl.style.position = ''
    bodyEl.style.top = ''
    bodyEl.style.height = ''
    bodyEl.style.overflow = ''
  }
}

// 播放、暂停
const audioRef = ref<HTMLAudioElement>()
const currentTime = ref(0)
let duration = ref(0)
const playerStore = usePlayerStore()
const audioLoadEvent = () => {
  setInterval(() => {
    currentTime.value = Number(audioRef.value.currentTime.toFixed(0))
  }, 200)
}
const playHandler = (epId: number) => {
  if (audioRef.value) {
    if (playerStore.epId === epId) {
      playerStore.setPlay(!playerStore.play);
      playerStore.play ? audioRef.value.play() : audioRef.value.pause();
    } else {
      playerStore.setPlay(true);
      const playInfo = getOne(epId);
      if (playInfo)
        playerStore.setPlayInfo(playInfo);
      audioRef.value.load();
      audioRef.value.play();
    }
    if (playerStore.play) {
      duration.value = Number(audioRef.value.duration.toFixed(0))
      audioRef.value.addEventListener('play', audioLoadEvent)
    } else {
      audioRef.value.removeEventListener('play', audioLoadEvent)
    }
  }
}

onMounted(() => {
  window.addEventListener('touchstart', touchStartHandler)
  window.addEventListener('scroll', scrollHandler)
  emitter.on('play', playHandler)
})

onUnmounted(() => {
  window.removeEventListener('touchstart', touchStartHandler)
  window.removeEventListener('scroll', scrollHandler)
  emitter.off('play')
})
</script>
<style scoped>

</style>
