<script setup>
import HelloWorld from './components/HelloWorld.vue'
import router from './router';
</script>

<template>
  <div class="container">
    <router-view v-slot="{ Component }">
      <transition  name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">
.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-active {
  transition: opacity 0.15s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
