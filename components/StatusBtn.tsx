import { Button } from "@chakra-ui/react"
import { useSetRecoilState } from "recoil"
import { statusState } from "../src/atoms/status"

export const StatusBtn = () => {
  const setStatus = useSetRecoilState(statusState)
  return (
    <>
      <Button mx={3} colorScheme='blue' onClick={() => setStatus('all')}>全て</Button>
      <Button mx={3} colorScheme='green' onClick={() => setStatus('complete')}>完了</Button>
      <Button mx={3} colorScheme='purple' onClick={() => setStatus('imcomplete')}>未完了</Button>
    </>
  )
}