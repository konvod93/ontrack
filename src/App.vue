<script setup>

import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import TheHeader from './components/TheHeader.vue'

const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  stats: ChartBarIcon,
}

</script>

<template>
 <TheHeader />
  <main class="flex grow flex-col">

  </main>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li v-for="icon, page in navItems" :key="page" class="flex-1">
        <a v-bind:href="`#${page}`" class="flex flex-col items-center p-2 text-xs capitalize">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
