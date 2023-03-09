import { Box, Button, ChakraProvider, Flex, Input, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { EditIcon, DeleteIcon, AddIcon } from "@chakra-ui/icons";

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <Box h='16' bgColor='gray.300'>Navbar</Box>
        <Flex direction='row' justifyContent='start'>
          <Box w='sm'>Sidebar</Box>
          <Table variant='simple' size='sm'>
            <TableCaption placement="top">
            <Flex direction='row' alignItems='center'>
              <span>ကားစီမံ &gt; ကားအမျိုးအစားစာရင်း</span>
              <Flex direction='row' alignItems='center' ms='auto'>
                <Button colorScheme='teal' variant='outline' size='sm'><AddIcon/></Button>
                <Input placeholder="Search" marginLeft='5'/>
              </Flex>
            </Flex>
            </TableCaption>
            <Thead bgColor='gray.100'>
              <Tr>
                <Th>ကားအမည်</Th>
                <Th>ကားငှားခ</Th>
                <Th>ကွန်တိန်နာကြေး</Th>
                <Th>ကားလက်ခံတန်ချိန်</Th>
                <Th>ဖော်ပြချက်</Th>
                <Th>ပြင်ဆင်ရန်</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline'><DeleteIcon/></Button>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <Flex direction='row' alignItems='center'>
                    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" width='50'></img>
                    <span>Bently</span>
                  </Flex>
                  </Td>
                <Td>၅၀၀၀၀ကျပ်</Td>
                <Td>၃၀၀၀၀ကျပ်</Td>
                <Td>တန်၅၀</Td>
                <Td>အရမ်းမိုက်တယ် ကားသန့်တယ်</Td>
                <Td>
                  <Button colorScheme='teal' variant='outline' mr='2'><EditIcon/></Button>
                  <Button colorScheme='red' variant='outline' ><DeleteIcon/></Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default App;
