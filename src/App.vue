<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './pages/TheTimeLine.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants.js'
import { ref } from 'vue'
import { normalizePageHash, generateTimelineItems, generateActivitySelectOptions } from './functions.js'

const currentPage = ref(normalizePageHash())

const timelineItems = generateTimelineItems()

const activities = ['Coding', 'Reading', 'Training']

const activitySelectOptions = generateActivitySelectOptions(activities)

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />
  <main class="flex flex-col grow">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
