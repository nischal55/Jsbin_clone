import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JsbinMain from "./JsbinMain";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <JsbinMain/>,
    },
    {
      path:"/blogs",
      element:<div>Blogs</div>
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
