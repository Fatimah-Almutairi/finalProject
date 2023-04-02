import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  Input,
  Button,
  Stack,
  // Link,
  useToast,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import RegisterAdviser from './conRegister';

export const RegisterConPages = () => {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
const [role, setRole] = useState('Consultant');
const [filed, setField] = useState('');
const [AboutMe, setAboutMe] = useState('');
const [certificate, setCertificate] = useState('');
const [phone, setphone] = useState('');

const toast = useToast();
const navigate = useNavigate();


const submitRegisterCon = async () => {
  try {
    if (password !== password2) {
      toast({
       
        title: `الرجاء التأكد من تطابق كلمة المرور `,  
        status: 'error',
        duration: 3000,
        position: 'top',
      });
      return;
    }
    
    const request = await fetch('/api/v1/shoraa/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email , role,  AboutMe, certificate, filed, phone}),
    });

    const data = await request.json();

    if (request.status !== 201) {
      toast({
        title: data.message,
        status: 'error',
        duration: 3000,
        position: 'top',
      });
      return;
    }

    toast({
      title: data.message,
      status: 'success',
      duration: 3000,
      position: 'top',
    });
    navigate('/login');
  } catch (error) {
    toast({
      title: '  حدث خطأ ',
      status: 'error',
      duration: 3000,
      position: 'top',
    });
  }
};

return (
  <Flex justifyContent='center' alignItems='center' height='2000vh'>
    <VStack spacing='2rem' width='20rem'>
      <Heading textColor={"#1F5373"}>تسجيل جديد  </Heading>
      <h3> أنشئ حسابك هنا</h3>
      <VStack align='left' spacing='1rem' width='100%'>
        <Box>
          <Input
          placeholder= " اسم المستخدم"
          textAlign={'right'}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type='text'
          />
        </Box>
        <Box>
          <Input
          textAlign={'right'}
          placeholder= "البريد الالكتروني"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='email'
          />
        </Box>
        <Box>
          <Input
          placeholder= " رقم الجوال "
          textAlign={'right'}
              onChange={(e) => setphone(e.target.value)}
              value={phone}
              type='text'
          />
        </Box>
        <Box>
          <Input
          textAlign={'right'}
          placeholder= "كلمة المرور"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
        </Box>
        <Box>
          <Input
          textAlign={'right'}
          placeholder= "تأكيد كلمة المرور"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            type='password'
          />
        </Box>
                   <Box>
                <Input
                placeholder= "المجال"
                textAlign={'right'}
                    onChange={(e) => setField(e.target.value)}
                    value={filed}
                    type='text'
                />
            </Box>
            <Box>
              <Input
              textAlign={'right'}
              placeholder= " رقم الترخيص "
                onChange={(e) => setCertificate(e.target.value)}
                value={certificate}
                type='number'
              />
            </Box>
            <Box>
            <Input
            textAlign={'right'}
            placeholder= " خبراتي "
              onChange={(e) => setAboutMe(e.target.value)}
              value={AboutMe}
              type='text'
              height='80px'
            />
          </Box>
         
            <Stack pt={6}>
                <Text alignItems={'right'} ml={'200'}> سياسة الانضمام
               
                <Checkbox required alignItems={'right'} ml={'3'}> </Checkbox>
                </Text>
              </Stack>
  
            <Link to ="/conprofile">
            <Button textColor={"#1F5373"} bg={'#F2DFA7'}
            onClick={submitRegisterCon}
             rounded={'full'}>تسجيل </Button>
            </Link>
      </VStack>
      </VStack>
      </Flex>
)
}

export default RegisterConPages