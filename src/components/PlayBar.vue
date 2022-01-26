<template>
  <div v-show="playBarVisibleFlag" class="fixed bottom-0 w-full px-5.5 py-2 bg-gray-50 dark:bg-[#141414] shadow-md">
    <div class="flex justify-between">
      <div class="flex items-center">
        <img class="h-12 w-12 rounded shadow-2xl" src="https://imagev2.xmcdn.com/storages/1ffd-audiofreehighqps/D0/01/CMCoOScEHgXSAATUDQCQnxWC.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios" alt="..." />
        <p class="w-50 font-medium text-base dark:text-white ml-4 truncate">爱上你的卡绝对是拉萨大家爱上了多久啊是</p>
      </div>
      <div class="flex items-center">
        <i-bi-play-fill v-if="true" class="text-primary text-2xl" />
        <i-bi-pause-fill v-else class="text-primary text-2xl" />
        <i-ic-round-forward-30 class="ml-2 text-primary text-2xl" />
      </div>
    </div>
  </div>
<!--  <div class="fixed h-full w-full bottom-0 rounded-md"  @touchmove.prevent="">-->
<!--    <div class="w-full h-[10%] bg-transparent">-->

<!--    </div>-->
<!--    <div class="w-full h-full dark:bg-[#141414] bg-white">-->

<!--    </div>-->
<!--  </div>-->
</template>

<script setup lang="ts">
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
  if (Math.abs(offset) > 200) {
    playBarVisibleFlag.value = offset >= 0
    startY = window.scrollY
  }
}
onMounted(() => {
  window.addEventListener('touchstart', touchStartHandler)
  window.addEventListener('scroll', scrollHandler)

})

onUnmounted(() => {
  window.removeEventListener('touchstart', touchStartHandler)
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<style scoped>

</style>
