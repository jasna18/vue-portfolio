<template>
  <section
    id="hero"
    :style="{
      backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col md:flex-row items-center justify-between 
           px-4 md:px-16 py-8 transition-colors duration-500 gap-8 md:gap-x-12"
  >

    <!-- Text Section -->
    <div
      class="flex-1 text-center md:text-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-md 
            p-6 rounded-xl md:rounded-xl shadow-lg w-full max-w-md mt-12 mb-4"
      :class="[
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <h4 class="text-lg  md:text-3xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
      <p class="text-base md:text-md leading-relaxed md:px-2 m-0">
        "Developing intelligent, responsive, and <br />
        reliable applications by blending design, <br />
        logic, and hands-on coding expertise"
      </p>
    </div>

    <!-- Image Section -->
    <div class="flex-1 flex justify-center" ref="content">
      <img
        :src="girlSittingImg"
        alt="Typing code illustration"
        class="w-48 sm:w-64 md:w-80 lg:w-[28rem] xl:w-[36rem] rounded-xl bg-transparent content-wrapper"
        :class="{ 'animate-in': isVisible }"
      />
    </div>
  </section>
</template>

<script setup>
import { darkMode } from '../../data/darkMode.js';
import { ref, onMounted } from 'vue';
import girlSittingImg from '../../assets/girl-sitting.png';

const isVisible = ref(false);
const content = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of hero is visible
  );

  if (content.value) {
    observer.observe(content.value);
  }
});
</script>
<style>
/* CONTENT HIDDEN */
.content-wrapper {
  transform: translateY(40px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;
}
</style>