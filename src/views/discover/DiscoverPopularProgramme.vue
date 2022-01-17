<template>
  <div class="mb-5">
    <div class="mx-6 flex justify-between">
      <p class="text-lg font-medium dark:text-white">热门节目</p>
      <a class="text-primary text-xs self-end">查看更多</a>
    </div>
    <div class="mt-3 flex overflow-x-scroll scrollbar-hide">
      <div v-for="(item, index) in list"
           :class="(index === 0 ? 'ml-6' : '') + (index === list.length - 1 ? 'mr-6' : '')"
           class="ml-2">
        <div class="h-42 w-42 bg-primary rounded"></div>
        <div class="dark:text-white">
          <p>{{ item.name }}</p>
          <p>{{ item.author }}</p>
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
