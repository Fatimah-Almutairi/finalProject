import { Button, VStack, Box, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function SelectUser() {

        return (
    <Flex justifyContent='center' alignItems='center' mt={'170px'}>

    <VStack spacing='2rem' width='20rem'>
        <Text fontSize={'30'} textColor={"#1F5373"}>تسجيل مستخدم جديد</Text>

    <Box boxShadow={'xl'}>  <Link to = "/Userregister">
     <Button textColor={"#1F5373"} bg={'#F2DFA7'} w={'400px'} value={'Investor'} > مستخدم جديد </Button> 
     </Link></Box>

<Box boxShadow={'xl'}>
<Link to = "/register"> <Button textColor={"#1F5373"} bg={'#F2DFA7'} w={'400px'} value={'Consultant'}> مستشار مالي </Button> </Link>
</Box>

            </VStack> 
            </Flex>


        )
}
export default SelectUser