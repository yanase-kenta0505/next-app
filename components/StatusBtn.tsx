import { Button } from "@chakra-ui/react"

export const StatusBtn = () => {
  return (
    <>
      <Button mx={3} colorScheme='blue'>全て</Button>
      <Button mx={3} colorScheme='green'>完了</Button>
      <Button mx={3} colorScheme='purple'>未完了</Button>
    </>
  )
}