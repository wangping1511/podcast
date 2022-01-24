<template>
  <div>
    <router-view v-slot="{ Component }">
      <nav-bar v-if="navBarVisibleFlag"></nav-bar>
      <keep-alive :include="appStore.cacheViews">
        <transition name="fade">
          <component :is="Component" :key="$route.name" />
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store/app'

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

const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: none;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
