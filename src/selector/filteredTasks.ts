import { selector } from "recoil";
import { statusState } from "../atoms/status";
import { tasksState } from "../atoms/tasks";

export const filteredTasksState = selector({
  key: 'filteredTasks',
  get: ({get}) => {
    const tasks = get(tasksState)
    const status = get(statusState)

    switch(status) {
      case 'all':
        return tasks
      case 'complete':
        return tasks.filter(task => task.isDone)
      case 'imcomplete':
        return tasks.filter(task => !task.isDone)
      default:
        return tasks
    }
  }
})