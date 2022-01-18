<template>
  <subscription-list :list="list"></subscription-list>
</template>

<script setup lang="ts">
import SubscriptionList from '@/views/subscription/SubscriptionList.vue'
import { getRandomList } from '../../../mock/ProgrammeData'

let list = getRandomList(5)
</script>

<style scoped>

</style>
