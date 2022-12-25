import { ReactNode, useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import {
    Center,
    Box,
    Heading,
    Stack,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Button,
    Flex,
    Link
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

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

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {layout:"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }:any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [ currency, showSpinner ]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                // style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions:any) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

const Payment2 =()=> {
	return (
		
        <Center p={6}>
            <Box
          maxW={'500px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={30}
          >
            <Heading
            fontWeight={600}
           fontSize={'3xl'}
           lineHeight={'110%'}
           color = {'#1F5373'}
           marginBottom ={'5'}
           pl= {'140'}>
             المبلغ المستحق
            </Heading>

            <Heading
           fontWeight={600}
           fontSize={'2xl'}
           lineHeight={'50%'}
           color = {'#1F5373'}
           marginBottom ={'10'}
           pl= {'162'}>
             350 SAR
            </Heading>

          <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "test",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		  </div>

        <Flex justifyContent='center' mt={2} p={2}>
        <Link href='https://wa.me/0500423434'>

                <Button fontSize={'lg'} fontFamily='sans-serif'     
                bg={'#F2B138'}
              color={'#1F5373'}
              _hover={{
                bg: '#1F5373',
                color: '#F2DFA7'
              }}
              rounded={'full'}
              > بدء المحادثة </Button>
              </Link>
              </Flex>
{/* 
         <Stack align={'center'} justify={'center'} direction={'row'} mt={3}>
          <SocialButton label={'Whatsapp'} href={'https://wa.me/0500423434'}>
                <FaWhatsapp fontSize="500px">
                </FaWhatsapp>
              </SocialButton>
          </Stack> */}

        </Box>
    </Center>
	);
}

export default Payment2;