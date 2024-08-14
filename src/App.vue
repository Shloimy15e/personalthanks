<script>
export default {
  name: 'App',
}
</script>

<template>
  <div class="container min-w-full">
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">
.zoom-fade-leave-active {
  transition: opacity 3s ease, transform 3s ease;
}

.zoom-fade-enter-active {
  transition: opacity 0.5s ease, transform 0s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(1.5);
}
</style>
