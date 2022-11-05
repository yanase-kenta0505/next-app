import { List, ListItem } from "@chakra-ui/react"
import { CommonButton } from "./CommonButton"
import { useRecoilValue } from "recoil"
import { tasksState } from "../src/atoms/tasks"



export const TaskList = () => {
  const tasks = useRecoilValue(tasksState)
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          {task.taskName}
          <CommonButton
            text="削除"
            color="blue"
            index={index}
          />
        </ListItem>

      ))}
    </List>
  )
}