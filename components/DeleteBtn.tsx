import { Button } from "@chakra-ui/react"
import { useRecoilValue } from "recoil"
import { taskState } from '../src/atoms/task'
import { useRecoilState } from 'recoil'
import { tasksState } from '../src/atoms/tasks'

type Props = {
  text: string
  color: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
  index: number
}

export const DeleteBtn = ({ text, color, index }: Props) => {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const deleteTask = () => {
    const newTasks = tasks.filter((_, currentIndex) => currentIndex !== index)
    setTasks(newTasks)
  }

  const task = useRecoilValue(taskState)
  return (
    <Button
      colorScheme={color}
      size='sm'
      m={5}
      onClick={deleteTask}
    >
      {text}
    </Button>
  )
}