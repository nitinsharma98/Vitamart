import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import Profile from "./components/Pages/Profile";
import {createBrowserRouter , createRoutesFromElements , Route , RouterProvider} from "react-router-dom"
import Rootlayout from "./layouts/Rootlayout";
import Socialmedialayout from "./layouts/Socialmedialayout";
import Toolslayout from "./layouts/Toolslayout";
import Shopinglayout from "./layouts/Shopinglayout"
import SocialmediaNotification from "./components/SocialMedia/SocialmediaNotification";
import SocialmediaChat from "./components/SocialMedia/SocialmediaChat";
import SocialmediaHome from "./components/SocialMedia/SocialmediaHome";
import SocialmediaNewpost from "./components/SocialMedia/SocialmediaNewpost";
import Calculator  from "./components/Tools/Calculator"
import Todo  from "./components/Tools/Todo"
import Clock  from "./components/Tools/Clock"
import Cart from "./components/Shoping/Cart"
import Mens from "./components/Shoping/Mens"
import Toys from "./components/Shoping/Toys"
import Food from "./components/Shoping/Food"
import Profileedit from "./components/Pages/Profileedit";
import Backendshort from "./components/Backendshort/Backendshort";

function App() {

  const [theme , setTheme] = useState('light');
  const [option , setoption] = useState('profile');
  const [navop , setnavop] = useState('Home');

  const [tddata , settddata] = useState([]);
  const [spcart , setspcart] = useState([]);
  const[smpdata , setsmpdata] = useState([]);

  
  const spdata = [
    {
      id: uuidv4() ,
      img : 'https://tse1.mm.bing.net/th?id=OIP.gmNMTyBJy4LAshKKBsukZAHaFj&pid=Api&P=0&h=180',
      rating : 4,
      total : 65,
      name : `burger`,
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse3.mm.bing.net/th?id=OIP.LcHg6TfERrPFXA4nhrnsiQHaEa&pid=Api&P=0&h=180',
      rating : 4,
      total : 45,
      name : "chowmin",
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse1.mm.bing.net/th?id=OIP.gmNMTyBJy4LAshKKBsukZAHaFj&pid=Api&P=0&h=180',
      rating : 4,
      total : 65,
      name : "sandwich",
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse3.mm.bing.net/th?id=OIP.LcHg6TfERrPFXA4nhrnsiQHaEa&pid=Api&P=0&h=180',
      rating : 4,
      total : 45,
      name : "pao",
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse1.mm.bing.net/th?id=OIP.gmNMTyBJy4LAshKKBsukZAHaFj&pid=Api&P=0&h=180',
      rating : 4,
      total : 65,
      name : "pizza",
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse3.mm.bing.net/th?id=OIP.LcHg6TfERrPFXA4nhrnsiQHaEa&pid=Api&P=0&h=180',
      rating : 4,
      total : 45,
      name : "roti",
      oldprice : 550,
      newprice : 495,
      type: 'food'
    },
    {
      id: uuidv4() ,
      img : 'https://tse1.mm.bing.net/th?id=OIP.cUliA2yxQuAZBw3txzboSwHaDt&pid=Api&P=0&h=180',
      rating : 5,
      total : 45,
      name : "pent-shirt",
      oldprice : 550,
      newprice : 445,
      type : 'mens'
    },
    {
      id: uuidv4() ,
      img : 'https://tse4.mm.bing.net/th?id=OIP.lECSP4eJzM44kug9psq0ogHaFE&pid=Api&P=0&h=180',
      rating : 4,
      total : 45,
      name : "coat",
      oldprice : 1250,
      newprice : 585,
      type : 'mens'
    },
    {
      id: uuidv4() ,
      img : 'https://tse3.mm.bing.net/th?id=OIP.C9cU_8uktkkVnioxifo3dwHaFj&pid=Api&P=0&h=180',
      rating : 4,
      total : 45,
      name : "car",
      oldprice : 550,
      newprice : 495,
      type: 'toys'
    },
    {
      id: uuidv4(),
      img: 'https://tse1.mm.bing.net/th?id=OIP.gmNMTyBJy4LAshKKBsukZAHaFj&pid=Api&P=0&h=180',
      rating: 4,
      total: 65,
      name: "a",
      oldprice: 550,
      newprice: 495,
      type: 'food'
    },
    {
      id: uuidv4(),
      img: 'https://tse3.mm.bing.net/th?id=OIP.LcHg6TfERrPFXA4nhrnsiQHaEa&pid=Api&P=0&h=180',
      rating: 5,
      total: 75,
      name: "b",
      oldprice: 600,
      newprice: 520,
      type: 'food'
    },
    {
      id: uuidv4(),
      img: 'https://tse1.mm.bing.net/th?id=OIP.cUliA2yxQuAZBw3txzboSwHaDt&pid=Api&P=0&h=180',
      rating: 5,
      total: 45,
      name: "pent",
      oldprice: 550,
      newprice: 445,
      type: 'mens'
    },
    {
      id: uuidv4(),
      img: 'https://tse4.mm.bing.net/th?id=OIP.lECSP4eJzM44kug9psq0ogHaFE&pid=Api&P=0&h=180',
      rating: 4,
      total: 60,
      name: "coat-e",
      oldprice: 1250,
      newprice: 585,
      type: 'mens'
    },
    {
      id: uuidv4(),
      img: 'https://tse3.mm.bing.net/th?id=OIP.C9cU_8uktkkVnioxifo3dwHaFj&pid=Api&P=0&h=180',
      rating: 4,
      total: 70,
      name: "robot toy",
      oldprice: 750,
      newprice: 599,
      type: 'toys'
    },
  ];  

  const userprofilileeg =[
    {
      id: 1,
      username : "nitin",
      age : 21 , 
      gender : "male" ,
      profileimg : "https://tse3.mm.bing.net/th?id=OIP.Jqr4_S2EkYl-6TGDXxUmXAHaE9&pid=Api&P=0&h=180",
      about : "Bio of nitin ",
      city: "hansi"
    },
    {
      id: 2,
      username : "aman",
      age : 24 , 
      gender : "male" ,
      profileimg : "https://tse3.mm.bing.net/th?id=OIP.Jqr4_S2EkYl-6TGDXxUmXAHaE9&pid=Api&P=0&h=180",
      about : "Bio of aman ",
      city: "jind"
    }
  ]; 

  const [currentloggedinuser , setcurrentloggedinuser] = useState("nitin");
  const [users , setusers] = useState(userprofilileeg);      
  const [chatmsg , setchatmsg] = useState([]);
  const [notifications , setnotification] = useState(["Demo"]);   

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout theme={theme} setTheme={setTheme} setoption={setoption} option={option} navop={navop} />}>
            <Route path="asdf" element={<Backendshort setcurrentloggedinuser={setcurrentloggedinuser} />} />
            <Route index element={<Profile theme={theme}               users={users} currentloggedinuser={currentloggedinuser} />} />
            <Route path="editprofile" element={<Profileedit            users={users} setusers={setusers} currentloggedinuser={currentloggedinuser} />} />
            <Route path="social" element={<Socialmedialayout navop={navop} theme={theme} setnavop={setnavop} option={option} /> } >
                  <Route index element={<SocialmediaHome navop={navop} theme={theme} setnavop={setnavop} option={option}                  smpdata={smpdata} />} />
                  <Route path="home" element={<SocialmediaHome navop={navop} theme={theme} setnavop={setnavop} option={option}            smpdata={smpdata} />} />
                  <Route path="chat" element={<SocialmediaChat navop={navop} theme={theme} setnavop={setnavop} option={option}            chatmsg={chatmsg} setchatmsg={setchatmsg} currentloggedinuser={currentloggedinuser} users={users} />} />
                  <Route path="notification" element={<SocialmediaNotification navop={navop} theme={theme} setnavop={setnavop} option={option}        notifications={notifications} />} />
                  <Route path="create" element={<SocialmediaNewpost navop={navop} theme={theme} setnavop={setnavop} option={option}       setsmpdata={setsmpdata} smpdata={smpdata} users={users} currentloggedinuser={currentloggedinuser} notifications={notifications} setnotification={setnotification} />} />
            </Route>
            <Route path="tools" element={<Toolslayout navop={navop} theme={theme} setnavop={setnavop} option={option} /> } >
                  <Route index element={<Todo navop={navop} theme={theme} setnavop={setnavop} option={option}             tddata={tddata} settddata={settddata} />} />
                  <Route path="todo" element={<Todo navop={navop} theme={theme} setnavop={setnavop} option={option}       tddata={tddata} settddata={settddata} />} />
                  <Route path="calculator" element={<Calculator navop={navop} theme={theme} setnavop={setnavop} option={option} />} />
                  <Route path="clock" element={<Clock navop={navop} theme={theme} setnavop={setnavop} option={option} />} />
            </Route>
            <Route path="shop" element={<Shopinglayout navop={navop} theme={theme} setnavop={setnavop} option={option} /> }>
                  <Route index element={<Cart navop={navop} theme={theme} setnavop={setnavop} option={option}             spcart={spcart} setspcart={setspcart} />} />
                  <Route path="cart" element={<Cart navop={navop} theme={theme} setnavop={setnavop} option={option}       spcart={spcart} setspcart={setspcart} />} />
                  <Route path="mens" element={<Mens navop={navop} theme={theme} setnavop={setnavop} option={option}       spdata={spdata} setspcart={setspcart} spcart={spcart}  />} />
                  <Route path="toys" element={<Toys navop={navop} theme={theme} setnavop={setnavop} option={option}       spdata={spdata} setspcart={setspcart} spcart={spcart}  />} />
                  <Route path="food" element={<Food navop={navop} theme={theme} setnavop={setnavop} option={option}       spdata={spdata} setspcart={setspcart} spcart={spcart}  />} />
            </Route>
      </Route>
    )
  );

  return (
    <>
      <div className={`container ${theme}`}>
          <RouterProvider router={router}/>  
      </div>
    </>
  )
}

export default App






