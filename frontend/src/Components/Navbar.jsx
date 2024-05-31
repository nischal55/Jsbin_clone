import Logo from "../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";

function Navbar(props) {
  return (
    <>
      <div className="w-full h-10 bg-zinc-200 border border-gray-500 flex justify-between text-xs text-gray-600">
        <div className="flex text-sm">
          <img src={Logo} alt="" className="h-9 p-1" />
          <div className="p-2">
            <a href="">File</a>
            <IoMdArrowDropdown className="inline-flex mx-2 cursor-pointer" />
            <div className="bg-slate-400 h-16 w-8 absolute">
              <ul>
                <li>
                  <a href="">New</a>
                </li>
                <li>
                  <a href="">Delete</a>
                </li>
              </ul>
            </div>
            <a href="" className="px-2">
              Add Library
            </a>
          </div>
        </div>
        <div className="my-0.5 text-black">
          <button
            className="px-4 py-2 border rounded border-gray-400"
            onClick={props.htmlFunc}
          >
            HTML
          </button>
          <button
            className="px-4 py-2 border rounded border-gray-400"
            onClick={props.cssFunc}
          >
            CSS
          </button>
          <button
            className="px-4 py-2 border rounded border-gray-400"
            onClick={props.jsFunc}
          >
            JavaScript
          </button>
          <button className="px-4 py-2 border rounded border-gray-400">
            Output
          </button>
        </div>
        <div className="text-sm  flex h-6 mt-2 ">
          <LoginPage />
          <Link to="/blogs" className="px-3">
            Blog
          </Link>
          <Link href="" className="px-3">
            Help
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
