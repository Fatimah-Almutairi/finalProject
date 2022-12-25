import {
  Box,
  Center,
  Stack,
  Text,
  Badge,
  Flex,
  Button,
  Heading,
  Avatar,
  } from '@chakra-ui/react';
// import e from 'cors';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';



export const   Info =(e :any) =>  {
  // e.preventDefault()
  let user_id  = useParams();
  user_id = user_id.user_id as any;

  console.log(user_id)
  const [info, setInfo] = useState([]);

  const fetchcard = async () => {
    try{
    
    await fetch (`/api/v1/shoraa/con/${user_id}/`, {
      method : 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
    .then((response)=> response.json())
    .then((data)=>setInfo(data));



    // const data = await request.json();
    
    ;
    // console.log(data)
  }catch(error){
    console.log(error)
  }
  
}
  useEffect(() => {
    fetchcard();
  }, [])
  

  return (
    <Center py={6}>
      <Box
        maxWidth={'45%'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={2}
        pb={50}
        mb={20}>

         {info.map((item :any) => (
          <Box>

        <Box
          h={'auto'}
          bg={'gray.100'}>
            

          <Flex pt={9} gap ={235} pb={7}>
            <Box>
          <Avatar
            ml={'5'}
            boxSize='100'
            // width='85%'
            src='./profile.png'>

            </Avatar>
            
            <Text pl={6} ml={2} pt={4} fontSize={'sm'} fontFamily='sans-serif'>  السعر : ٣٥٠ ريال </Text>
            </Box>

            
          <Stack direction={'column'} px={'30'} py={'-20'}>
            <Text fontWeight={400} textAlign={'right'} fontSize={'4xl'} fontFamily='sans-serif'> 
            {item.user.username} </Text>
            <Stack align={'center'} justify={'right'} direction={'row'} mt={3}>
            <Badge pr={10}
              fontSize='1rem'
              fontFamily='sans-serif'>
             رقم الترخيص :  {item.certificate}
            </Badge>
          </Stack>
          
          <Stack m={2} p={2} fontSize='1.1em' fontFamily='sans-serif' >
          <Box><Text textAlign={'right'} pr={3} >{item.AboutMe} </Text>
            </Box>  
             </Stack>
          </Stack>   
          </Flex>
        <Flex justifyContent='center' mt={7} p={5}>
        <Link to ="/Payment">  
                <Button fontSize={'lg'} fontFamily='sans-serif'     
                bg={'#F2DFA7'}
              color={'#1F5373'}
              _hover={{
                bg: '#1F5373',
                color: '#F2DFA7'
              }}>طلب استشارة </Button>
              </Link>
              </Flex>

        </Box>
        </Box>
)

)}
  <Box >
    <Heading fontWeight={600} fontSize={'3xl'} pt={3} fontFamily='sans-serif' pl='80%'> التعليقات </Heading>
    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row"  pl='80%'>
        <Text fontSize={'lg'} fontFamily='sans-serif' fontWeight='bold'>عبدالله محمد </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="end"
        
        >
        <Text textAlign={'center'} pl='30%' ml={'30'}fontSize={'md'} fontFamily='sans-serif'>
    تجربة من رائعة فادتني كثير جدا وراح اعيدها</Text>

 </Stack>
    </Stack>
        </Box>
      
    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row"  pl='80%'>
        <Text fontSize={'xl'} fontFamily='sans-serif' fontWeight='bold'>مشعل  الغنام </Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="end"
        >
        <Text textAlign={'center'} pl='30%' ml ={''}fontSize={'md'} fontFamily='sans-serif'>
   تجربة أكثر من رائعة والمستشار مستمع جيد واستفدت كثير من الجلسة </Text>

 </Stack>
    </Stack>

    <Stack p="4" boxShadow="lg" m="4" borderRadius="md">
      <Stack direction="row" pl='80%'>
        <Text fontSize={'xl'} fontFamily='sans-serif' fontWeight='bold'> حسن أحمد </Text>
      </Stack>
       <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="end">

          <Text textAlign={'center'} pl='30%' fontSize={'md'} fontFamily='sans-serif'>
   تجربة رائعة جدا والمستار ساعدني في ترتيب افكاري </Text>
        

 </Stack>
    </Stack>
 

      </Box>

    </Center>
    
  );
}
