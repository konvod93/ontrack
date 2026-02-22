<script setup>
import BaseButton from './BaseButton.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { isActivityValid } from '@/validators.js'
import { ref } from 'vue'

const activity = ref('')

function submit() {
  emit('createActivity', activity.value)
  activity.value = ''
}

const emit = defineEmits({
  submit: isActivityValid,
})

</script>

<template>
  <form @submit.prevent ="submit"  class="sticky bottom-14.25 flex gap-2 border-t bg-white p-4">
      <input
        type="text"
        v-model="activity"
        class="w-full rounded border px-4 text-xl"
        placeholder="Activity name"
      />
      <BaseButton :disabled="activity.trim() === ''">
        <PlusIcon class="h-8" />
      </BaseButton>
    </form>
</template>
