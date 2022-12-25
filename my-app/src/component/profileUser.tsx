import {
    Button,
    Flex,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Text,
  } from '@chakra-ui/react';

function ProfileUser() {
    
      return (
        <Flex  
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack  spacing={4}
            w={'full'}
            maxW={'md'}
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
            my={12}>
          <Heading ml={'20'} lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }} color={"#1F5373"}>
                تعديل الملف الشخصي
            </Heading>
              
              <Text
              textAlign={'right'} color={"#1F5373"}>الاسم</Text>
              <Input
              textAlign={'right'}
                placeholder="نورة سعد الصالح"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
            <Text
              textAlign={'right'} color={"#1F5373"}> البريد الألكتروني</Text>
              <Input
              textAlign={'right'}
                placeholder="noura1@gmail.com"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
              <Text
              textAlign={'right'} color={"#1F5373"}> كلمة المرور</Text>
              <Input
              textAlign={'right'}
                placeholder="********"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />
              <Text
              textAlign={'right'} color={"#1F5373"}>تأكيد كلمة المرور </Text>
              <Input
              textAlign={'right'}
                placeholder="********"
                _placeholder={{ color: 'gray.500' }}
                type="text"
              />

              <HStack>
              <Button
              rounded={'full'}
                bg={'gray.300'}
                color={"#1F5373"}
                w="full"
                >
              إلغاء
              </Button>
              <Button
              rounded={'full'}
                bg={'#F2DFA7'}
                color={'#1F5373'}
                w="full"
                >
                حفظ التغييرات
              </Button>
              </HStack>
              </Stack>
        </Flex>
      )
    }
export default ProfileUser