import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import FindWork from './Components/FindWork/FindWork';
import FindFreelancers from './Components/FindFreelancers/FindFreelancers';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';


const routers = createBrowserRouter([
  { path: 'admin-dashboard', element: <AdminDashboard /> },
  {path:'' , element:<Layout /> , children : [
    {index:true , path:'/' , element: <Login />},
    {path:'sign-up' , element: <Signup />},
    {path:'home' , element: <Home />},
    {path:'market-place' , element: <FindWork />},
    {path:'find-freelancers' , element: <FindFreelancers />},
    {path:'cart' , element: <Cart />},
    {path:'profile' , element: <Profile />},
  ]}
])




export default function App() {

  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}


