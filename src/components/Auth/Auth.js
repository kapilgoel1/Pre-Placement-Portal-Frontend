let isAuthenticated;

const Auth = {

    isAuthenticated: false,
    authenticateStudent() {
      isAuthenticated = true;
    },
    authenticateFaculty() {
      isAuthenticated = true;
    },
    signout() {
      isAuthenticated = false;
    },
    authfail() {
      isAuthenticated = false;
    },
    getAuth() {
      return isAuthenticated;
    }  
};

export default Auth;