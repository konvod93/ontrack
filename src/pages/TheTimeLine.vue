<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { startTimer, stopTimer } from '@/time'
import { timelineItems, timelineItemRefs, scrollToCurrentHour } from '@/timeline-items'
import { onActivated, onMounted, onDeactivated } from 'vue'

onMounted(scrollToCurrentHour)
onActivated(() => {
  scrollToCurrentHour()
  startTimer()
})

onDeactivated(stopTimer)
</script>

<template>
  <div class="relative mt-7">
    <TheTimelineIndicator />
    <ul>
      <TimelineItem
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :ref="
          (el) => {
            if (el) timelineItemRefs[timelineItem.hour] = el
          }
        "
      />
    </ul>
  </div>
</template>
