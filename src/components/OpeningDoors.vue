<template>
  <div
    class="relative w-screen max-h-screen aspect-video m-auto overflow-visible"
  >
    <img
      src="/images/house-front.jpg"
      alt="house"
      class="h-full w-full object-cover object-center"
    />
    <router-link
      to="/foyer"
      class="w-[16vw] h-[37.5vw] left-[50.80%] top-[53.5%] absolute transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="doorframe w-full h-full" tabindex="0">
        <div class="door2 h-full z-10">
          <img
            src="/images/door2.jpg"
            alt="door"
            class="w-auto h-full"
          />
        </div>
      </div>
    </router-link>
  </div>
  <div
    class="absolute left-1/2 -translate-x-1/2 p-10 flex justify-center top-12"
  >
    <p
      class="text-center text-6xl text-black font-petitFormalScript p-3 bg-white bg-opacity-40 rounded-lg"
    >
      Tap to Enter
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.doorframe {
  /* 1 */
  display: flex;
  /* 2 */
  perspective: 1200px;
  /* 3 */
  transform-style: preserve-3d;

  background-image: url("/images/pink-foyer.jpg");
  background-size: cover;
  background-position: center;
}

@media (hover: none) and (pointer: coarse) {
  .doorframe .door {
    animation: openLeftDoor 1.5s forwards;
  }

  .doorframe .door2 {
    animation: openRightDoor 1.5s forwards;
  }
}

@keyframes openLeftDoor {
  to {
    transform: rotate3d(0, 1, 0, -130deg);
  }
}

@keyframes openRightDoor {
  to {
    transform: rotate3d(0, 1, 0, 130deg);
  }
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

@media (hover: hover) and (pointer: fine) {
  .doorframe:hover .door {
    /* 8 */
    transform: rotate3d(0, 1, 0, -130deg);
  }

  .doorframe:hover .door2 {
    /* 8 */
    transform: rotate3d(0, 1, 0, 130deg);
  }
}
</style>
