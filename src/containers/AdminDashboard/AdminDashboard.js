import React, { useEffect } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import AdminEditProfile from "../../components/AdminEditProfile/AdminEditProfile";
import CreateAccount from "../../components/CreareAccount/CreateAccount";

const AdminDashboard = (props) => {
  // let { path } = useRouteMatch();

  const history = useHistory();
  let path = "/studentdashboard";

  useEffect(() => {
    history.replace(path);
  });

  return (
    <div>
      <AdminNavBar />
      <Switch>
        <Route path={`${path}/editprofile`}>
          <AdminEditProfile />
        </Route>
        <Route path={`${path}/createaccount`}>
          <CreateAccount />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminDashboard;
