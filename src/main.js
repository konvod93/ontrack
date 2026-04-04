import './assets/main.css'
import * as storage from './storage'
import { createApp } from 'vue'
import App from './App.vue'
import { timelineItems } from './timeline-items'
import { activities } from './activities'
import { isToday } from './time'

function loadState() {
  const state = storage.load()
  if (state.timelineItems)
    timelineItems.value = isToday(new Date(state.DATE)) ? state.timelineItems : timelineItems.value
  if (state.activities) activities.value = state.activities || activities.value
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
