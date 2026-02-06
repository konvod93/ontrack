<script setup>

import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeLine.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'



</script>

<template>
  <TheHeader />
  <main class="flex grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
