import { BehaviorSubject } from "rxjs";
import { io } from "socket.io-client";
import { toast } from "react-hot-toast";
import {
  SOCKET_JOIN,
  SOCKET_JOINED,
  SOCKET_CONNECTION_ERROR,
  SOCKET_CONNECTION_FAILED,
} from "./Constants";

export class DataService {
  static socketInstance;
  static ServiceInst = new BehaviorSubject({
    msgType: "Dashboard",
    payLoad: "",
  });

  static initializeSubscriber(nextHandler, errorHandler) {
    DataService.resetSubscriber();
    DataService.ServiceInst.subscribe(nextHandler, errorHandler);
  }

  static resetSubscriber() {
    if (!DataService.ServiceInst.isStopped) {
      DataService.ServiceInst.complete();
    }
    DataService.ServiceInst = new BehaviorSubject({
      msgType: "Dashboard",
      payLoad: "",
    });
  }

  static login = async (params) => {
    return "login";
  };

  static initSocket = async () => {
    const options = {
      "force new connection": true,
      reconnectionAttempt: "10",
      timeout: 10000,
      transport: ["websocket"],
    };

    DataService.socketInstance = await io(
      process.env.REACT_APP_BACKEND_URL,
      options
    );

    DataService.socketInstance.on(SOCKET_CONNECTION_ERROR, (err) =>
      DataService.handleSocketErrors(err)
    );

    DataService.socketInstance.on(SOCKET_CONNECTION_FAILED, (err) =>
      DataService.handleSocketErrors(err)
    );

    DataService.socketInstance.emit(SOCKET_JOIN, {
      roomID: localStorage.getItem("token"),
      userName: "SAVRABH",
    });

    DataService.socketInstance.on(SOCKET_JOINED, (data) =>
      console.log("data", data)
    );
  };

  static handleSocketErrors = (e) => {
    // eslint-disable-next-line
    console.log("socket error", e);
    toast.error("Socket connection failed, try again latter");
  };
}
