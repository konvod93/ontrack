<script setup>
import BaseButton from './BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import { isActivityValid } from '@/validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constants.js'

const secondsToComplete = ref(null)

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid,
  },
})
</script>

<template>
  <li class="flex flex-col p-4 gap-2">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="text-xl truncate">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect class="font-mono" placeholder="h:mm" :selected="secondsToComplete" :options="PERIOD_SELECT_OPTIONS"
        @select="secondsToComplete = $event" />
    </div>
  </li>
</template>
