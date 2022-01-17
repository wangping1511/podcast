<template>
  <div class="mx-6 mb-5">
    <div class="flex justify-between">
      <p class="text-lg font-medium dark:text-white">今日推荐</p>
      <a class="text-primary text-xs self-end">往日推荐</a>
    </div>
    <div v-for="item in list" :key="item.id" class="flex mt-2 mb-3">
      <div class="flex-none">
        <img class="rounded h-20 w-20" :src="item.coverImg"  alt=""/>
      </div>
      <div class="ml-4 flex flex-col justify-between">
        <div>
          <p class="text-xs text-secondary font-medium">{{ item.programmeName }}</p>
          <p class="dark:text-white overflow-hidden text-sm" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
            {{ item.title }}
          </p>
        </div>
        <div class="flex items-center">
          <div class="h-5 w-5 rounded-full bg-basicWhite dark:bg-basicBlack flex justify-center items-center">
            <i-bi-play-fill class="text-primary text-sm" />
          </div>
          <p class="ml-2 text-xs text-secondary">{{ item.duration }} 分钟</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {PropType} from 'vue'
import { SingleEpisodeProp } from '../../../mock/SingleEpisodeData'

defineProps({
  list: {
    type: Array as PropType<SingleEpisodeProp[]>,
    required: true
  }
})
</script>

<style scoped>

</style>
