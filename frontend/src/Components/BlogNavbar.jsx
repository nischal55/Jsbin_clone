import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Logo from "../assets/logo.svg";
function BlogNavbar() {
    return (
        <>
            <div className="w-full bg-zinc-200 p-4 flex justify-between">
                <div >
                <Link className="font-bold bg-white p-2 h-8 text-sm inline-flex text-center ms-32" to={`/`}>
                <FaArrowLeftLong/>
                <img src={Logo} alt="" className="h-6 me-2 pb-1"  />
                    Return To JS BIN</Link>
                </div>
                <div className="text-sm font-bold me-32 py-2">
                <Link className="px-4" to={`/blogs`}> Blogs</Link>
                <Link className="px-4">Help</Link>
                </div>
            </div>
        </>
    );
}

export default BlogNavbar;