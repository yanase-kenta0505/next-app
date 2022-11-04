import { List, ListItem } from "@chakra-ui/react"

type Props = {
  tasks: string[]
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index}>{task}</ListItem>
      ))}
    </List>
  )
}