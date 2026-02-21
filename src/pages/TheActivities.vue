<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '@/validators.js'

const emit = defineEmits({
  deleteActivity: isActivityValid,
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
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
  </div>
</template>
