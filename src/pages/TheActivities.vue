<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import { validateActivities } from '@/validators.js'
import TheActivityForm from '@/components/TheActivityForm.vue'
import { isActivityValid } from '@/validators.js'
import TheActivitiesEmptyState from '@/components/TheActivitiesEmptyState.vue'

const emit = defineEmits({
  deleteActivity: isActivityValid,
  createActivity: isActivityValid,
})

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities,
  },
})
</script>

<template>
  <div class="flex flex-col grow">
    <ul v-if="activities.length" class="divide-y grow">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @createActivity="emit('createActivity', $event)" />
  </div>
</template>
