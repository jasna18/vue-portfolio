<template>
  <section
    id="hero"
    :style="{
      // backgroundColor: darkMode ? '#1F2937' : '#A7C1A8',
      color: darkMode ? 'white' : 'black'
    }"
    class="w-full relative min-h-screen flex flex-col lg:flex-row items-center 
           px-2 md:px-16 py-8 transition-colors duration-500 lg:gap-6 md:gap-2 overflow-x-hidden
  ">
  
    <div
          class="
            absolute right-0 top-0                                 /* Positioned at top-right of hero section */
            h-screen                                                /* FULL VIEWPORT HEIGHT */
            w-[5vw] md:w-[18vw]                                    /* DYNAMIC WIDTH based on viewport size */
            bg-[#F68537]                                     /* Orange background */
            flex items-center justify-center                       /* Center text visually */
            text-white font-bold uppercase                         /* Text styling: bold */
            z-40                     

            /* SLIDE-IN ANIMATION CLASSES */
            transform duration-1000 ease-out     /* Smooth transition for the slide */
            /* Start position is set by the isVisible class */
          "
          :class="{
              'translate-x-full': !isBarVisible, /* Start 100% off screen to the right */
              'translate-x-0': isBarVisible      /* End position (slide onto the screen) */
          }"
        >
          <span class="
          vertical-text-mode /* Uses CSS writing-mode */
          /* 🌟 NEW: Add a top margin to push the text down by roughly 30% of the bar height (h-screen) */
          ml-[5vh] md:ml-[30vh]
          /* NO absolute, NO h-full, NO w-full - let flex center it */
          
          /* Text Styling */
        font-extrabold uppercase
          text-sm md:text-3xl lg:text-4xl tracking-[0.25em]                                    
        ">
        <span class="text-beige">Jasna</span> 
        <span class="text-gray-700">M Naz</span>  
      </span>
  </div>


          <!-- left section -->
           <!-- this div for the text content wrapper, removed flex-1 to w-full -->
<div class="w-full lg:w-1/2 flex flex-col md:text-left md:ml-4 items-center md:items-start p-4 md:p-8 min-w-0 sm:text-center"> 
      
        <div class="text-sm md:text-md mb-4 mt-12 text-center  md:mb-4 md:ml-2 rounded-full 
               dark:bg-gray-800/40 border border-white/10 backdrop-blur-md shadow-lg p-1 px-2 bg-white/30 text-[#000000]
              inset-shadow-lg shadow-orange-500/50">
        🌟 Ready to Innovate
      </div>

      <div class="text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-300 md:ml-2 mb-6 mt-2 md:mt-0">
        Full Stack Developer
        <AnimatedHeading />
      </div>
      <!-- text section box -->
  <div
        class="w-full max-w-md bg-white/30 dark:bg-gray-800/40 backdrop-blur-md
               p-6 md:px-6 rounded-xl shadow-lg md:ml-1 inset-shadow-sm shadow-orange-500/50"
        :class="[
          'transition-all duration-1000 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <!-- <h4 class="text-md md:text-2xl mb-4">Hi, I'm Jasna 👩‍💻</h4> -->
        <p class="text-md mt-3 mb-0  md:text-lg leading-relaxed break-words ">
          "Developing intelligent, responsive, and <br />
          reliable applications by blending design,
          logic, and hands-on coding expertise"
        </p>
      </div>


         <!-- button section revised, removed flex-1 to w-full-->
  <!-- <div class="w-full flex flex-row md:flex-row md:items-start gap-5 pl-4 md:pl-0 ml-4 md:ml-2 mt-12 mb-2 md:justify-start justify-center "> -->
<div class="w-full flex flex-row gap-5 sm:justify-center sm:mt-8 md:flex-row md:items-start md:justify-start md:pl-0 ml-2 md:ml-2 mt-12 mb-2 justify-center ">
      <DivComponent text="Laravel" width="px-1"/>
      <DivComponent text="Codeigniter" width="px-1"/>
      <DivComponent text="Python" width="px-1"/>
      <DivComponent text="Vuejs" width="px-4"/>
      <DivComponent text="sql" width="px-4"/>

  </div>
</div>

      <!-- ref="content" → Vue ref, so you can access this element in your script (maybe for intersection observer to trigger animation). -->
   <div class="w-full lg:w-1/2 flex justify-center min-w-0 sm:mt-8">
      <img 
    ref="content"
    :src="girlSittingImg"
    alt="Typing code illustration"
    class="w-full max-w-sm md:max-w-none md:w-96 sm:w-[48rem] lg:w-[48rem] xl:w-[48rem] 
           rounded-xl bg-transparent content-wrapper"
    :class="{ 'animate-in': isImageVisible }"
/>
    </div>


  </section>
</template>

<script setup>
import DivComponent from '../../composobles/DivComponent.vue';
import{ darkMode } from '../../data/darkMode.js';
import { ref, onMounted,watch} from 'vue';
import girlSittingImg from '../../assets/girl-sitting.png';
import AnimatedHeading from './AnimateHeading.vue';


// for intersection  observer in hero section animation for slide-in left text-box and image-girl sitting
// If isVisible === true, it adds the animate-in class.

// 1. Text Box (Controls slide-up) - TRUTH
     const isVisible = ref(false);

//2.  NEW: State for the delayed image animation --delay 1
     const isImageVisible = ref(false);

// 3. Vertical Bar (Controls slide-in) - DELAY 2
    const isBarVisible = ref(false);

//why using this ref? to observe when the image enters the viewport 
    const content = ref(null);

//explain this onMounted function
// This function is called when the component is mounted to the DOM
// It sets up an IntersectionObserver to watch the content element
// If the content is visible in the viewport, it adds the 'animate-in' class
//then triggers the slide-in animation for the left text-box and image
// then stops observing it to prevent repeated triggers
onMounted(() => {
    // Check if the content is visible in the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // 1. Text Box Animation (Immediate)
          isVisible.value = true;

          // 2. Girl Image Animation (Delayed by 1000ms)
          setTimeout(() => {
            isImageVisible.value = true;
          }, 300); // <-- Delay the image start by 200 milliseconds
          
          // 3. Vertical Bar Animation (Delay 2: 600ms)
          setTimeout(() => {
            isBarVisible.value = true;
          }, 600);
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
// Use watch to apply the background color to the entire body
watch(darkMode, (newVal) => {
  const bgColor = newVal ? '#1F2937' : '#A7C1A8';
  
  // Update global body style
  document.body.style.backgroundColor = bgColor;
}, { immediate: true }); // Runs immediately on component mount
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
/* Custom class to force vertical text */
/* NEW ROBUST CLASS: Uses writing-mode for reliable vertical text */
.vertical-text-mode {
  /* Forces text to flow top-to-bottom */
  writing-mode: vertical-lr !important;
  
  /* Ensures it uses the space correctly */
  text-orientation:mixed  !important;
  
  /* Ensures text doesn't wrap unexpectedly */
  white-space: nowrap; 
  
  /* Add z-index just in case for text layer */
  z-index: 60 !important; 
}
.text-beige {
  color: #F5F5DC !important; /* A light, standard beige */
}

</style>