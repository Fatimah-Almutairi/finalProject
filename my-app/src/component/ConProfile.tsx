import {
  Box,
  Center,
  Stack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Flex,
  Avatar,
  Link
  } from '@chakra-ui/react';
import {  useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// maybe the code is right but is not work

import jwt from 'jwt-decode' // import dependency
import {  } from 'react-router-dom';
// import { idText } from 'typescript';


export const  ConProfile =( e: any) => {

  
  const [info, setInfo] = useState<any>({});
  

  const fetchcard = async () => {
    try{
    localStorage.getItem("token")
     const request= await fetch ('/api/v1/shoraa/consultantProfile/id', {
        method : 'GET',
        
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
    //  body: JSON.stringify({ username})
    })

    const data = await request.json();

    console.log(data)

    setInfo(data)
    

  }catch(error){
    console.log(error)
  }
  
}
  useEffect(() => {
    fetchcard();
  }, [])



  return (
    <Center p={6}>
    <Box
      maxW={'500px'}
      w={'full'}
      boxShadow={'2xl'}
      rounded={'md'}
      p={30}
      >
      
<Flex pt={9} gap ={3}>
      <Avatar
        ml={'5'}
        boxSize='30%'
        src='./profile-pic.png'/>
       
        <Stack direction={'column'}  py={'-20'}>
        <Text fontWeight={600} textAlign={'right'} fontSize={'3xl'}> تركي التركي </Text>
        <Stack  direction={'row'} mt={3}>
        <Text
          dir='rtl'
          ml={'200'}
          textAlign={'center'}
          fontWeight={'200'}>ترخيص رقم:
          098742</Text>
        </Stack>

        
      <Stack p={1} fontSize='lg'>
        <Text textAlign={'right'} > خبرة خمس سنوات في الاستثمار والادخار</Text>
      </Stack>
      </Stack>  
      </Flex>

     <Tabs variant='enclosed' dir="rtl" mt={'10'}>
     <TabList>
      <Tab>الجلسات</Tab>
     </TabList>
     <TabPanels>
        <TabPanel>
          <Text fontSize={'xl'}>محمد عبدالله العيسى 

        </Text>
         
          <Text mt={2} fontSize={'lg'}>الرسالة:  لدي استشارة حول وضع خطة إدخار لراتب موظف  
قطاع خاص. </Text>
        </TabPanel>
     </TabPanels>
     </Tabs>

     <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
  
        <Link href='https://wa.me/0550570955'>
        <Button
          flex={.25}
          fontSize={'sm'}
          cursor='pointer'
          rounded={'full'}
          bg={'#F2DFA7'}
          color={'#1F5373'}
       
          _focus={{
            bg: '#F2DFA7',
          }}>
          قبول الجلسة
        </Button>
        </Link>
      </Stack>

  
    </Box>
  </Center>
);
}
