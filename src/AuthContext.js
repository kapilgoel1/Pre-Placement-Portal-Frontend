import React from 'react'

const AuthContext = React.createContext({loggedin:false, setloggedin : () => {} });

export default AuthContext