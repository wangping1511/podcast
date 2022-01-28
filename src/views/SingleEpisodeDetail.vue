<template>
  <div>
    <div ref="divRef" class="pb-5">
      <div class="pt-15">
        <div class="w-full fixed h-12 top-0" :class="y>200 ? 'dark:bg-[#141414] bg-white shadow' : ''">
          <div class="h-full flex justify-between items-center mx-3">
            <div class="bg-black bg-opacity-20 h-7 w-7 flex items-center rounded-full" @click="$router.back()">
              <i-uil-angle-left-b class="text-xl text-white"></i-uil-angle-left-b>
            </div>
            <p v-if="y > 200" class="dark:text-white w-60 truncate text-base">{{ ep.title }}</p>
            <div class="bg-black bg-opacity-20 h-7 w-7 flex items-center justify-center rounded-full" :class="y > 200 ? 'text-primary': 'text-white'">
              <i-uil-plus v-if="false" class="text-xl"></i-uil-plus>
              <i-uil-check v-else class="text-xl"></i-uil-check>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center" :class="light === 1 ? 'text-white' : ''">
          <img ref="imgRef" class="bg-primary h-45 w-45 rounded-md shadow-2xl" :src="ep.coverImg" crossorigin="anonymous">
          <p class="text-xs text-secondary mt-2">{{ ep.createTime }}</p>
          <p class="px-4 text-md font-medium mt-2 text-center">{{ ep.title }}</p>
          <p class="px-4 text-xs mt-2 text-center">{{ ep.programmeName }} ></p>
          <div class="flex items-center justify-center w-60 h-10 rounded-lg mt-4 dark:bg-[#161616] bg-[#E1E1E1] bg-opacity-80 text-primary" @click.stop="play(ep.id)">
            <i-bi-pause-fill v-if="playerStore.epId === ep.id && playerStore.play"  class="text-primary text-xl" />
            <i-bi-play-fill v-else class="text-primary text-xl" />
            <p v-if="playerStore.epId === ep.id && playerStore.play" class="text-sm font-medium">暂停</p>
            <p v-else class="text-sm font-medium">播放</p>
          </div>
        </div>
      </div>
    </div>
    <div class="m-5 dark:text-white">
      <p class="text-sm whitespace-pre-line" v-html="ep.description"></p>
    </div>
  </div>
</template>

<script setup lang="ts" name="SingleEpisodeDetail">
import { SingleEpisodeProp, getOne } from '../../mock/SingleEpisodeData'
import ColorThief from './../../node_modules/colorthief/dist/color-thief.mjs'
import { usePlayerStore } from '@/store/player'
import emitter from '@/utils/mitter'

const route = useRoute()

const ep = <SingleEpisodeProp>getOne(Number(route.params.id))


// 获取主要色调
const imgRef = ref<HTMLImageElement>()
const divRef = ref<HTMLDivElement>()
let bgColor: Array<number>;
let colorHex: string
onMounted(() => {
  const colorThief = new ColorThief();
  if (imgRef.value) {
    if (imgRef.value.complete) {
      bgColor = colorThief.getColor(imgRef.value)
      colorHex = "#" + ((1 << 24) + (bgColor[0] << 16) + (bgColor[1] << 8) + bgColor[2]).toString(16).slice(1)
      divRef.value.style.setProperty('background-image', 'linear-gradient(' + colorHex +', #E1E1E1)')
    } else {
      imgRef.value.addEventListener('load', function() {
        bgColor = colorThief.getColor(imgRef.value)
        colorHex = "#" + ((1 << 24) + (bgColor[0] << 16) + (bgColor[1] << 8) + bgColor[2]).toString(16).slice(1)
        divRef.value.style.setProperty('background-image', 'linear-gradient(' + colorHex +', #E1E1E1)')
      });
    }
  }
})

// 获取颜色 暗色 还是 亮色
const light = computed<Number>(() => {
  if (bgColor) {
    const grayLevel = bgColor[0] * 0.299 + bgColor[1] * 0.587 + bgColor[2] * 0.114;
    if (grayLevel >= 192) {
      return 0
    } else {
      return 1
    }
  }
  return 0
})

const { y } = useWindowScroll()

const playerStore = usePlayerStore()

const play = (epId: number) => {
  emitter.emit('play', epId)
}
</script>

<style scoped>

</style>
