<script setup>
import BaseButton from './BaseButton.vue'
import { BUTTON_TYPE_NEUTRAL } from '@/constants'
import { validateSelectOptions, isUndefinedOrNull, isSelectValueValid } from '@/validators.js'
import { computed } from 'vue'
import { normalizeSelectValue } from '@/functions.js'
import BaseIcon from './BaseIcon.vue'

const props = defineProps({
  selected: [String, Number],
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  },
  placeholder: {
    required: true,
    type: String
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => {
  return isUndefinedOrNull(props.selected)
})

function select(value) {
  emit('select', normalizeSelectValue(value))
}
</script>

<template>
  <div class="flex gap-2">
    <BaseButton :type="BUTTON_TYPE_NEUTRAL" @click="select(null)">
      <BaseIcon name="XMark" class="h-8" />
    </BaseButton>
    <select class="w-full truncate rounded bg-gray-100 py-1 px-2 text-2xl" @change="select($event.target.value)">
      <option :selected="isNotSelected" disable value="">{{ placeholder }}</option>
      <option v-for="{ value, label } in options" :key="value" :value="value" :selected="value === selected">
        {{ label }}
      </option>
    </select>
  </div>
</template>
