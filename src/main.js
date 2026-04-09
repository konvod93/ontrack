import { createApp } from 'vue'
import { loadState, saveState } from './storage'
import App from './App.vue'
import './assets/main.css'
import { startTimelineItemTimer, findActiveTimelineItem } from './timeline-items'

loadState() // <-- загружаем состояние сразу

const activeTimelineItem = findActiveTimelineItem()

if (activeTimelineItem) {
  startTimelineItemTimer(activeTimelineItem) // <-- запускаем таймер сразу, чтобы он был готов к работе при загрузке страницы
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

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
