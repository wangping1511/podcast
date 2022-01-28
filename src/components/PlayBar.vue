<template>
  <div v-show="playBarVisibleFlag" class="fixed bottom-0 w-full px-5.5 py-2 bg-gray-50 dark:bg-[#141414] shadow-md" @click="openPlayer">
    <div class="flex justify-between">
      <div class="flex items-center">
        <img v-if="playerInfo.coverImg" class="h-12 w-12 rounded shadow-2xl" :src="playerInfo.coverImg" alt="..." />
        <div v-else class="h-12 w-12 rounded shadow-2xl bg-primary flex items-center justify-center">
          <i-cib-google-podcasts  class="dark:text-white text-2xl text-white"></i-cib-google-podcasts>
        </div>
        <p class="w-50 font-medium text-base dark:text-white ml-4 truncate">{{ playerInfo.title }}</p>
      </div>
      <div class="flex items-center">
        <i-bi-play-fill v-if="!playerStore.play" class="text-primary text-2xl" />
        <i-bi-pause-fill v-else class="text-primary text-2xl" />
        <i-ic-round-forward-30 class="ml-2 text-primary text-2xl" />
      </div>
    </div>
  </div>
  <div v-show="playerVisibleFlag" class="fixed h-full w-full top-0 left-0 bg-white dark:bg-[#141414] pt-4 px-8 z-[1000] dark:text-white overflow-y-scroll"  >
    <div class="mx-auto text-center">
      <i-eva-arrow-ios-downward-outline class="text-secondary text-4xl" @click="closePlayer"></i-eva-arrow-ios-downward-outline>
    </div>
    <img v-if="playerInfo.coverImg" class="mx-auto w-70 rounded shadow-2xl" :src="playerInfo.coverImg" alt="..." />
    <div v-else class="mx-auto w-70 h-70 rounded shadow-2xl bg-primary flex items-center justify-center">
      <i-cib-google-podcasts  class="dark:text-white text-2xl text-white"></i-cib-google-podcasts>
    </div>
    <div class="mt-10 w-full h-1 rounded bg-[#E1E1E1] bg-opacity-40">
      <div class="w-[50%] h-1 bg-primary rounded"></div>
    </div>
    <div class="flex justify-between text-secondary text-sm">
      <p>12:21</p>
      <p>-30:80</p>
    </div>
    <p class="mt-10 mx-auto text-center text-xl">{{ playerInfo.title }}</p>
    <p class="mx-auto text-center text-xl text-primary">{{ playerInfo.programmeName }}</p>
    <div class="flex justify-between mx-6 items-center mt-6">
      <i-ic-round-replay-30 class="text-4xl"></i-ic-round-replay-30>
      <i-bi-play-fill v-if="!playerStore.play" class="text-6xl" />
      <i-bi-pause-fill v-else class="text-6xl" />
      <i-ic-round-forward-30 class="text-4xl" />
    </div>
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
  if (bodyEl)
    bodyEl.style.overflow = 'hidden'
}
const closePlayer = () => {
  playerVisibleFlag.value = false
  const bodyEl = document.querySelector('body')
  if (bodyEl)
    bodyEl.style.overflow = 'scroll'
}

// 播放、暂停
const playerStore = usePlayerStore()

const playerInfo = reactive({
  id: 0,
  coverImg: '',
  title: '暂无播放',
  programmeName: ''
})
const playHandler = (epId: number) => {
  if (playerStore.epId === epId) {
    playerStore.setPlay(!playerStore.play)
  } else {
    playerStore.setPlay(true)
    playerStore.setEpId(epId)
    const epInfo = getOne(epId)
    if (epInfo) {
      const { id, coverImg, title, programmeId, programmeName } = epInfo
      playerInfo.id = id;
      playerInfo.coverImg = coverImg
      playerInfo.title = title
      playerInfo.programmeName = programmeName
      playerStore.setProgrammeId(programmeId)
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
