import { createApp } from 'vue'
import { loadState, saveState } from './storage'
import App from './App.vue'
import './assets/main.css'
import { activeTimelineItem } from './timeline-items'
import { startTimelineItemTimer } from './timeline-item-timer'

loadState() // <-- загружаем состояние сразу

if (activeTimelineItem.value) {
  startTimelineItemTimer(activeTimelineItem.value) // <-- запускаем таймер сразу, чтобы он был готов к работе при загрузке страницы
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
