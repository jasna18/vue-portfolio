<template>
  <!-- <div :class="darkMode ? 'bg-gray-900 text-white' : 'text-black'" class="transition-colors duration-500"> -->
  <!-- Navbar -->
   <!-- <header 
:class="headerClass" 
:style="{ backgroundColor: darkMode ? '#111827' : '#A7C1A8' }" 
class="fixed top-0 w-full z-10  transition-colors duration-500"> -->
<header 
 :class="headerClass" 
 class="fixed top-0 left-0 w-full z-10  transition-colors duration-500 
 sm:w-[calc(100vw-6rem)] md:w-[calc(100vw-18vw)] lg:w-[calc(100vw-14vw)]
 xl:w-[calc(100vw-16vw)]">

<div class="w-full flex justify-between mx-auto z-50 pl-4 
              md:w-5/6 md:max-w-7xl 
    md:mx-auto /* 🌟 RE-ADDED CENTERING 🌟 */">
  
  <nav 
  class="flex justify-between items-center py-3 w-full" 
  :class="{'scrolled-nav' :isScrolled }">
    <!-- Mobile menu button -->
    <button class="text-2xl md:hidden" @click="toggleMenu">☰</button>
    <!-- Navbar links -->
    <ul class="font-bold"
      :class="[
        menuOpen ? 'flex' : 'hidden',
        'md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-14 p-4 md:p-0 shadow md:shadow-none ml-auto mr-0 md:ml-auto md:mr-8'
      ]">
    <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            :class="{ 'active-link': $route.path === link.path }"
            @click="closeMenu"
          >
            {{ link.name }}
  </router-link>

      <!-- <li><a href="#hero" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Home</a></li>
      <li><a href="#about" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">About</a></li>
      <li><a href="#projects" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Projects</a></li>
      <li><a href="#contact" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Contact</a></li> -->
    </ul>

    <!-- Dark Mode Toggle -->
    <!-- <button @click="toggleDark" class="ml-4 text-2xl">
      {{ darkMode ? "🌙" : "☀️" }}
    </button> -->
  </nav>
</div>
</header>
<!-- </div> -->
</template>

<script setup>
import { menuOpen, toggleMenu, closeMenu, darkMode, toggleDark } from '../../data/darkMode.js';
import { ref, onMounted,computed,onBeforeMount} from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isScrolled = ref(false);


const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];
const headerClass = computed(() => ({
  "sm:bg-transparent": !isScrolled.value,
    "md:bg-transparent": !isScrolled.value,

  // "sm:bg-[#ECEBDE]": isScrolled.value,
    // "sm:bg-[#FAF6E3]": isScrolled.value,
  "sm:bg-[#E1E9C9]": isScrolled.value,
  "shadow-md": isScrolled.value,
  "sm:py-4": !isScrolled.value,
  
}));
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeMount(() => {
  window.removeEventListener("scroll", handleScroll);
});

  
</script>

<style>
nav a {
  color:black;
  transition: color 0.3s ease;
}
nav.scrolled-nav a{
  color:black !important;
}
nav a.active-link {
  color: #b94010; /* Tailwind's indigo-600 */
  font-weight: bold;
}
nav.scrolled-nav a.active-link {
  color:#e04318 !important;
}
  
</style>