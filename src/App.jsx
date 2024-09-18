import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {About} from '../src/pages/About'
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Movies } from "./pages/Movies";
import {ErrorPage} from "./pages/ErrorPage"
import { AppLayout } from "./components/layouts/AppLayout";
import {getApiMovies} from "./api/getApiMovies"
import { MoviesDetails } from "./components/UI/MovieDetails";
import {getApiMoviesDetails} from './api/getApiMoviesDetails'
import {contactData} from './pages/Contact'





const App =()=>{
  const router=createBrowserRouter([
   
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element:<Home />
         },
         {
           path:"/about",
           element:<About />
     
         },
         {
           path:"/contact",
           element:<Contact />,
           action:contactData
           
         },
         {
           path:"/movies",
           element:<Movies />,
           loader:getApiMovies
      
         },
         {
          path:"/movies/:moviesId",
          element:<MoviesDetails />,
          loader:getApiMoviesDetails,

         }
    
      ]

    },
   
  
  ]);
  // RouterProvide is a contextAPi and router is a propes of Router Provider Component
  return <RouterProvider router={router}/>
}
export default App;