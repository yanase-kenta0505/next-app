import { List, ListItem, Text } from "@chakra-ui/react"
import { useRecoilValue } from "recoil"
import { filteredTasksState } from "../src/selector/filteredTasks"
import { CompleteBtn } from "./CompleteBtn"
import { DeleteBtn } from "./DeleteBtn"



export const TaskList = () => {
  const tasks = useRecoilValue(filteredTasksState)
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>
          <Text style={{textDecoration: task.isDone ? 'line-through' : 'none'}}>{task.taskName}</Text>
          <CompleteBtn
            text="完了"
            color="green"
            index={index}
          />
          <DeleteBtn
            text="削除"
            color="blue"
            index={index}
          />
        </ListItem>

      ))}
    </List>
  )
}