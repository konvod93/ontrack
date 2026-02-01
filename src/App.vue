<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <a href="#" class="text-sm">
      <img src="./assets/logo.png" alt="Logo" class="h-9" />
    </a>
    <a href="#">
      <div v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
  <main class="flex grow flex-col">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sequi.
  </main>
  <nav class="sticky bottom-0 z-10 bg-white text-3xl">nav</nav>
</template>
