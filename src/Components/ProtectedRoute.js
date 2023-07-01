import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

const ProtectedRoute = (props) => {
  return !_.isEmpty(props.roomID) ? <Outlet /> : <Navigate to="/" />;
};

const mapStateToProps = (state) => {
  return {
    roomID: state.currentUser?.roomID || "",
  };
};

export default connect(mapStateToProps, {})(ProtectedRoute);
