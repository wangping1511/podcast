<template>
  <div class="mb-5">
    <div class="flex dark:text-white overflow-x-scroll scrollbar-hide pl-5">
      <div class="flex overflow-visible">
        <div v-for="(item, index) in list" class="w-[21.875rem] flex-none flex flex-col justify-between"
             :class="index === list.length - 1 ? 'mr-5' : ' mr-3'">
          <div>
            <p class="text-xs font-medium text-primary">精选</p>
            <p class="pr-2 text-base">{{ item.title }}</p>
          </div>
          <div class="mt-1 rounded bg-primary w-full h-42"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { PropType } from 'vue'
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
