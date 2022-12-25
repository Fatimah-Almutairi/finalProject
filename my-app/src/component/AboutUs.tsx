import {
    Heading,
    Text,
    Avatar,
    Box,
    Stack,
    useColorModeValue,
    Grid,
    chakra,
    VisuallyHidden,

  } from '@chakra-ui/react';
  import { FaGithub , FaLinkedin } from 'react-icons/fa';
  import { ReactNode } from 'react';
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
      bg={'white'}
      color={'#1F5373'}
      _focus={{
        bg: '#F2DFA7',
      }}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        mb={0}
        pb={0}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
function AboutUs() {
  return (
    <Stack>
         <Heading color={'#1F5373'} fontSize={'5xl'} fontFamily={'body'} mt={'100'} textAlign={'center'}>
   من نحن
  </Heading>
  <br></br>
  <br></br>

    <Box px={'60px'}>
  <Grid templateColumns='repeat(4, 1fr)' > 
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          justifyContent={'space-between'}>
          <Avatar
            size={'xl'}
            src={
                './icon.png'            }
            mb={4}
            pos={'relative'} 
          />
          <Heading color={'#1F5373'}fontSize={'2xl'} fontFamily={'body'}>
            ساره الهاجري
          </Heading>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'github'} href={'#'}>
                <FaGithub />
              </SocialButton>
          </Stack>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            py={3}
            px={3}>
            مطور واجهات ويب وتجربة المستخدم 
          </Text>
  
          <Stack mt={8} direction={'row'} spacing={4}>
          </Stack>
        </Box>

        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={'./icon.png'}
            mb={4}
            pos={'relative'}
          />
          <Heading color={'#1F5373'} fontSize={'2xl'} fontFamily={'body'}>
             سارة العتيبي
          </Heading>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/sarah-alnufaie-77a68a203'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'github'} href={'https://github.com/Sarahalnuu'}>
                <FaGithub />
              </SocialButton>
          </Stack>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            py={3}
            px={3}>
             مطور مواقع ويب 
             تصميم واجهات
          </Text>
          <Stack mt={8} direction={'row'} spacing={4}>
            
          </Stack>
        </Box>

        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                './icon.png'            }
            mb={4}
            pos={'relative'}
          />
          <Heading color={'#1F5373'} fontSize={'2xl'} fontFamily={'body'}>
            سارة الخليف  
          </Heading>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/sara-alkhalif-565647153'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'github'} href={'https://github.com/sarabader'}>
                <FaGithub />
              </SocialButton>
          </Stack>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            py={3}
            px={3}>
            تصميم وتجربة المستخدم 
            مطور مواقع ويب
          </Text>
          <Stack mt={8} direction={'row'} spacing={10}>
         
          </Stack>
        </Box>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                './icon.png'            }
            mb={4}
            pos={'relative'}
          />
          <Heading color={'#1F5373'} fontSize={'2xl'} fontFamily={'body'}>
            فاطمة المطيري 
          </Heading>
          <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'LinkedIn'} href={'http://linkedin.com/in/tatima-m-mutairi'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'github'} href={'https://github.com/Fatimah-Almutairi'}>
                <FaGithub />
              </SocialButton>
          </Stack>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            py={3}
            px={3}>
            تطوير مواقع الويب
          </Text>
          <Stack mt={8} direction={'row'} spacing={10}>
           
          </Stack>
        </Box>
    </Grid>
    </Box>
</Stack>
  )
}

export default AboutUs