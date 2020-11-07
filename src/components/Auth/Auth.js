let isAuthenticated;

const Auth = {

    isAuthenticated: false,
    authenticate() {
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