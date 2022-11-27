import { Link } from 'react-router-dom'
import React from 'react'
import { Text, Flex, Button } from '@chakra-ui/react'


export default function Header() {
  return (
    <Flex justify="space-between" textColor={'white'} as={'nav'} px='12' h={'70'} w='full' className='bg-primary'>
      <Flex alignSelf='center'>
        <Text className='text-2xl font-bold'>Task List App</Text>
      </Flex>
      <Flex alignSelf={'center'}  justifySelf={'end'} experimental_spaceX={'4'}>
        <Link to={'/'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>Home</Text>
        </Link>
        <Link to={'/tareas'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>Tareas</Text>
        </Link>
        <Link to={'/about'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>About</Text>
        </Link>
        <Button  bg={'none'} _hover={{bg:'none'}} _focus={{bg:'none'}} >
          <svg className='mb-2' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"></path></g></svg>
        </Button >
      </Flex>
    </Flex>
  )
}
