import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function Html() {
  const [outputcode, setoutputcode] = useState("");
  const [cssCode, setCss] = useState("");
  const [jsCode, setJs] = useState("");
  const [htmlDisplay, setHtmlDisplay] = useState("block");
  const [cssDisplay, setCssDisplay] = useState("block");
  const [jsDisplay, setJsDisplay] = useState("block");


  let htmlCode =
    "<html>\n<head>\n<title></title>\n </head>\n <body>\n</body>\n</html>";

  function handleEditorChange(value) {
    setoutputcode(value);
  }
  function handleEditorChangeCss(value) {
    setCss(value);
  }
  function handleEditorChangeJs(value) {
    setJs(value);
  }
  function htmlDispChng() {
    if (htmlDisplay == "block") {
      setHtmlDisplay("hidden");
    } else {
      setHtmlDisplay("block");
    }
  }
  function cssDispChng() {
    if (cssDisplay == "block") {
      setCssDisplay("hidden");
    } else {
      setCssDisplay("block");
    }
  }
  function jsDispChng() {
    if (jsDisplay == "block") {
      setJsDisplay("hidden");
    } else {
      setJsDisplay("block");
    }
  }

  return (
    <>
      <Navbar
        className=" z-50"
        htmlFunc={htmlDispChng}
        cssFunc={cssDispChng}
        jsFunc={jsDispChng}
      />

      <div className="flex grid grid-cols-* z-0">
        <div
          className={`border md:grid md:grid-cols-4 grid grid-cols-1`}
        >
          <div className={`${htmlDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">HTML</p>
            <Editor
              height="90vh"
              defaultLanguage="html"
              defaultValue={htmlCode}
              theme="light"
              onChange={handleEditorChange}
            />
          </div>

          <div className={`${cssDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">CSS</p>
            <Editor
              height="90vh"
              defaultLanguage="css"
              defaultValue=""
              theme="light"
              onChange={handleEditorChangeCss}
            />
          </div>
          <div className={`${jsDisplay}`}>
            <p className="text-sm text-sky-400 p-2 px-4">Javascript</p>
            <Editor
              height="90vh"
              defaultLanguage="javascript"
              defaultValue=""
              theme="light"
              onChange={handleEditorChangeJs}
            />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-bold p-2 px-4">Output</p>
            <iframe
              className="h-screen w-full"
              srcDoc={`<style>${cssCode}</style> ${outputcode} <script>${jsCode}</script>`}
            ></iframe>
          </div>
        </div>

        <div className="border"></div>
      </div>
    </>
  );
}

export default Html;
