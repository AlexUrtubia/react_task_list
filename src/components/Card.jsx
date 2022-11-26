import React from 'react'
import { Flex } from '@chakra-ui/react'

export default function Card(props) {
  return (
    <Flex justifySelf={'center'}  p={10} bgColor='white' w={'60%'} 
    className="rounded-lg shadow-md flex-col"
    >
      {props.children}
    </Flex>
  )
}
