import { Input, FormControl, FormLabel } from "@chakra-ui/react"
import { TaskList } from "./TaskList"
import { useRecoilState } from "recoil"
import { taskState } from "../src/atoms/task"
import { tasksState } from "../src/atoms/tasks"
import { StatusBtn } from "./StatusBtn"

export const InputForm = () => {
  const [taskName, setTaskName] = useRecoilState(taskState)
  const [tasks, setTasks] = useRecoilState(tasksState)

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTasks(
      [
        ...tasks,
        {
          taskName: taskName,
          isDone: false
        }
      ]
    )
    setTaskName('')
  }
  return (
    <>
      <form onSubmit={addTask}>
        <FormControl>
          <FormLabel>タスク名</FormLabel>
          <Input
            type='text'
            htmlSize={40}
            width='auto'
            onChange={(e) => setTaskName(e.target.value)}
            border='3px solid gray'
            value={taskName}
          />
          <StatusBtn />
        </FormControl>
      </form>
      <TaskList />
    </>
  )
}