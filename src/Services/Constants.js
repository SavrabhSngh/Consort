export const SOCKET_JOIN = "join";
export const SOCKET_JOINED = "joined";
export const SOCKET_DISCONNECTED = "disconnected";
export const SOCKET_CODE_CHANGE = "code_change";
export const SOCKET_SYNC_CODE = "sync_code";
export const SOCKET_LEAVE = "leave";
export const SOCKET_CONNECTION_FAILED = "connection_failed";
export const SOCKET_CONNECTION_ERROR = "connection_error";

export const SOCKET_OPTION = {
  "force new connection": true,
  reconnectionAttempt: "10",
  timeout: 10000,
  transport: ["websocket"],
};
