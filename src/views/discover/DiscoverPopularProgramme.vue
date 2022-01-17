<template>
  <div class="mb-5">
    <div class="mx-5 flex justify-between">
      <p class="text-lg font-medium dark:text-white">热门节目</p>
      <a class="text-primary text-sm self-end">查看更多</a>
    </div>
    <div class="mt-3 flex overflow-x-scroll scrollbar-hide">
      <div v-for="(item, index) in list"
           :class="(index === 0 ? 'ml-5' : '') + (index === list.length - 1 ? ' mr-5' : ' mr-3')">
        <div class="h-42 w-42 bg-primary rounded"></div>
        <div class="dark:text-white text-xs mt-1">
          <p>{{ item.name }}</p>
          <p class="text-secondary">{{ item.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ProgrammeProp } from '../../../mock/ProgrammeData'

defineProps({
  list: {
    type: Array as PropType<ProgrammeProp[]>,
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
