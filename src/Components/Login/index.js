import Footer from "../Common/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import toast from "react-hot-toast";
import _ from "lodash";
import "./login.css";

const Login = () => {
  const [roomID, setRoomID] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (event) => {
    event.preventDefault();
    const id = v4();
    setRoomID(id);
    toast.success("Created a new room");
  };

  const handleJoin = () => {
    localStorage.setItem("token", roomID);
    if (_.isEqual(roomID, "") || _.isEqual(userName, "")) {
      toast.error("Room ID and Username is required");
      return;
    }
    navigate(`/session/${roomID}`);
  };

  const handleEnter = (event) => {
    if (_.isEqual(event.code, "Enter")) {
      handleJoin();
    }
  };

  return (
    <div className="login dflex">
      <div className="form">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <div>
            <h2>Consort</h2>
            <h4>Realtime Collabration</h4>
          </div>
        </div>
        <h4 className="label">Paste invitation ROOM ID</h4>
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="ROOM ID"
            value={roomID}
            onChange={(event) => setRoomID(event.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="USERNAME"
            value={userName}
            onKeyUp={handleEnter}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button onClick={handleJoin} className="join-btn btn">
            JOIN
          </button>
          <span className="room-info">
            {" "}
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom}>new room</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
