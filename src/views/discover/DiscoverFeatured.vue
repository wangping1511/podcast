<template>
  <div class="mb-5">
    <div class="flex dark:text-white overflow-x-scroll scrollbar-hide pl-5">
      <div class="flex overflow-visible">
        <div v-for="(item, index) in list" class="w-[21.875rem] flex-none flex flex-col justify-between"
             :class="index === list.length - 1 ? 'mr-5' : ' mr-3'"
             @click="$router.push('/single-episode-detail/' + item.id)">
          <div>
            <p class="text-xs font-medium text-primary">精选</p>
            <p class="pr-2 text-base">{{ item.title }}</p>
          </div>
          <div class="mt-1 h-42 rounded overflow-hidden divItem">
            <img id="coverImg" :src="item.coverImg" alt="..." class="object-fill w-full" style="display: none" crossorigin="anonymous">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { PropType } from 'vue'
import { SingleEpisodeProp } from '../../../mock/SingleEpisodeData'
import ColorThief from './../../../node_modules/colorthief/dist/color-thief.mjs'

defineProps({
  list: {
    type: Array as PropType<SingleEpisodeProp[]>,
    required: true
  }
})

onMounted(() => {
  const colorThief = new ColorThief();

  const els = document.getElementsByClassName('divItem')
  for (let i = 0; i < els.length; i++) {
    const divEl = <HTMLDivElement>els[i]
    const imgEl = <HTMLImageElement>divEl.children[0]
    if (imgEl) {
      if (imgEl.complete) {
        divEl.style.backgroundColor = 'rgb(' + colorThief.getColor(imgEl).join(',') +')'
      } else {
        imgEl.addEventListener('load', function() {
          divEl.style.backgroundColor = 'rgb(' + colorThief.getColor(imgEl).join(',') +')'
        });
      }
    }
  }
})
</script>

<style scoped>
</style>
