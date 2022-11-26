import { Link } from 'react-router-dom'
import React from 'react'
import { Text, Flex } from '@chakra-ui/react'


export default function Header() {
  return (
    <Flex justify="space-between" textColor={'white'} as={'nav'} px='12' h={'70'} w='full' className='bg-primary'>
      <Flex alignSelf='center'>
        <Text className='text-2xl font-bold'>Task List App</Text>
      </Flex>
      <Flex alignSelf={'center'}  justifySelf={'end'} experimental_spaceX={'8'}>
        <Link to={'/'}>
          <Text className='text-xl'>Home</Text>
        </Link>
        <Link to={'/tareas'}>
          <Text className='text-xl'>Tareas </Text>
        </Link>
        <Link to={'/about'}>
          <Text className='text-xl'>About </Text>
        </Link>
      </Flex>
    </Flex>
  )
}
