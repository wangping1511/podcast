<template>
  <div class="mb-5">
    <p class="ml-6 text-lg font-medium text-primary">精选播客</p>
    <div class="flex dark:text-white overflow-x-scroll scrollbar-hide">
      <div v-for="(item, index) in list"
           :class="(index === 0 ? 'ml-6' : '' ) + (index === list.length -1 ? ' mr-5' : '')"
           class="mr-3 w-[89%] flex-none flex flex-col justify-between">
        <p class="pr-2 text-base">{{ item.title }}</p>
        <div class="mt-1 rounded bg-primary w-full h-40"></div>
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
