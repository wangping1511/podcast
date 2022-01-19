<template>
  <div class="mb-5">
    <div class="mx-5 flex justify-between">
      <p class="text-xl font-medium dark:text-white">热门节目</p>
      <a class="text-primary text-sm self-end">查看更多</a>
    </div>
    <div class="mt-3 flex overflow-x-scroll scrollbar-hide pl-5">
      <div class="flex overflow-visible">
        <div v-for="(item, index) in list" :class="index === list.length - 1 ? 'mr-5' : 'mr-2'">
          <div class="h-[10.6875rem] w-[10.6875rem]">
            <router-link :to="{ name: 'ProgrammeDetail',  params: { id: item.id }}">
              <img :src="item.coverImg" alt="..." class="rounded"/>
            </router-link>
          </div>
          <div class="dark:text-white text-xs mt-1">
            <p>{{ item.name }}</p>
            <p class="text-secondary">{{ item.author }}</p>
          </div>
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
</style>
