import { Box, Button } from "@chakra-ui/react";
import { InputForm } from "../components/InputForm";
import { API, graphqlOperation } from 'aws-amplify'
import { echo } from "../src/graphql/queries";
import { listTodos } from "../src/graphql/queries";
export default function Home() {
  const test = async () => {
   const test =  await API.graphql(graphqlOperation(echo, {msg: 'test'}))
   if ('data' in test) console.log(test.data.echo)
  }
  return (
    <Box m={10}>
      <InputForm />
      <Button onClick={test}>echo</Button>
    </Box>
  )
}
