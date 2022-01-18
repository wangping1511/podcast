<template>
  <div class="px-5">
    <p class="text-xl font-medium dark:text-white">订阅节目</p>
    <div class="grid grid-cols-2 gap-2 py-3">
      <div v-for="item in list" :key="item.id" class="mb-2">
        <img class="rounded shadow-md"
             :src="item.coverImg"
             alt=""/>
        <p class="mt-1 text-sm dark:text-white">{{ item.name }}</p>
        <p class="text-xs text-secondary">更新于 9/12</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProgrammeProp } from '../../../mock/ProgrammeData'
import { PropType } from 'vue'

defineProps({
  list: {
    required: true,
    type: Array as PropType<ProgrammeProp[]>
  }
})
</script>

<style scoped>

</style>
