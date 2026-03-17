<script setup>
import BaseButton from './BaseButton.vue'
import BaseIcon from './BaseIcon.vue'
import BaseSelect from './BaseSelect.vue'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { isActivityValid } from '@/validators.js'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '@/constants.js'
import { ICON_TRASH } from '@/icons'
import { updateActivity, deleteActivity } from '@/activities'
import { resetTimelineItemActivities } from '@/timeline-items'

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})

function deleteAndResetActivity(activity) {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
}
</script>

<template>
  <li class="flex flex-col p-4 gap-2">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteAndResetActivity(activity)">
        <BaseIcon :name="ICON_TRASH" class="h-8" />
      </BaseButton>
      <span class="text-xl truncate">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        class="font-mono grow"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="updateActivity(activity, { secondsToComplete: $event || 0 })"
      />
      <ActivitySecondsToComplete v-if="activity.secondsToComplete" :activity="activity" />
    </div>
  </li>
</template>
