<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { ref } from 'vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
})

const options = [
  { value: 1, label: 'Coding' },
  { value: 2, label: 'Reading' },
  { value: 3, label: 'Training' },
]

const selectedActivityId = ref(1)
</script>

<template>
  <li class="flex flex-col py-10 px-4 border-t border-gray-200 relative gap-2">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="options"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
