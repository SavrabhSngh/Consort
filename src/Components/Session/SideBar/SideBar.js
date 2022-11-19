import Avatar from "react-avatar";
import "./SideBar.css";

const SideBar = () => {
  const avtar = [
    {
      socketId: 1,
      name: "Saurabh Singh",
    },
    {
      socketId: 2,
      name: "Web Socket",
    },
    {
      socketId: 3,
      name: "New Socket",
    },
    {
      socketId: 4,
      name: "No Name",
    },
    {
      socketId: 5,
      name: "MR. Socket",
    },
  ];

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
            {avtar.map((obj) => {
              return (
                <div key={obj.socketId} className="dflex">
                  <Avatar name={obj.name} size="70" round="50%" />
                  <p>{obj.name}</p>
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

export default SideBar;
