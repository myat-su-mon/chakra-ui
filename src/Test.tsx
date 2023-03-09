// import { Box, Flex, Stack, VStack, HStack} from '@chakra-ui/react'
import { Box, Heading, Text, Button } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      {/* <Flex justify='space-between' align='center'> */}
      {/* <HStack spacing='24px'>
        <Box bg='green' w='100px' h='200px'>This is a box</Box>
        <Box bg='blue' w='100px' h='200px'>This is a box</Box>
        <Box bg='red' w='200px' h='100px'>This is a box</Box>
        <Box bg='yellow' w='100px' h='200px'>This is a box</Box>
      </HStack> */}
      {/* </Flex> */}
      <Box bg='green' h='300px' w='300px'>
        <Heading fontSize='40px'>
          Create a accessible reading
        </Heading>
        <Text fontSize='32px'>
          Lorem ipsum, dolor sit amet consectetur 
        </Text>
        <Button mt='32px' colorScheme='blue' _hover={{background:'yellow', color: 'black'}}>Click Me</Button>
      </Box>
    </div>
  )
}

export default App
