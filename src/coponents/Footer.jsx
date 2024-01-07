import { Text, Avatar, Box, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
<Box 
bgColor={"blackAlpha.700"}
  color={"whiteAlpha.700"}
  minH={"48"}
  px={"16"}
  py={["16","8"]}
  >
  <Stack direction={["column","row"]}
  h={"full"}
  alignItems={"center"}>
  <VStack w={"full"} alignItems={["center","flex-start"]}>
<Text fontWeight={"bold"}>About us</Text>
<Text>We are provide and work with the accuracy with the volatile market
</Text>
  </VStack>
  <VStack>
    <Avatar  boxSize={"28"} mt={["4","0"]}></Avatar>
    <Text>Made By </Text>
    <a href='https://instagram/ihetaintuteja'>Hetain</a>
  
  </VStack>
  </Stack>

  </Box>

  )
}

export default Footer