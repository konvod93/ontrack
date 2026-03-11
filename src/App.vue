<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeLine from './pages/TheTimeLine.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants.js'
import { provide, readonly } from 'vue'
import { generatePeriodSelectOptions } from './functions.js'
import { currentPage, timelineRef } from './router'
import * as keys from './keys'
import {
  setActivitySecondsToComplete,
  activitySelectOptions,
  createActivity,
  deleteActivity,
  activities
} from './activities'
import {
  timelineItems,
  setTimelineItemActivity,
  updateTimelineItemActivitySeconds,
  resetTimelineItemActivities
} from './timeline-items'

provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.activitySelectOptionsKey, readonly(activitySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))
provide(keys.timelineItemsKey, readonly(timelineItems))
</script>

<template>
  <TheHeader />
  <main class="flex flex-col grow">
    <TheTimeLine v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" :ref="timelineRef" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
