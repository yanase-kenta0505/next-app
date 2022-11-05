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

export const CompleteBtn = ({ text, color, index }: Props) => {
  const [tasks, setTasks] = useRecoilState(tasksState)
  const complete = () => {
    setTasks((prevState) => prevState.map((value, currentIndex) => (currentIndex === index
      ? { taskName: value.taskName, isDone: true }
      : value)))
  }
  return (
    <Button
      colorScheme={color}
      size='sm'
      m={5}
      onClick={complete}
    >
      {text}
    </Button>
  )
}