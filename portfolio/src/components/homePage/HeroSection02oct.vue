<template>
  <section
    id="hero"
    :style="{
      backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col md:flex-row items-center justify-between 
           px-2 md:px-16 py-8 transition-colors duration-500 gap-8 "
  >

  <div class="flex-1 w-auto absolute">ready to hjcdkjfgvblkfgnlgkhlk</div>
    <!-- Text Section -->
    <div
      class="flex-1 text-center md:text-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-md 
            p-6 md:px-6 rounded-xl md:rounded-xl shadow-lg w-full max-w-md mt-20 mb-20 md:mt-10 md:w-32 md:ml-[8rem]"
    :class="[
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <h4 class="text-lg  md:text-2xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
      <p class="mt-3 mb-0 text-base md:text-md leading-relaxed">
        "Developing intelligent, responsive, and <br />
        reliable applications by blending design, <br />
        logic, and hands-on coding expertise"
      </p>
    </div>

    <!-- Image Section -->
    <div class="flex-1 flex justify-center">
      <img  ref="content"
        :src="girlSittingImg"
        alt="Typing code illustration"
        class="w-500 md:w-96 lg:w-[48rem] xl:w-[48rem] rounded-xl bg-transparent content-wrapper"
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
// console.log(window.innerWidth);
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