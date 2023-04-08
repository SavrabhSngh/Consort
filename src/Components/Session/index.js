import "./Session.css";
import SideBar from "./SideBar/SideBar";
import CodeEditor from "./CodeEditer/CodeEditer";
import { useEffect } from "react";
import { DataService } from "../../Services/DataService";

const Session = () => {
  useEffect(() => {
    DataService.initSocket();
  }, []);

  return (
    <div className="session">
      <div className="session-left">
        <SideBar />
      </div>
      <div className="session-right">
        <CodeEditor />
      </div>
    </div>
  );
};

export default Session;
