<template>
  <discover-featured :list="list"></discover-featured>
  <discover-recommend :list="list"></discover-recommend>
  <discover-popular-programme :list="programmeList"></discover-popular-programme>
  <discover-popular-ep :list="list2"></discover-popular-ep>
</template>

<script setup lang="ts">
import DiscoverRecommend from '@/views/discover/DiscoverRecommend.vue'
import DiscoverFeatured from '@/views/discover/DiscoverFeatured.vue'
import { getRandomList } from '../../../mock/SingleEpisodeData'
import { getRandomList as getProgrammeRandomList } from '../../../mock/ProgrammeData'
import DiscoverPopularProgramme from '@/views/discover/DiscoverPopularProgramme.vue'
import DiscoverPopularEp from '@/views/discover/DiscoverPopularEp.vue'

const list = getRandomList(3)
const programmeList = getProgrammeRandomList(6)
const list2 = getRandomList(9)

</script>

<style scoped>

</style>
