import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, Heading, Input, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'


export const Rating = () => {
  return (
    <Center>
        <Box 
        mt={4}
        width='70%'
        bg={'gray.200'}>
            <Box bg={'white'} ml='35%' width='30%' pb={2} borderBottomRadius='2xl'>
                <Heading fontFamily='sans-serif'  textAlign={'center'}> تقييم الجلسة </Heading>
            </Box>
            <Box pt='10%' pb={9}>
            <Text pr={0} pt={2} pl='70%' fontFamily='sans-serif' fontWeight="bold"> <Menu>{({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} border='1px' >
        {isOpen ? '  الرجاء الاختيار' : 'ممتاز '}
      </MenuButton>
      <MenuList >
        <MenuItem > ممتاز</MenuItem>
        <MenuItem onClick={() => alert('')}>جيد</MenuItem>
        <MenuItem>  ضعيف </MenuItem>
      </MenuList>
    </>
  )}
</Menu> : نسبة رضاك عن الجلسة  </Text>
<Box m={6} pl='50%' mt={9} >
<Input placeholder='اكتب تعليقك ' height='100px' bg={'white'} textAlign={'right'} borderRadius='xl' /></Box>
            </Box>
            <Flex justifyContent='center' mt={7} p={5}><Button fontSize={'lg'} fontFamily='sans-serif'     
                bg={'#F2DFA7'}
              color={'#1F5373'}
              _hover={{
                bg: '#1F5373',
                color: '#F2DFA7'
              }}> إرسال التقييم </Button></Flex>
        </Box>

    </Center>
  )
}