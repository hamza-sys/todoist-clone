import React from "react"
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, Link, useDisclosure, IconButton, VStack, Divider, Center } from "@chakra-ui/react"

import {Link as RouterLink} from 'react-router-dom'

import {CloseIcon, HamburgerIcon } from '@chakra-ui/icons'


function DrawerComp({isOpen, onOpen, onClose}) {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '20px'}}>
       { !isOpen ? <IconButton
                                onClick={onOpen}
                                sx={{background: 'none'}}
                                icon={<HamburgerIcon color='#de483a' boxSize={5} />}
        /> : (
            <IconButton
              onClick={onClose}
              sx={{background: 'none'}}
              icon={<CloseIcon w={3} h={3} />}
            />
                            )}
                        </Box>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
      >
        <DrawerOverlay mt='90px' zIndex='overlay' />
        <DrawerContent mt='81px' px={{sm: 'none', md: '40px'}}> 

          <DrawerBody marginTop='25px'>
            <VStack align='flex-start'>
              <Link width='100%' _hover={{ background: 'gray' }} p={2} color='gray.600' onClick={onClose} as={RouterLink} to='/features'>Features</Link>
              <Link p={2} color='gray.600' width='100%' _hover={{ background: 'gray' }} onClick={onClose} as={RouterLink} to='/features'>Templates</Link>
              <Link p={2} color='gray.600' width='100%' _hover={{ background: 'gray' }} onClick={onClose} as={RouterLink} to='/features'>For Teams</Link>
              <Link p={2} color='gray.600' width='100%' _hover={{ background: 'gray' }} onClick={onClose} as={RouterLink} to='/features'>Pricing</Link>
            </VStack>
          </DrawerBody>

          <Center>
          <Divider align='center' width='90%' />
          </Center>
          
          <DrawerFooter justifyContent='center'>
            <Button variant='outline' mr={3} onClick={onClose} flex='1'>
              Log in
            </Button>
            <Button border='none' sx={{background: '#de483a', color: 'white', flex: '1'}}>Start for free</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerComp;