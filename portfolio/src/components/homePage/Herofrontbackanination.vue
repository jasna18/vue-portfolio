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
        bg-[#F68537]                                     /* Orange background */
        flex items-center justify-center                       /* Center text visually */
        text-white font-bold uppercase                         /* Text styling: bold */
        

        /* SLIDE-IN ANIMATION CLASSES */
        transform duration-1000 ease-out     /* Smooth transition for the slide */
        /* Start position is set by the isVisible class */
      "
    :class="{
          /* Default State: Off-Screen */
          'translate-x-full': !isBarHiddenBehindImage && !isBarVisible, 
          
          /* STEP 1: Slide behind the image (Intermediate Position, LOW Z-index) */
          'md:translate-x-[-18vw] z-30': isBarHiddenBehindImage && !isBarVisible, 
          
          /* STEP 2: Slide to final position (Final Position, HIGH Z-index) */
          /* translate-x-0 is the 'normal' position (right-0, no translation) */
          'translate-x-0 z-50': isBarVisible     
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
<div class="w-full md:w-4/2 flex flex-col md:text-left md:ml-4 items-center  p-4 md:p-8 min-w-0"> 
      
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
<div class="w-full flex flex-row md:flex-row md:items-start gap-5 pl-4 md:pl-0 ml-4 md:ml-2 mt-12 mb-2 md:justify-start justify-center">

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
      <!-- <img ref="content"
        :src="girlSittingImg"
        alt="Typing code illustration"
        class="w-500 md:w-90 lg:w-[48rem] xl:w-[48rem] rounded-xl bg-transparent content-wrapper"
        :class="{ 'animate-in': isVisible }"
      /> -->
      <!-- ref="content" → Vue ref, so you can access this element in your script (maybe for intersection observer to trigger animation). -->
   <div class="w-full md:w-3/2 flex justify-center min-w-0 z-40">
      <img 
    ref="content"
    :src="girlSittingImg"
    alt="Typing code illustration"
    class="w-full max-w-sm md:max-w-none md:w-100 lg:w-[48rem] xl:w-[48rem] 
           rounded-xl bg-transparent content-wrapper"
    :class="{ 'animate-in': isImageVisible }"
/>
    </div>


  </section>
</template>

<script setup>
import { darkMode } from '../../data/darkMode.js';
import { ref, onMounted,watch} from 'vue';
import girlSittingImg from '../../assets/girl-sitting.png';

// for intersection  observer in hero section animation for slide-in left text-box and image-girl sitting
// If isVisible === true, it adds the animate-in class.

// 1. Text Box (Controls slide-up) - TRUTH
const isVisible = ref(false);
//why using this ref? to observe when the image enters the viewport 
const content = ref(null);

//2.  NEW: State for the delayed image animation --delay 1
const isImageVisible = ref(false);

// 3. Vertical Bar (Controls slide-in) - DELAY 2
const isBarHiddenBehindImage = ref(false); // Step 1: Slide to halfway, behind image
const isBarVisible = ref(false); // Step 2: Slide to final position (in front)

const DURATION_BAR_STEP = 600; // Duration for each bar slide step


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
          }, 250); // <-- Delay the image start by 200 milliseconds
          
          // 3. Vertical Bar Step 1: Slide to the 'behind' position (Delay 2: 800ms)
          const step1StartDelay = 800;
          setTimeout(() => {
            isBarHiddenBehindImage.value = true;
          }, step1StartDelay);  

          // 4. Vertical Bar Step 2: Slide to the 'front' position (After Step 1 duration + 300ms pause)
          const step2StartDelay = step1StartDelay + DURATION_BAR_STEP + 300; 
          setTimeout(() => {
            isBarVisible.value = true;
          }, step2StartDelay);

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
  transform: translateY(-40px);
  opacity: 0;
  transition: all 1s ease-in-out;
}
.content-wrapper.animate-in {
  transform: translateY(0);
  opacity: 1;
}
</style>