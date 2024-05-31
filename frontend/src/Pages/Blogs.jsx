import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogNavbar from "../Components/BlogNavbar";

function Blogs() {
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/blog").then((res) => {
      setBlog(res.data);
    });
  }, []);
  console.log(blogs);
  return (
    <>
      <BlogNavbar/>
      <div className="container max-w-[960px] mt-12">
        <h1 className="text-4xl font-bold text-primary py-5">
          The JS Bin Blogs
        </h1>
        {blogs.map((blog) => {
          return (
            <>
              <p className="text-base mt-6">
                <span className="pe-4">{blog.createdAt.slice(0, 10)}</span>
                <span className="underline decoration-solid text-blue-700">
                  <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                </span>
              </p>

              <p className="mt-2 truncate ...">{blog.desc}</p>
              <Link
                className="underline decoration-solid text-blue-700"
                to={`/blogs/${blog._id}`}
              >
                Read Post
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Blogs;
