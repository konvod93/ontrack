import { createApp } from 'vue'
import { loadState, saveState, syncState } from './storage'
import App from './App.vue'
import './assets/main.css'

loadState() // <-- загружаем состояние сразу

syncState()

document.addEventListener('visibilitychange', () =>
  // Синхронизируем состояние при каждом изменении видимости страницы, чтобы гарантировать, что таймеры и данные всегда актуальны
  syncState(document.visibilityState === 'visible')
)

window.addEventListener('beforeunload', () => {
  saveState()
})

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
