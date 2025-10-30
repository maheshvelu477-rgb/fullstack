import './App.css';
import Log from './Front_Page/Login';
import Register from './Front_Page/Register';
import User from './getuser/user';
import Adduser from './adduser/Adduser';
import Update from "./updateproduct/Update";
import Home from "./Front_Page/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Price from './components/Price';
import Gallery  from './pages/Gallery';
import Service from './components/Service';
import Admin from "./Front_Page/Admin";
import Product from './products/product';
import Team from './pages/Team';
import Blog from './pages/Blog';
import Testimonial from './pages/Testimonial';
import Add_products from './products/Add_products';
import View_products from './products/View_products';
import Add_gallery from './products/Add_gallery';
import View_gallery from './products/View_gallery';
import UpdateGallery from "./updategallery/Updategallery"; // create this component
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([// Creates a router object to define app routes.
  
    {
      path: "/",
      element: <Log />,
      },
    {
      path: "/Register",
      element: <Register />,
      },
      {
        path:"/home" ,
        element:<Home />
      },

      {
        path:"/admin" ,
        element:<Admin />
      },
 {
 path: "/user",
 element: <User />,
 },
 {
  path: "/products",
  element: <Product />,
  },
  {
    path: "/add_products",
    element: <Add_products />,
    },
    {
      path: "/all_products",
      element: <View_products />,
      },
      {
      path: "/all_gallery",
      element: <View_gallery />,
      },
      {
      path: "/add_gallery",
      element: <Add_gallery />,
      },
       {
   path:"/update/gallery/:id",
   element:<UpdateGallery />

  },
 {
    path:"/add",
    element:<Adduser />
  },  
  {
    path:"/update/:id",
    element:<Update />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  },
    {
    path:"/gallery",
    element:<Gallery />
  },
   {
    path:"/price",
    element:<Price />
  },
   {
    path:"/service",
    element:<Service />
  },
  {
    path:"/blog",
    element:<Blog />
  },
  {
    path:"/team",
    element:<Team />
  },
  {
    path:"/testimonial",
    element:<Testimonial />
  }
]);

function App() {
  return (
  <div className="App">
  <header className="App-header">
  <RouterProvider router={router} /> 
  </header>
  </div>
  );
  }
  export default App;
  