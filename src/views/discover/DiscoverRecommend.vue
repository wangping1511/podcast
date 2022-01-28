<template>
  <div class="mx-5 mb-5">
    <div class="flex justify-between">
      <p class="text-xl font-medium dark:text-white">今日推荐</p>
      <a class="text-primary text-sm self-end">往日推荐</a>
    </div>
    <div v-for="item in list" :key="item.id" class="flex mt-2 mb-3" @click="$router.push('/single-episode-detail/' + item.id)">
      <div class="flex-none">
        <img class="rounded h-21 w-21" :src="item.coverImg"  alt=""/>
      </div>
      <div class="ml-4 flex flex-col justify-between w-full">
        <div>
          <p class="text-xs text-secondary font-medium">{{ item.programmeName }}</p>
          <p class="dark:text-white overflow-hidden text-sm" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
            {{ item.title }}
          </p>
        </div>
        <div class="flex items-center">
          <div class="h-6 w-6 rounded-full bg-basicWhite dark:bg-basicBlack flex justify-center items-center bg-opacity-50"
               @click.stop="play(item.id)">
            <i-bi-pause-fill  v-if="playerStore.epId === item.id && playerStore.play" class="text-primary text-sm" />
            <i-bi-play-fill v-else class="text-primary text-sm" />
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
import emitter from '@/utils/mitter'
import { usePlayerStore } from '@/store/player'

defineProps({
  list: {
    type: Array as PropType<SingleEpisodeProp[]>,
    required: true
  }
})

const play = (id: number) => {
  emitter.emit('play', id)
}

const playerStore = usePlayerStore()
</script>

<style scoped>

</style>
