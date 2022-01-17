<template>
	<div class="mt-8 mb-4 flex text-2xl mx-6 font-medium dark:text-white">
    <router-link to="/discover" class="mr-2" active-class="text-4xl">发现</router-link>
    <router-link to="/subscription" class="mr-2" active-class="text-4xl">订阅</router-link>
    <router-link to="/me" class="mr-2" active-class="text-4xl">我的</router-link>
	</div>
  <transition name="fade">
    <div v-if="titleBar" class="w-full py-2 text-center text-xl fixed inset-x-0 top-0 z-[1000] bg-white dark:bg-basicBlack">
      <p class="dark:text-white">{{ navList[$route.meta.index].title }}</p>
    </div>
  </transition>
</template>

<script setup lang="ts">
const navList = [
  {
    index: '0',
    title: '发现'
  },
  {
    index: 1,
    title: '订阅'
  },
  {
    index: 2,
    title: '我的'
  }
]

const titleBar = ref(false)

// 下滑展示标题
const scrollEvent = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  titleBar.value = scrollTop > 50;
}

onMounted(() => {
  window.addEventListener('scroll', scrollEvent);
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollEvent);
})
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
