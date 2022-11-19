import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Session from "./Components/Session";
import NoMatch from "./Components/Common/NoMatch/NoMatch";
import "./App.css";

import { Toaster } from "react-hot-toast";

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/session/:roomId" element={<ProtectedRoute />}>
            <Route path="" element={<Session />} />
          </Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
