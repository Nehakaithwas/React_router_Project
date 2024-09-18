import { Outlet, useNavigation } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const AppLayout = ({ children }) => {
const navigation=useNavigation();
console.log(navigation)
if(navigation.state ==="loading") return <h1>Loading........</h1>
  return (
    <div>
      <Header />
        <Outlet />   
      <Footer /> 
      
    </div>
  );
};


