<template>
  <div class="pb-5" :style="'background-color: rgb(' + bgColor.join(',') +')'">
    <div class="pt-15">
      <div class="w-full fixed h-12 top-0" :class="y>200 ? 'dark:bg-[#141414] bg-white shadow' : ''">
        <div class="h-full flex justify-between items-center mx-3">
          <div class="bg-black bg-opacity-20 h-7 w-7 flex items-center rounded-full" @click="$router.back()">
            <i-uil-angle-left-b class="text-xl text-white"></i-uil-angle-left-b>
          </div>
          <p v-if="y > 200" class="dark:text-white">{{ ep.title }}</p>
          <div>
            <div class="bg-black bg-opacity-20 h-7 w-7 flex items-center justify-center rounded-full" :class="y > 200 ? 'text-primary': 'text-white'">
              <i-uil-plus v-if="false" class="text-xl"></i-uil-plus>
              <i-uil-check v-else class="text-xl"></i-uil-check>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center" :class="light === 1 ? 'text-white' : ''">
        <img class="bg-primary h-45 w-45 rounded-md shadow-2xl" :src="ep.coverImg" crossorigin="anonymous">
        <p class="text-xs text-secondary mt-2">{{ ep.createTime }}</p>
        <p class="text-sm font-medium mt-2">{{ ep.title }}</p>
        <button class="w-60 h-10 rounded-lg mt-2 text-sm font-medium" :class="light === 1 ? 'bg-white text-black' : 'bg-basicBlack text-white'">播放</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="SingleEpisodeDetail">
import { SingleEpisodeProp, getOne } from '../../mock/SingleEpisodeData'
import ColorThief from './../../node_modules/colorthief/dist/color-thief.mjs'

const route = useRoute()

const ep = <SingleEpisodeProp>getOne(Number(route.params.id))


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

const { y } = useWindowScroll()
watch(y, () => {
  console.log(y.value);
})
</script>

<style scoped>

</style>
