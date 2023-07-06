import { Box, Button, Center, Flex, Heading, Text, border } from '@chakra-ui/react'
import React from 'react'

const Main = ({isOpen}) => {
    return (
      <Box sx={{marginTop: `${isOpen ? '580px' : '200px'}`, padding: '40px', transition: 'margin .1s ease'}}>
          <Center>
              <Flex direction='column' justify='center' align='center' textAlign='center'>
              <Heading fontWeight='900' fontSize={{base: '35px', md: '40px', lg: '55px'}} color='#232115'>
                  Organize your <br /> work and life, finally.
              </Heading>
              <Text position='relative' fontSize={{base: 'lg', lg: 'xl'}} m='20px' width={{base: '100%', sm: '75%', md: '50%'}} fontWeight='500'>
                  Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.
                  </Text>
                  <Button _hover={{bg: '#d34936'}} sx={{background: '#de483a', color: 'white', padding: '22px', fontSize: '18px'}}>Start for free</Button>
              </Flex>
          </Center>
    </Box>
  )
}

export default Main;