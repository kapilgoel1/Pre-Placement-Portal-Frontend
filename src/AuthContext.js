import React from "react";

const AuthContext = React.createContext({
  user: {},
  setuser: () => {},
});

export default AuthContext;
