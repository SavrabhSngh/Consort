import { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import "./CodeEditer.css";
import _ from "lodash";
import { connect } from "react-redux";
import { DataService } from "../../../Services/DataService";

const CodeEditor = (props) => {
  const editorRef = useRef();

  useEffect(() => {
    init();

    editorRef.current.on("change", (instance, changes) => {
      const { origin } = changes;
      if (origin !== "setValue") {
        const value = instance.getValue();
        DataService.syncData(value);
      }
    });
  }, []);

  useEffect(() => {
    if (!_.isEmpty(props.editorData)) {
      editorRef.current.setValue(props.editorData);
    }
  }, [props.editorData]);

  async function init() {
    editorRef.current = Codemirror.fromTextArea(
      document.querySelector(".code-editor"),
      {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      }
    );
  }

  return <textarea className="code-editor"></textarea>;
};

const mapStateToProps = (state) => {
  return {
    editorData: state.editorData?.data || "",
  };
};

export default connect(mapStateToProps, {})(CodeEditor);
