import { createApp } from 'vue'
import { syncState } from './storage'
import App from './App.vue'
import './assets/main.css'
import { startCurrentDateTimer } from './time'

syncState()

startCurrentDateTimer()

document.addEventListener('visibilitychange', () =>
  // Синхронизируем состояние при каждом изменении видимости страницы, чтобы гарантировать, что таймеры и данные всегда актуальны
  syncState(document.visibilityState === 'visible')
)

window.addEventListener('beforeunload', () => {
  syncState()
})

createApp(App).mount('#app')

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
