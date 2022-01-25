<template>
  <subscription-list :list="list"></subscription-list>
</template>

<script setup lang="ts" name="Subscription">
import SubscriptionList from '@/views/subscription/SubscriptionList.vue'
import { getProgrammeList } from '@/api'

let list = ref()
getProgrammeList({ pageNum: 1, pageSize: 8 }).then(res => {
  list.value = res.list
})
</script>

<style scoped>

</style>
