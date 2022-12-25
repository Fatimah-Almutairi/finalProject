import {
  Flex,
  HStack,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { useNavigate,Link } from 'react-router-dom';


function Nav() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const login = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Flex alignItems='center' justifyContent='center'>

<Flex alignItems='center' justifyContent='start' ml={120} mt={0}>
    <HStack>
     <Menu>
      
      <MenuButton as={Button} bgColor={'#F2DFA7'} color={'#1F5373'}
       _focus={{
        bg: '#F2DFA7',
      }}
      >
      حسابي
     </MenuButton>
    <MenuList dir="rtl">
      {localStorage.getItem('token')? (
        <>
        <Link to ="/editProfile">
      <MenuItem>بياناتي</MenuItem></Link>
    <MenuDivider />
      <MenuItem onClick={logout} >تسجيل الخروج</MenuItem>
      </>
      ): (
        <>
          <MenuItem onClick={login} >تسجيل الدخول</MenuItem>
        </>
      )}
      
  </MenuList>
</Menu>
</HStack>
</Flex>


      <HStack  width='100vw' alignItems='center' justifyContent='center'>
      <Flex gap={5} borderBottom='1px' borderColor='gray.300' pr={0} >
      <Text color={'#1F5373'}fontSize='1.5em' fontFamily='inherit' ><Link to='/selectUser'>انضم معنا</Link></Text>
        <Text color={'#1F5373'}fontSize='1.5em' fontFamily='inherit'><Link to='/AboutUs'>من نحن</Link></Text>
        <Text color={'#1F5373'}fontSize='1.5em' fontFamily='inherit'><Link to='/consultant'>المستشارون</Link></Text>
       <Text color={'#1F5373'}fontSize='1.5em' fontFamily='inherit'> <Link to="/">الرئيسية</Link></Text>
       </Flex>
        </HStack>
        <Image
        mr={90}
        boxSize='160px'
        src='./levelup.png'></Image>
      
      </Flex>

  )
}

export default Nav