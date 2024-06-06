import BlogNavbar from "../Components/BlogNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
function UserReg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(true);
  const [phone, setContact] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/user", {
        username,
        password,
        email,
        phone,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(e.target.elements.username.value);
    setPassword(e.target.elements.password.value);
    setEmail(e.target.elements.email.value);
    setContact(e.target.elements.contact.value);


    if (username == "") {
      setValidate(false);
    } 
    if (password == "") {
      setValidate(false);
    } 
    if (email == "") {
      setValidate(false);
    }
    if (phone == "") {
      setValidate(false);
    } 
    
  }
  return (
    <>
      <BlogNavbar />
      <div className="grid justify-items-center mt-12">
        <div className="w-[90%] md:w-[30%] border border-slate-300 rounded p-4">
          <h2 className="font-bold text-3xl text-center text-stone-600 p-4">
            User Register
          </h2>
          <form onSubmit={handleSubmit}>
            <label
              className={`${
                validate ? "text-stone-800" : "text-red-600 transition-all"
              }`}
            >
              Username:
            </label>
            <br />
            <input
              type="text"
              className={`w-[99%] h-8 ${
                validate
                  ? "border border-stone-700"
                  : "border border-red-600 transition-all"
              }`}
              name="username"
            />
            <br />

            <label
              className={`${
                validate ? "text-stone-800" : "text-red-600 transition-all"
              }`}
            >
              Password:
            </label>
            <br />
            <input
              type="password"
              className={`w-[99%] h-8 ${
                validate
                  ? "border border-stone-700"
                  : "border border-red-600 transition-all"
              }`}
              name="password"
            />
            <br />

            <label
              className={`${
                validate ? "text-stone-800" : "text-red-600 transition-all"
              }`}
            >
              Email:
            </label>
            <br />
            <input
              type="email"
              className={`w-[99%] h-8 ${
                validate
                  ? "border border-stone-700"
                  : "border border-red-600 transition-all"
              }`}
              name="email"
            />
            <br />

            <label
              className={`${
                validate ? "text-stone-800" : "text-red-600 transition-all"
              }`}
            >
              Contact:
            </label>
            <br />
            <input
              type="number"
              className={`w-[99%] h-8 ${
                validate
                  ? "border border-stone-700"
                  : "border border-red-600 transition-all"
              }`}
              name="phone"
            />
            <br />

            <button
              type="submit"
              to="/userReg"
              className="bg-orange-200 hover:bg-orange-400 hover:transition-all p-2 w-[99%] mt-4 rounded text-white"
            >
              Register{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserReg;
