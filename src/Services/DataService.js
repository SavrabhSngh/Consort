import { BehaviorSubject } from "rxjs";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import {
  SOCKET_OPTION,
  SOCKET_JOIN,
  SOCKET_JOINED,
  SOCKET_SYNC_CODE,
  SOCKET_CODE_CHANGE,
  SOCKET_DISCONNECTED,
  SOCKET_CONNECTION_ERROR,
  SOCKET_CONNECTION_FAILED,
} from "./Constants";
import { saveConnectedUserData } from "../Store/ConnectedUsers/action";
import { saveEditorData } from "../Store/Editor/action";

export class DataService {
  static socketInstance;
  static ServiceInst = new BehaviorSubject({
    msgType: "Dashboard",
    payLoad: "",
  });

  static SetServiceBehaviour(behaviourOpts) {
    DataService.serviceBehaviour = behaviourOpts;
  }

  static initializeSubscriber(nextHandler, errorHandler) {
    DataService.resetSubscriber();
    DataService.ServiceInst.subscribe(nextHandler, errorHandler);
  }

  static resetSubscriber() {
    if (!DataService.ServiceInst.isStopped) {
      DataService.ServiceInst.complete();
    }
    DataService.ServiceInst = new BehaviorSubject({
      msgType: "",
      payLoad: "",
    });
  }

  static login = async (params) => {
    return "login";
  };

  static initSocket = async () => {
    DataService.socketInstance = await io(
      process.env.REACT_APP_BACKEND_URL,
      SOCKET_OPTION
    );

    DataService.socketInstance.on(SOCKET_CONNECTION_ERROR, (err) =>
      DataService.handleSocketErrors(err)
    );

    DataService.socketInstance.on(SOCKET_CONNECTION_FAILED, (err) =>
      DataService.handleSocketErrors(err)
    );

    DataService.socketInstance.on(SOCKET_JOINED, (param) => {
      DataService.handleSocketJoin(param);
    });

    DataService.socketInstance.on(SOCKET_SYNC_CODE, (param) =>
      DataService.handleSyncCode(param)
    );

    DataService.socketInstance.on(SOCKET_DISCONNECTED, (param) => {
      DataService.handleSocketDisconnect(param);
    });

    const currentUser =
      DataService.serviceBehaviour &&
      DataService.serviceBehaviour.AppStore.getState().currentUser;

    DataService.socketInstance.emit(SOCKET_JOIN, {
      roomID: currentUser.roomID,
      userName: currentUser.username,
    });
  };

  static handleSocketJoin = ({ clients, userName, socketID }) => {
    DataService.serviceBehaviour &&
      DataService.serviceBehaviour.AppStore.dispatch(
        saveConnectedUserData(clients)
      );
    toast.success(`${userName} has joined the room`);
  };

  static handleSocketErrors = (e) => {
    // eslint-disable-next-line
    console.log("socket error", e);
    toast.error("Socket connection failed, try again latter");
    //NAVIGATE_TO_DASHBOARD_USING_PUB_SUB
  };

  static handleSocketDisconnect = ({ socketID, userName }) => {
    // eslint-disable-next-line
    console.log("socket disconnected");
    //RERDIRECT_TO_HOME
  };

  static handleSyncCode = (data) => {
    DataService.serviceBehaviour &&
      DataService.serviceBehaviour.AppStore.dispatch(
        saveEditorData({
          data: data.data,
        })
      );
  };

  static syncData = async (param) => {
    DataService.socketInstance.emit(SOCKET_CODE_CHANGE, {
      data: param,
    });
  };
}
