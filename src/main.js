import { createApp } from 'vue'
import { loadState, saveState } from './storage'
import App from './App.vue'
import './assets/main.css'

loadState() // <-- загружаем состояние сразу

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
