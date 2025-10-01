<template>
    <section
  id="hero" ref="content"
  :style="{ backgroundColor: darkMode ? '#1F2937' : '#A7C1A8', color: darkMode ? 'white' : 'black' }"
  class="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 transition-colors duration-500 gap-x-12"
>

  <div class="flex-1 text-left bg-white/30 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md mt-4 mb-8 ml-40" :class="[
      'transition-all duration-1000 ease-out',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]">
    <h4 class="text-md md:text-3xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
    <p class="text-lg md:text-md">"Developing intelligent, responsive, and <br />
         reliable applications by blending design, <br />
       logic, and hands-on coding expertise"</p>
  </div>
  <div class="flex-1 flex justify-center">
        <img 
          :src="girlSittingImg"
          alt="Typing code illustration"
          class="w-64 sm:w-72 md:w-96 xl:w-[56rem] rounded-xl bg-transparent content-wrapper"
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