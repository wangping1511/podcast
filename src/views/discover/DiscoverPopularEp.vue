<template>
  <div>
    <div class="flex justify-between mx-5">
      <p class="text-xl font-medium dark:text-white">热门单集</p>
      <a class="text-primary text-sm self-end">查看更多</a>
    </div>
    <div class="mt-1">
      <div class="h-60 flex flex-wrap flex-col overflow-x-scroll scrollbar-hide pl-5">
        <div v-for="(item, index) in list" :key="item.id"
             class="h-16 my-1 flex items-center text-sm dark:text-white"
             :class="(index === list.length - 1 ? ' w-[23.125rem] pr-5' : ' w-[21.875rem]') + (index > 2 ? ' ml-3' : '')"
          @click="$router.push('/single-episode-detail/' + item.id)">
          <img class="w-15 h-15 rounded" :src="item.coverImg">
          <p class="px-4 font-medium">{{ index + 1 }}</p>
          <div>
            <p>{{ item.title }}</p>
            <p class="text-xs text-secondary">{{ item.createTime}} · {{ item.duration }} 分钟</p>
          </div>
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
      required: true,
      type: Array as PropType<SingleEpisodeProp[]>
    }
  })
</script>

<style scoped>

</style>
