<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './pages/TheTimeLine.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants.js'
import { currentPage, timelineRef } from './router'
</script>

<template>
  <TheHeader />
  <main class="flex flex-col grow">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :ref="timelineRef" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
