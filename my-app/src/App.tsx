import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Nav from './component/nav'
import Footer from './component/footer'
import {HomePage} from './component/homepage'
import {Consultant} from './component/consultant'
import {Info} from './component/info'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegisterPages from './component/register'
import LoginPages from './component/login'
import SelectUser from "./component/selectUser"
import {ConProfile} from "../src/component/ConProfile"
import { Rating } from "./component/rating"
import ProtectedRoute from "./component/protectedRoute"
import Payment2 from "./component/Payment2"
import {RegisterConPages} from "./component/conRegister"
import AboutUs from "./component/AboutUs"
import Whatsapp from "./component/Whatsapp"
import ProfileEdit from "./component/editProfile"
// import ProtectCon from "./component/ProtectCon"



export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
    <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/selectuser' element={<SelectUser />}></Route>
        <Route path='/login' element={<LoginPages />}></Route>
        <Route path='/Userregister' element={<RegisterPages />}></Route>
        <Route path="/register" element={<RegisterConPages />}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route path='/conprofile' element={<ConProfile />}></Route>
        <Route path='/consultant' element={<Consultant />}></Route>

        <Route element={<ProtectedRoute />}>
        <Route path='/info/:user_id' element={<Info />}></Route>
        <Route path='/rating' element={<Rating />}></Route>
        <Route path='/editProfile' element={<ProfileEdit />}></Route>
       
        </Route>
{/* 

        <Route element={<ProtectCon />}>
        </Route> */}

<Route path='/payment' element={<Payment2/>}></Route>
<Route path='/chat' element={<Whatsapp/>}></Route>

      


     </Routes>
     <Footer/> 
  </ChakraProvider>

</BrowserRouter>
)