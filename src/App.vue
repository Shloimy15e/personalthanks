<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router';
</script>

<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">

.zoom-fade-leave-active {
  transition: opacity 3s ease, transform 3s ease;
}

.zoom-fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}


.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(1.65);
}
.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(1);
}

.zoom-fade-enter-to,
.zoom-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
