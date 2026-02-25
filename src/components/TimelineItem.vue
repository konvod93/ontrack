<script setup>
import BaseSelect from './BaseSelect.vue'
import { isActivityValid, isTimelineItemValid, validateActivities, validateSelectOptions } from '@/validators.js'
import TimelineHour from './TimelineHour.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  selectActivity: isActivityValid
})

function selectActivity(id) {
  emit(
    'selectActivity',
    props.activities.find((activity) => activity.id === id)
  )
}
</script>

<template>
  <li class="flex flex-col py-10 px-4 border-t border-gray-200 relative gap-2">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
      @select="selectActivity"
    />
  </li>
</template>
