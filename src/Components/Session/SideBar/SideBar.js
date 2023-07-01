import { connect } from "react-redux";
import Avatar from "react-avatar";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
          <div>
            <h2>Consort</h2>
            <h4>Realtime Collabration</h4>
          </div>
        </div>
        <div className="collabs">
          <div className="dflex connected">
            <hr />
            <h4>Connected</h4>
            <hr />
          </div>
          <div className="folks">
            {props.connectedUsers.map((obj, index) => {
              return (
                <div key={index} className="dflex">
                  <Avatar name={obj.userName} size="70" round="50%" />
                  <p>{obj.userName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sidebar-bottom">
        <button className="copy-btn btn">Copy Room ID</button>
        <button className="leave-btn btn">LEAVE</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.connectedUsers || [],
  };
};

export default connect(mapStateToProps, {})(SideBar);
