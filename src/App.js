//  i started this project on 25th april

import {Routes,Route} from 'react-router-dom'

import Home from './routes/home/home.compopnet';
import SignIn from './routes/signin/sign-in.component';
import Navigation from './routes/navigation/Navigation.component';
const Shop = () => {

return(
<div><h1> i am shop page</h1></div>


)

}
const App = () => {
 

  return (

    <>
    
    
    
       <Routes>  
       <Route path='/' element={<Navigation/>}>   
           <Route index element={<Home/>}/>
           <Route path='shop' element ={<Shop/>} />
           <Route path='SignIn' element ={<SignIn/>} />
   </Route>
  
  </Routes>
  </>
 
 
  );
};

export default App;