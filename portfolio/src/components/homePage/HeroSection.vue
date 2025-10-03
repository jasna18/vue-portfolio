<template>
  <section
    id="hero"
    :style="{
      backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col md:flex-row items-center justify-around
           px-2 md:px-16 py-8 transition-colors duration-500 gap-8 md:gap-2"
  >
          <!-- left section -->
<div class="w-full flex flex-col items-center md:items-start text-center md:text-left md:ml-30">
      
        <div class="text-sm md:text-md mb-2 mt-12 tracking-wide rounded-full
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-4 bg-white/30 text-[#000000]
               md:mb-6 ">
        Ready to Innovate
      </div>
 <!-- bg-[#DDAA33] bg-[#6e9999] bg-[#74a5ca]  bg-[#669cc5]/5-->
    
      <div class="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8">
        Full Stack Developer
      </div>

        <div
        class="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
               p-6 md:px-6 rounded-xl shadow-lg w-full max-w-md
               md:ml-0"
        :class="[
          'transition-all duration-1000 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h4 class="text-lg md:text-2xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
        <p class="mt-3 mb-0 text-base md:text-md leading-relaxed">
          "Developing intelligent, responsive, and <br />
          reliable applications by blending design,
          logic, and hands-on coding expertise"
        </p>
      </div>
         <!-- button section -->
  <div class="w-full flex flex-col md:flex-row  items-center md:items-start text-center md:text-left gap-6">

      <div class="invisible md:visible md:text-sm mb-2 mt-12 tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
             Laravel      </div>
      <div class="invisible md:visible md:text-sm mb-2 mt-12 tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
             Codeigniter     </div>
      <div class="invisible md:visible md:text-sm mb-2 mt-12 tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
              Python      </div>
      <div class="invisible md:visible md:text-sm mb-2 mt-12 tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-4 bg-white/30 text-[#000000]
               md:mb-6 ">
               Sql      </div>
      <div class="invisible md:visible md:text-sm mb-2 mt-12 tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-4 bg-white/30 text-[#000000]
               md:mb-6 ">
           Rest       </div>
  </div>
</div>
<!-- right section -->
    <div class="w-full md:w-3/2 flex justify-center mt-8 md:mt-0">
      <img ref="content"
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