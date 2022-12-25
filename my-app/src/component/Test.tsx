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
    Badge,
    Button
    } from '@chakra-ui/react';
  
  export const  Test =() => {
    return (
      <Center p={6}>
        <Box
          maxW={'500px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={30}
          >
       
       {/* <Flex pt={9} gap ={3}>
          <Image
            ml={'5'}
            boxSize='30%'
            src='./profile-pic.png'/>
           
            <Stack direction={'column'} px={'5'} py={'-20'}>
            <Text fontWeight={600} textAlign={'right'} fontSize={'3xl'}>نورة سعد الصالح</Text>
            <Stack align={'end'} justify={'end'} direction={'row'} mt={3} >
            <Badge
              px={2}
              py={1}
              bg={('gray.50')}
              fontWeight={'400'}>
              ترخيص رقم: 891472
            </Badge>
            </Stack>

            
          <Stack p={1} fontSize='lg'>
            <Text textAlign={'right'} >حاصل على الماجستير في العلوم المالية مستشار مالي سابق بالتخطيط الاستراتيجي في أرامكو مدرب تطوير شخصي بمعايير الـ ICI & ICF  ومهتم ببث المعرفة المالية ومعد وعي مالي في ثواني ومرشد معتمد </Text>
          </Stack>
          </Stack>  
          </Flex> */}

         <Tabs variant='enclosed' dir="rtl" mt={'10'}>
         <TabList>
          <Tab>الجلسات</Tab>
         </TabList>
         <TabPanels>
            <TabPanel>
              <Text fontSize={'xl'}>محمد عبدالله العيسى 

              <Badge py={0.5} px={2} mr={50}>مدة الجلسة: ساعتان</Badge> </Text>
             
              <Text mt={2} fontSize={'lg'}>الرسالة:  لدي استشارة حول وضع خطة إدخار لراتب موظف  
قطاع خاص. </Text>
            </TabPanel>
         </TabPanels>
         </Tabs>

         <Stack mt={8} direction={'row'} spacing={4} align={'center'} justify={'center'}>
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
              رفض الجلسة
            </Button>
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
          </Stack>
        </Box>
      </Center>
    );
  }
