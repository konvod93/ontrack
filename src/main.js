import './assets/main.css'
import * as storage from './storage'
import { createApp } from 'vue'
import App from './App.vue'
import { timelineItems } from './timeline-items'
import { activities } from './activities'

function loadState() {
  console.log('loadState')
  const state = storage.load()
  if (state.timelineItems) timelineItems.value = state.timelineItems
  if (state.activities) activities.value = state.activities
}

function saveState() {
  storage.save({
    timelineItems: timelineItems.value,
    activities: activities.value
  })
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    loadState()
  } else {
    saveState()
  }
})

window.addEventListener('beforeunload', () => {
  saveState()
})

createApp(App).mount('#app')
loadState() // <-- загружаем состояние сразу

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
