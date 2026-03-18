<script setup>
import { currentHour } from '@/functions'
import { isHourValid } from '@/validators.js'
import { scrollToHour } from '@/timeline-items'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const formattedHour = `${props.hour.toString().padStart(2, '0')}:00`

const classes = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono',
  props.hour === currentHour() ? 'bg-purple-900 font-black text-white' : 'bg-gray-100 text-gray-500'
]
</script>
<template>
  <a href="#" @click.prevent="scrollToHour(hour)" :class="classes">
    {{ formattedHour }}
  </a>
</template>
