import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogNavbar from "../Components/BlogNavbar";

function DetailBlog() {
    const {id} = useParams();
    console.log(id)
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:8000/api/blog/${id}`).then((res) => {
        setBlog(res.data);
      });
    }, []);
    console.log(blogs.createdAt)
    return (
        <>

        <BlogNavbar/>
        <div className="container max-w-[960px] mt-16">
         <h1 className="text-4xl font-bold">
            {blogs.title}
         </h1>
         <p className="text-justify mt-8">
            {blogs.desc}
         </p>
        </div>
          <div className="border border-4 border-amber-300 m-auto w-[720px] p-8 mt-[60px]">
            <h1 className="text-2xl font-bold">
            ❤️Love JS BIN?
            </h1>
            <p className="text-lg mt-4">
            Support this open source project today, and help it continue to run for another decade 🎂
            </p>
          </div>
        </>
    );
}

export default DetailBlog;