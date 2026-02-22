<script setup>
import ActivityItem from '@/components/ActivityItem.vue'
import { validateActivities } from '@/validators.js'
import TheActivityForm from '@/components/TheActivityForm.vue'
import { isActivityValid } from '@/validators.js'

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
  <div>
    <ul class="divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
      />
    </ul>
    <TheActivityForm @createActivity="emit('createActivity', $event)" />
  </div>
</template>
