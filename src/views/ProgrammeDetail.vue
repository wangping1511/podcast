<template>
  <div class="pb-5" :style="'background-color: rgb(' + bgColor.join(',') +')'">
    <div class="pt-15">
      <div class="w-full fixed h-15 top-0">
        <div class="h-full flex justify-between mx-4 items-end">
          <div class="bg-[#878787] h-7 w-7 flex items-center rounded-full" @click="$router.back()">
            <i-uil-angle-left-b class="text-xl text-white"></i-uil-angle-left-b>
          </div>
          <div>
            <div class="bg-[#878787] h-7 w-7 flex items-center justify-center rounded-full">
              <i-uil-plus v-if="false" class="text-xl text-white"></i-uil-plus>
              <i-uil-check v-else class="text-xl text-white"></i-uil-check>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center" :class="light === 1 ? 'text-white' : ''">
        <img class="bg-primary h-45 w-45 rounded-md shadow-2xl" :src="programme.coverImg" crossorigin="anonymous">
        <p class="text-sm font-medium mt-2">{{ programme.name }}</p>
        <p class="text-xs text-secondary mt-2">{{ programme.author }}</p>
        <button class="w-60 h-10 rounded-lg mt-2 text-sm font-medium" :class="light === 1 ? 'bg-white text-black' : 'bg-basicBlack text-white'">最新单集</button>
        <p class="px-5 mt-3 text-xs">{{ programme.description }}</p>
      </div>
    </div>
  </div>
  <div class="px-5 pb-5 py-3 dark:text-white">
    <p class="text-xl font-medium">单集 {{light}}</p>
    <div v-for="item in epList" class="mb-4">
      <p class="text-xs text-secondary">{{ item.createTime }}</p>
      <p class="text-sm">{{ item.title }}</p>
      <p class="text-xs text-secondary">{{ item.description }}</p>
      <div class="flex items-center mt-2">
        <div class="h-5.5 w-5.5 rounded-full bg-basicWhite dark:bg-basicBlack flex justify-center items-center">
          <i-bi-play-fill class="text-primary text-sm" />
        </div>
        <p class="ml-2 text-xs text-primary">{{ item.duration }} 分钟</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="ProgrammeDetail">
import { ProgrammeProp, getOne } from '../../mock/ProgrammeData'
import { SingleEpisodeProp, getListByProgrammeId } from '../../mock/SingleEpisodeData'
import ColorThief from './../../node_modules/colorthief/dist/color-thief.mjs'
import {reactive} from "vue";

const route = useRoute()

const programme = <ProgrammeProp>getOne(Number(route.params.id))

const epList = <SingleEpisodeProp[]>getListByProgrammeId(Number(route.params.id))


// 获取主要色调
const bgColor = ref([])
onMounted(() => {
  const colorThief = new ColorThief();
  const img = document.querySelector('img');
  if (img) {
    if (img.complete) {
      bgColor.value = colorThief.getColor(img)
    } else {
      img.addEventListener('load', function() {
        bgColor.value = colorThief.getColor(img)
      });
    }
  }
})

// 获取颜色 暗色 还是 亮色
const light = computed<Number>(() => {
  if (bgColor) {
    const grayLevel = bgColor.value[0] * 0.299 + bgColor.value[1] * 0.587 + bgColor.value[2] * 0.114;
    if (grayLevel >= 192) {
      return 0
    } else {
      return 1
    }
  }
  return 0
})
</script>

<style scoped>

</style>
