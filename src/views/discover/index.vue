<template>
  <discover-featured :list="list"></discover-featured>
  <discover-recommend :list="list"></discover-recommend>
</template>

<script setup lang="ts">
import DiscoverRecommend from '@/views/discover/DiscoverRecommend.vue'
import DiscoverFeatured from '@/views/discover/DiscoverFeatured.vue'
import { getRandomList } from '../../../mock/SingleEpisodeData'

const list = getRandomList(3)
</script>

<style scoped>

</style>
