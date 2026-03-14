<script setup>
import { PAGE_TIMELINE } from '../constants'
import { currentPage, navigate } from '@/router'
import { scrollToCurrentHour } from '@/timeline-items'

function handleClick() {
  if (currentPage.value === PAGE_TIMELINE) {
    scrollToCurrentHour(true)
  } else {
    navigate(PAGE_TIMELINE)
  }
}
</script>

<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="handleClick">
    <img src="../assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>
