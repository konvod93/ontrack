import { APP_NAME } from './constants'
import { today } from './time'
import { timelineItems } from './timeline-items'
import { activities } from './activities'
import { isToday } from './time'

export function loadState() {
  const serializedState = localStorage.getItem(APP_NAME)
  const state = serializedState ? JSON.parse(serializedState) : {}
  timelineItems.value = isToday(new Date(state.DATE)) ? state.timelineItems : timelineItems.value
  activities.value = state.activities || activities.value
  //activities.value = isToday(new Date(state.DATE)) ? state.activities : activities.value
}

export function saveState() {
  localStorage.setItem(
    APP_NAME,
    JSON.stringify({
      timelineItems: timelineItems.value,
      activities: activities.value,
      date: today()
    })
  )
}
