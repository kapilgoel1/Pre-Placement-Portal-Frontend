import React from 'react'

const AuthContext = React.createContext({loggedin:false, userRole:'student', setloggedin : () => {} });

export default AuthContext