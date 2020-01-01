import { TaskState } from './TaskState'

export function getStateColor (state) {
  switch (state) {
    case TaskState.Todo.label:
      return 'badge-light circle-button-border'
    case TaskState.InProgress.value:
      return 'badge-waring'
    case TaskState.Done.value:
      return 'badge-success'
    default:
      return 'badge-info' // 全部TODO
  }
}
