import { Link } from 'react-router-dom'
import React from 'react'
import { Text, Flex, Button, Avatar, Icon } from '@chakra-ui/react'
import { useUser } from '../hooks/useUser'
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth } from '@firebase/auth'
import { initializeApp } from '@firebase/app'
import { firebaseConfig } from '../firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth()

export default function Header({click, error}) {

  const { user, setUser } = useUser();

  const handleSignOut = () => {
    setUser(null);
    auth
      .signOut()
      .then(() => {
        window.location.reload()
      })
      .catch((error) => console.log(error))
  }
  return (
    <Flex justify="space-between" textColor={'white'} as={'nav'} px='12' h={'70'} w='full' className='bg-primary'>
      <Flex alignSelf='center'>
        <Text className='text-2xl font-bold'>Task List App</Text>
      </Flex>
      <Flex alignSelf='center' justify={'space-between'}  direction={'row'}>
        { user.name ? 
          <>
            <Text className='text-xl font-normal text-black'> Hola, {user.name} </Text> 
            <Avatar ml={4} size='sm' referrerpolicy='no-referrer' src={user.profileImage} />
          </>
          :
          <Flex alignSelf='center' justify={'space-between'}  direction={'column'}>
            <Button w={'28'} variant='outline' _hover={{bgColor:'cyan.300'}} _focus={{bgColor:'cyan.400'}} className='self-center' onClick={click}>
              Iniciar Sesión
            </Button>
            { error ? <div className='text-red-500'>{error}</div> : null}
          </Flex>
        }
      </Flex>
      <Flex alignItems={'center'}  justifySelf={'end'} experimental_spaceX={'4'}>
        <Link to={'/'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>Home</Text>
        </Link>
        <Link to={'/tareas'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>Tareas</Text>
        </Link>
        <Link to={'/about'}>
          <Text _hover={{ textShadow:'1px 1px #DDFFFC' }} className='text-xl'>About</Text>
        </Link>
        { user.name && 
        <Flex alignSelf={'center'} pl={8}>
          <Button   bg={'none'}  _hover={{bgColor:'cyan.300'}} onClick={handleSignOut}>
            <LogoutIcon />
          </Button >
        </Flex>
        }
        
      </Flex>
    </Flex>
  )
}
