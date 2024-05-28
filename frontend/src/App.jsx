import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JsbinMain from "./JsbinMain";
import Blogs from "./Pages/Blogs";
import LoginPage from "./Pages/LoginPage";
import DetailBlog from "./Pages/DetailBlog";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <JsbinMain/>,
    },
    {
      path:"/blogs",
      element:<Blogs/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/blogs/:id",
      element:<DetailBlog/>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
