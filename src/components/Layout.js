import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Main from './Main'
import { Button, useDisclosure } from '@chakra-ui/react'

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
      <div>
        <Navbar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <Main isOpen={isOpen} />
        <Outlet />  
      </div>
  )
}

export default Layout