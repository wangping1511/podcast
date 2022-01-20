<template>
	<div class="mt-8 mb-4 flex text-2xl mx-5 font-medium dark:text-white">
    <router-link to="/" class="mr-2" active-class="text-4xl">发现</router-link>
    <router-link to="/subscription" class="mr-2" active-class="text-4xl">订阅</router-link>
    <router-link to="/me" class="mr-2" active-class="text-4xl">我的</router-link>
	</div>
  <transition name="fade">
    <div v-if="y > 50" class="w-full py-2 text-center text-xl fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-basicBlack shadow-sm">
      <p class="dark:text-white">{{ $route.meta.title }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
