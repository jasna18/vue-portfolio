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
        'md:flex flex-col md:flex-row gap-4 md:gap-8 absolute md:static top-14 p-4 md:p-0 shadow md:shadow-none ml-auto mr-100'
      ]">
      <li><a href="#hero" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Home</a></li>
      <li><a href="#about" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">About</a></li>
      <li><a href="#projects" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Projects</a></li>
      <li><a href="#contact" @click="closeMenu" class="font-bold" :class="darkMode ? 'text-white' : 'text-black'">Contact</a></li>
    </ul>

    <!-- Dark Mode Toggle -->
    <!-- <button @click="toggleDark" class="ml-4 text-2xl">
      {{ darkMode ? "🌙" : "☀️" }}
    </button> -->
  </nav>
</header>
</div>
</template>

<script setup>
import { menuOpen, toggleMenu, closeMenu, darkMode, toggleDark } from '../../data/darkMode.js';
import { ref, onMounted } from "vue";
</script>
