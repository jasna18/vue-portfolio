<template>
  <section
    id="hero"
    :style="{
      // backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col md:flex-row items-center 
           px-2 md:px-16 py-8 transition-colors duration-500 gap-8 md:gap-2 overflow-x-hidden"
  >
  
   <div
      class="
        absolute right-0 top-0                                 /* Positioned at top-right of hero section */
        h-screen                                                /* FULL VIEWPORT HEIGHT */
        w-[5vw] md:w-[18vw]                                    /* DYNAMIC WIDTH based on viewport size */
        bg-orange-500                                          /* Orange background */
        flex items-center justify-center                       /* Center text visually */
        text-white font-bold uppercase                         /* Text styling: bold */
        z-40

        /* SLIDE-IN ANIMATION CLASSES */
        transform duration-1000 ease-out     /* Smooth transition for the slide */
        /* Start position is set by the isVisible class */
      "
      :class="{
          'translate-x-full': !isVisible, /* Start 100% off screen to the right */
          'translate-x-0': isVisible      /* End position (on screen) */
      }"
    >
      <span class="
          transform -rotate-90 origin-top-left                 
          absolute                                             
          top-0 left-0                                         
          h-full                                               
          w-full                                               
          flex items-center justify-center                     
          text-2xl md:text-3xl lg:text-4xl                     
          tracking-[0.25em]                                    
        ">
        Jasna M Naz
      </span>
    </div>



          <!-- left section -->
           <!-- this div for the text content wrapper, removed flex-1 to w-full -->
<div class="w-full flex flex-col md:text-left md:ml-4  items-center md:items-start p-4 md:p-8 min-w-0"> 
      
        <div class="text-xs md:text-md mb-2 mt-12 text-center  md:mb-4 md:ml-2 rounded-full justify-center
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-2 bg-white/30 text-[#000000]
              ">
        Ready to Innovate
      </div>
       <!-- bg-[#DDAA33] bg-[#6e9999] bg-[#74a5ca]  bg-[#669cc5]/5-->

      <div class="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300 md:ml-2 mb-8 mt-2 md:mt-0">
        Full Stack Developer
      </div>
      <!-- text section box -->
        <div
        class="w-full max-w-md bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
               p-6 md:px-6 rounded-xl shadow-lg md:ml-1"
        :class="[
          'transition-all duration-1000 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <h4 class="text-md md:text-2xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
        <p class="mt-3 mb-0 text-base md:text-md leading-relaxed break-words">
          "Developing intelligent, responsive, and <br />
          reliable applications by blending design,
          logic, and hands-on coding expertise"
        </p>
      </div>
         <!-- button section revised, removed flex-1 to w-full-->
<div class="w-full flex flex-row md:flex-row md:items-start  gap-6 pl-4 md:pl-0 ml-4 md:ml-2 mt-12 mb-2 md:justify-start justify-center">

      <div class="hidden sm:inline-block text-sm md:text-sm   tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
             Laravel      </div>
      <div class="hidden sm:inline-block text-sm md:text-sm  tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
             Codeigniter     </div>
      <div class="hidden sm:inline-block text-sm md:text-sm   tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-1 bg-white/30 text-[#000000]
               md:mb-6 ">
              Python      </div>
      <div class="hidden sm:inline-block text-sm md:text-sm tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-4 bg-white/30 text-[#000000]
               md:mb-6 ">
               Sql      </div>
      <div class="hidden sm:inline-block text-sm md:text-sm  tracking-wide rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-4 bg-white/30 text-[#000000]
               md:mb-6 ">
           Rest api     </div>
  </div>
</div>
<!-- right section removed flex-1 to w-full-->
    <div class="w-full md:w-3/2 flex justify-center min-w-0">
      <!-- <img ref="content"
        :src="girlSittingImg"
        alt="Typing code illustration"
        class="w-500 md:w-90 lg:w-[48rem] xl:w-[48rem] rounded-xl bg-transparent content-wrapper"
        :class="{ 'animate-in': isVisible }"
      /> -->
      <img 
    ref="content"
    :src="girlSittingImg"
    alt="Typing code illustration"
    class="w-full max-w-sm md:max-w-none md:w-96 lg:w-[48rem] xl:w-[48rem] 
           rounded-xl bg-transparent content-wrapper"
    :class="{ 'animate-in': isVisible }"
/>
    </div>


  </section>
</template>

<script setup>
import { darkMode } from '../../data/darkMode.js';
import { ref, onMounted,watch} from 'vue';
import girlSittingImg from '../../assets/girl-sitting.png';

const isVisible = ref(false);
const content = ref(null);

// Use watch to apply the background color to the entire body
watch(darkMode, (newVal) => {
  const bgColor = newVal ? '#1F2937' : '#A7C1A8';
  
  // Update global body style
  document.body.style.backgroundColor = bgColor;
}, { immediate: true }); // Runs immediately on component mount

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