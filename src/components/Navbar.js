import React from 'react'
import { Button, Flex, HStack, Spacer, Stack, Box, Divider, Center } from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'
import logo from '../images/logo.jpg'


import {Link} from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import DrawerComp from './DrawerComp'

const Navbar = ({isOpen, onOpen, onClose}) => {

   const [isLargerThan1000] =  useMediaQuery('(min-width: 1000px)')

    return (
      <Box sx={{backgroundColor: '#fefdfc', boxShadow: `${!isLargerThan1000 ? '0 0 4px 0 rgba(0, 0, 0, 0.2)' : 'none'}`, position: 'fixed', top: 0, zIndex: '33', width: '100%'}}>
      <Flex>
          <img style={{width: '150px', height: '80px', objectFit: 'cover', marginLeft: `${isLargerThan1000 ? '60px' : '30px'}`}} src={logo} />
          <Spacer />
             { isLargerThan1000 ?  <nav style={{ display:'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '700px', width: '700px', marginRight: '60px'}}>
                    <Stack>
                        <HStack>
                            <Button as={Link} to='/features' sx={{background: 'white'}}>Features</Button>
                            <Button  sx={{background: 'white'}}>Templates</Button>
                            <Button  sx={{background: 'white'}}>Resources</Button>
                <Button sx={{ background: 'white' }}>Pricing</Button>
                <Center>
                            <Divider orientation='vertical' />
                </Center>
                            <Button  sx={{background: 'white'}}>Log in</Button>
                            <Button _hover={{bg: '#d34936'}} sx={{background: '#de483a', color: 'white'}}>Start for free</Button>
                        </HStack>
              </Stack>
                </nav> : (
              <DrawerComp isOpen={isOpen} onOpen={onOpen} onClose={onClose}  />
                )
          }
    </Flex> 
      </Box>
  )
}

export default Navbar