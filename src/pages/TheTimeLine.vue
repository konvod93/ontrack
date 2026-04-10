<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import TheTimelineIndicator from '@/components/TheTimelineIndicator.vue'
import { startCurrentDateTimer, stopCurrentDateTimer } from '@/time'
import { timelineItems, timelineItemRefs, scrollToCurrentHour, stopTimelineItemTimer } from '@/timeline-items'
import { onActivated, onMounted, onDeactivated } from 'vue'

stopTimelineItemTimer() // <-- останавливаем таймер при загрузке страницы,
// чтобы он не работал в фоновом режиме, если пользователь перезагрузит страницу

onMounted(scrollToCurrentHour)
onActivated(() => {
  scrollToCurrentHour()
  startCurrentDateTimer()
})

onDeactivated(stopCurrentDateTimer)
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
