import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Html from "./Html";
import Blogs from "./Pages/Blogs";
import DetailBlog from "./Pages/DetailBlog";
import LoginPage from "./Pages/LoginPage";
import UserReg from "./Pages/UserReg";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Html/>,
    },
    {
      path:"/blogs",
      element:<Blogs/>
    },
    {
      path:"/blogs/:id",
      element:<DetailBlog/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/userReg",
      element:<UserReg/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
