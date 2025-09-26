<template>
  <div
   :class="darkMode ? 'bg-gray-900 text-white' : 'text-black'" class="transition-colors duration-500">
    
    <!-- Navbar -->
    <header :style="{ backgroundColor: darkMode ? '#111827' : '#A7C1A8' }" class="fixed top-0 w-full z-10">
      <nav class="flex justify-between items-center px-6 py-3">
        <!-- Mobile menu button -->
        <button class="text-2xl md:hidden" @click="toggleMenu">☰</button>

        <!-- Navbar links -->
        <ul
          :class="[
            menuOpen ? 'flex' : 'hidden',
            'md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-14 right-0 p-4 md:p-0 shadow md:shadow-none'
          ]">
          <li><a href="#hero" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Home</a></li>
          <li><a href="#about" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">About</a></li>
          <li><a href="#projects" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Projects</a></li>
          <li><a href="#contact" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Contact</a></li>
        </ul>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDark" class="ml-4 text-2xl">
          {{ darkMode ? "🌙" : "☀️" }}
        </button>
      </nav>
    </header>

    <!-- Hero Section -->
     <!-- <section
  id="hero"
  :style="{ backgroundColor: darkMode ? '#1F2937' : '#A7C1A8', color: darkMode ? 'white' : 'black' }"
  class="w-full h-screen flex flex-col justify-center items-start text-left px-8 md:px-16 transition-colors duration-500"
>
  <h1 class="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Haya 👩‍💻</h1>
  <p class="text-lg md:text-xl">Aspiring Doctor & Vue Developer</p>
</section> -->
<section
  id="hero"
  :style="{ backgroundColor: darkMode ? '#1F2937' : '#A7C1A8', color: darkMode ? 'white' : 'black' }"
  class="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 transition-colors duration-500 gap-x-12"
>
  <!-- Left side (Text) -->
  <!-- <div class="flex-1 text-left mb-10 md:mb-0 mt-8 md:mt-8">
    <h1 class="text-3xl md:text-5xl font-bold mb-8">Hi, I'm Haya 👩‍💻</h1>
    <p class="text-base md:text-xl mb-6">Aspiring Doctor & Vue Developer</p>

  </div> -->
  <div class="flex-1 text-left bg-white/30 dark:bg-gray-800/40 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md mt-8 mb-8">
    <h4 class="text-md md:text-3xl mb-4">Hi, I'm Jasna 👩‍💻</h4>
    <p class="text-lg md:text-md">"Developing intelligent, responsive, and reliable applications by blending design, logic, and hands-on coding expertise</p>
  </div>

  <!-- Right side (Glass Effect with Image + Hover Animation) -->
  <div class="flex-1 flex justify-center">
   
      <!-- <img 
        src="/src/assets/typing-laptop.png"
        alt="Typing code illustration"
        class="w-64 sm:w-72 md:w-96 lg:w-[28rem] rounded-xl "
      /> -->
  </div>
</section>



 
    <!-- About Section -->
    <section 
      id="about"
      :style="{ backgroundColor: darkMode ? '#1F2937' : '#bf9264', color: darkMode ? 'white' : 'black' }"
      class="w-full min-h-screen px-6 py-20 transition-colors duration-500"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <p class="text-lg md:text-xl">This is the about section...</p>
    </section>

    <!-- Projects Section -->
    <section 
      id="projects"
      :style="{ backgroundColor: darkMode ? '#1F2937' : '#D1D8BE', color: darkMode ? 'white' : 'black' }"
      class="w-full min-h-screen px-6 py-20 transition-colors duration-500"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div :style="{ backgroundColor: darkMode ? '#374151' : '#ffffff', color: darkMode ? 'white' : 'black' }" 
             class="p-6 rounded-xl shadow transition-colors duration-500">Project 1</div>
        <div :style="{ backgroundColor: darkMode ? '#374151' : '#ffffff', color: darkMode ? 'white' : 'black' }" 
             class="p-6 rounded-xl shadow transition-colors duration-500">Project 2</div>
        <div :style="{ backgroundColor: darkMode ? '#374151' : '#ffffff', color: darkMode ? 'white' : 'black' }" 
             class="p-6 rounded-xl shadow transition-colors duration-500">Project 3</div>
      </div>
    </section>

    <!-- Contact Section -->
    <section 
      id="contact"
      :style="{ backgroundColor: darkMode ? '#1F2937' : '#EEEFE0', color: darkMode ? 'white' : 'black' }"
      class="w-full min-h-screen flex flex-col justify-center items-center px-6 text-center transition-colors duration-500"
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
      <p class="text-lg md:text-xl">Email: haya@example.com</p>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const menuOpen = ref(false);
const darkMode = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}
function toggleDark() {
  darkMode.value = !darkMode.value;
  localStorage.setItem("darkMode", darkMode.value);
}
onMounted(() => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") darkMode.value = true;
});
</script>
