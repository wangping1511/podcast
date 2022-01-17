<template>
  <div class="mb-5">
    <div class="flex dark:text-white overflow-x-scroll scrollbar-hide">
      <div v-for="(item, index) in list"
           :class="(index === 0 ? 'ml-5' : '' ) + (index === list.length -1 ? '' : ' mr-3')"
           class="w-[89.8%] flex-none flex flex-col justify-between">
        <div>
          <p class="text-xs font-medium text-primary">精选</p>
          <p class="pr-2 text-base">{{ item.title }}</p>
        </div>
        <div class="mt-1 rounded bg-primary w-full h-42"></div>
      </div>
      <div class="flex-none w-[1.2rem]"></div>
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
.scrollbar-hide::-webkit-scrollbar {
  display:none
}
.scrollbar-hide {
  -ms-overflow-style: none;
}
.scrollbar-hide {
  overflow: -moz-scrollbars-none;
}
</style>
