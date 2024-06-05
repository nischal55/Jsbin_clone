import { useState } from "react";
import Logo from "../assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link} from "react-router-dom";


// import LoginPage from "../Pages/LoginPage";

function Navbar(props) {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [mdMenuOpen , setMdMenuOpen] = useState(false);
    const [addFile , setAddFile] = useState(false);

    function toggleMenu(){
      setIsMenuOpen(!isMenuOpen)
    }
    function mdTogggleMenu(){
      setMdMenuOpen(!mdMenuOpen)
      setAddFile(false)
    }
    
    function addToggleMenu(){
      setAddFile(!addFile)
      setMdMenuOpen(false)
    }
    function newFile(){
      window.location.reload();
    }
 
  return (
    <>
      <div className="w-full h-10 bg-zinc-200 border border-gray-500 flex justify-between text-xs text-gray-600">
        <div className={`${isMenuOpen? "translate-x-0 transition-all" : "translate-x-full transition-all"} absolute text-blue-400 font-bold h-screen bg-blue-100 fixed top-0 buttom-0 right-0 w-[50%] md:hidden z-20 `}>
         <button onClick={toggleMenu} className="text-[16px] p-4 ">
           X Dismiss
         </button>
          <ul className="px-4">
            <li className="menu-list"><Link onClick={newFile}>New</Link></li>
            <li className="menu-list"><Link to="/login">Login / Register</Link></li>
            <li className="menu-list"><Link>Blogs</Link></li>
            <li className="menu-list"><Link>About</Link></li>
          </ul>

        </div>
        <div className={`hidden ${mdMenuOpen ? "md:block transition-all" : "md:hidden transition-all"} md:bg-white md:h-32 top-10 w-64 border md:absolute md:z-40`}>
        <ul>
            <li className="menu-list"><Link onClick={newFile}>New</Link></li>
            <li className="menu-list"><Link>Blogs</Link></li>
            <li className="menu-list"><Link>About</Link></li>
          </ul>
        </div>
     
        <div className="flex text-sm">
          <img src={Logo} alt="" className="h-10 p-1" onClick={toggleMenu} />
          <div className="hidden md:block md:p-2">
            <Link href="" className={`px-2 ${mdMenuOpen?"bg-white py-[12px]":"bg-transparent"}`} onClick={mdTogggleMenu}>File
            <IoMdArrowDropdown className={` inline-flex mx-2 cursor-pointer`} />
            </Link>
           
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
        <div className="hidden md:text-sm  md:flex md:h-6 md:mt-2 ">
        <Link className="bg-yellow-400 px-2" to={`/login`}>Login / Register</Link>
          <Link to="/blogs" className="px-3">
            Blog
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
