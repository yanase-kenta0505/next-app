import { Button } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from 'react'

type Props = {
  text: string
  color: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
  setTasks: Dispatch<SetStateAction<string[]>>
  index: number
  tasks: string[]
}

export const CommonButton = ({ text, color, tasks, index, setTasks }: Props) => {
  const deleteTask = () => {
    const newTasks = tasks.filter((_, currentIndex) => currentIndex !== index)
    setTasks(newTasks)
  }
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