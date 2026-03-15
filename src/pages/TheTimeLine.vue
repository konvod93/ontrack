<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { timelineItems, timelineItemRefs, scrollToHour, scrollToCurrentHour } from '@/timeline-items'
import { onActivated, onMounted } from 'vue'

onMounted(scrollToCurrentHour)
onActivated(scrollToCurrentHour)
</script>

<template>
  <div class="mt-7">
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
        @scroll-to-hour="scrollToHour(timelineItem.hour)"
      />
    </ul>
  </div>
</template>
