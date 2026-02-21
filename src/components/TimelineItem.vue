<script setup>
import BaseSelect from './BaseSelect.vue'
import { isTimelineItemValid, validateSelectOptions } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'
import { ref } from 'vue'

defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid,
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
})

const selectedActivityId = ref(0)
</script>

<template>
  <li class="flex flex-col py-10 px-4 border-t border-gray-200 relative gap-2">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="selectedActivityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectedActivityId = $event"
    />
  </li>
</template>
