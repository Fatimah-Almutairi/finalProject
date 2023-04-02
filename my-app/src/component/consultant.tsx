import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  Badge,
  Grid,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';

export const  Consultant = () =>  {
  const [consultant, setConsultant] = useState([]);


  const fetchCards = async () => {
    const request = await fetch('/api/v1/shoraa/consultant', {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    });
    const data = await request.json();
    setConsultant(data);
    // console.log(data)

  };
 
  useEffect(() => {
    fetchCards();
  }, [])
  
  return (
  <Grid 
  dir='rtl'
  mt="10"
  mr={'20'}
  templateColumns='repeat(3, 1fr)'
  gap={6}
  p="10"
  templateRows="repeat(2, 1fr)"
  >  

      
      {consultant.map( (item :any) =>(
            <Box
            maxW={'320px'}
            w={'full'}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
      <Box id={item.user_id}>
                    <Avatar
                    size={'xl'}
                    src='profile.png'
                    // src='./profile-pic.png'
                    mb={4}
                    pos={'relative'}
                
                  />
                  <Heading fontSize={'2xl'} fontFamily={'body'}>
                   {item.user.username}
                  </Heading>
                  <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
                    <Badge
                      px={2}
                      py={1}
                      bg={'gray.50'}
                      fontWeight={'400'}>
                     {item.filed}
                    </Badge>
                  </Stack>
                  <Text
                    textAlign={'center'}
                    color={'gray.700'}
                    py={3}
                    px={3}> ترخيص رقم : {item.certificate}</Text>
                                        <Text
                    textAlign={'center'}
                    color={'gray.700'}
                    py={3}
                    px={3}>{item.AboutMe}</Text>
          
                  <Stack mt={8} direction={'row'} spacing={4}>
                    <Link to={`/info/${item.user_id}`}>

                    <Button
                      flex={1}
                      mr='90%'
                      fontSize={'md'}
                      cursor='pointer'
                      rounded={'full'}
                      bg={'#F2DFA7'}
                      color={'#1F5373'}
                      _focus={{
                        bg: '#F2DFA7',
                        
                      }}>
                     تفاصيل أكثر
                    </Button> </Link>
                  </Stack>
                  </Box>
   
                  </Box>
                      ))}
                      
  </Grid>
  
  );
} 