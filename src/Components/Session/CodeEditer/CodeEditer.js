import { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "./CodeEditer.css";

const CodeEditor = () => {
  async function init() {
    Codemirror.fromTextArea(document.querySelector(".saurabh"), {
      mode: { name: "javascript", json: true },
      theme: "dracula",
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
    });
  }
  useEffect(() => {
    init();
  }, []);

  return <textarea className="saurabh"></textarea>;
};

export default CodeEditor;
