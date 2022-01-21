<template>
  <discover-featured :list="featuredList"></discover-featured>
  <discover-recommend :list="recommendList"></discover-recommend>
  <discover-popular-programme :list="programmeList"></discover-popular-programme>
  <discover-popular-ep :list="list2"></discover-popular-ep>
</template>

<script setup lang="ts" name="Discover">
console.log('index')
import DiscoverRecommend from '@/views/discover/DiscoverRecommend.vue'
import DiscoverFeatured from '@/views/discover/DiscoverFeatured.vue'
import { getRandomList } from '../../../mock/SingleEpisodeData'
import { getRandomList as getProgrammeRandomList } from '../../../mock/ProgrammeData'
import DiscoverPopularProgramme from '@/views/discover/DiscoverPopularProgramme.vue'
import DiscoverPopularEp from '@/views/discover/DiscoverPopularEp.vue'

const featuredList = getRandomList(6)
const recommendList = getRandomList(5)
const programmeList = getProgrammeRandomList(6)
const list2 = getRandomList(9)

</script>

<style scoped>

</style>
