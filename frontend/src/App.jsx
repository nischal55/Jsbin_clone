import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Html from "./Html";
import Blogs from "./Pages/Blogs";
import DetailBlog from "./Pages/DetailBlog";


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
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
