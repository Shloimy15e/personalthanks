<template>
  <div
    class="flex h-screen justify-center items-end overflow-visible bg-cyan-700 pb-4"
  >
    <router-link to="/main" class="w-fit h-fit">
      <div class="doorframe w-fit h-[90vh]" tabindex="0">
        <div class="door h-full">
          <img src="/images/door.jpg" alt="door" class="w-auto h-full" />
        </div>
        <div class="door2 h-full">
          <img
            src="/images/door.jpg"
            alt="door"
            class="w-auto h-full transform scale-x-[-1]"
          />
        </div>
      </div>
      </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.doorframe,
.doorframe2 {
  /* 1 */
  display: flex;
  /* 2 */
  perspective: 1200px;
  /* 3 */
  transform-style: preserve-3d;

  background-image: url("/images/doorframe.jpg");
  background-size: cover;
}

.door {
  /* 1 */
  flex-grow: 1;
  /* 3 */
  transform-style: preserve-3d;
  /* 4 */
  transform-origin: left center;
  /* 4 */
  transition: all 1.5s;
  /* 5 */
  backface-visibility: visible;
  /* 6 */
  position: relative;
}

.door2 {
  /* 1 */
  flex-grow: 1;
  /* 3 */
  transform-style: preserve-3d;
  /* 4 */
  transform-origin: right center;
  /* 4 */
  transition: all 1.5s;
  /* 5 */
  backface-visibility: visible;
  /* 6 */
  position: relative;
}

.door:before,
.door2:before {
  /* 6 */
  content: "";
  /* 6 */
  position: absolute;
  /* 6 */
  top: 0;
  /* 6 */
  left: 0;
  /* 6 */
  right: 0;
  /* 6 */
  bottom: 0;
  /* 7 */
  backface-visibility: hidden;
  /* 7 */
  transform-style: preserve-3d;
  /* 7 */
  transform: rotateY(180deg);
}

.doorframe:focus .door {
  /* 8 */
  transform: rotate3d(0, 1, 0, -130deg);
}

.doorframe:focus .door2 {
  /* 8 */
  transform: rotate3d(0, 1, 0, 130deg);
}
</style>
