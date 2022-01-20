<template>
  <div>
    <router-view v-slot="{ Component }">
      <nav-bar v-if="navBarVisibleFlag"></nav-bar>
      <keep-alive :exclude="['ProgrammeDetail']">
        <component :is="Component" :key="$route.name" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { useDark, useToggle } from '@vueuse/core'

/**
 * 自动切换主题
 */
const isDark = useDark()
const toggleDark = useToggle(isDark)

/**
 * 头部导航展示
 */
const hasNavBarRoute = [ 'Discover', 'Subscription', 'Me']
const route = useRoute()
const navBarVisibleFlag = computed(() => {
  if (route.name) {
    return hasNavBarRoute.indexOf(route.name.toString()) > -1;
  }
  return false
})
</script>
