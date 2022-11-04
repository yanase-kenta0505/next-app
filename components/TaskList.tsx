import { List, ListItem } from "@chakra-ui/react"
import { CommonButton } from "./CommonButton"
import { Dispatch, SetStateAction } from 'react'

type Props = {
  tasks: string[]
  setTasks: Dispatch<SetStateAction<string[]>>
}

export const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          {task}
          <CommonButton
            text="削除"
            color="blue"
            setTasks={setTasks}
            index={index}
            tasks={tasks}
          />
        </ListItem>

      ))}
    </List>
  )
}