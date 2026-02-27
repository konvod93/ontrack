<script setup>
import BaseButton from './BaseButton.vue'
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseSelect from './BaseSelect.vue'
import { isActivityValid, isUndefined, isNumber } from '@/validators.js'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constants.js'

const emit = defineEmits({
  setSecondsToComplete: isNumber,
  delete: isUndefined
})

defineProps({
  activity: {
    required: true,
    type: Object,
    validator: isActivityValid
  }
})
</script>

<template>
  <li class="flex flex-col p-4 gap-2">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="text-xl truncate">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
        @select="emit('setSecondsToComplete', $event || 0)"
      />
    </div>
  </li>
</template>
