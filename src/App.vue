<template>
  <div>
    <router-view v-slot="{ Component }">
      <nav-bar v-if="navBarVisibleFlag"></nav-bar>
      <keep-alive :exclude="['ProgrammeDetail', 'SingleEpisodeDetail']">
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

const cacheComponents = ref<string[]>([])
/**
 *
 */
const router = useRouter()

let needCacheComponents = router.getRoutes()
    .filter(item => item.meta.keepAliveFlag)
    .map(item => {
      return item.name ? item.name.toString() : ''
    });
cacheComponents.value = needCacheComponents
watch(() => router.currentRoute.value, (to, from) => {

  // if (to.name === 'SingleEpisodeDetail' && from.name === 'ProgrammeDetail') {
  //   cacheComponents.value.push(from.name)
  // } else {
  //   cacheComponents.value = needCacheComponents
  // }
})
</script>
