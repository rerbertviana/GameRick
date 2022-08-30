import React from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const user = {
        name: "Henrique"
    }
  return <AuthContext.Provider value={{}}></AuthContext.Provider>;
};
