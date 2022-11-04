import { Input, FormControl, FormLabel } from "@chakra-ui/react"
import { useState } from "react"
import { TaskList } from "./TaskList"

export const InputForm = () => {
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(taskName)
    setTasks([...tasks, taskName])
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
        </FormControl>
      </form>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </>
  )
}