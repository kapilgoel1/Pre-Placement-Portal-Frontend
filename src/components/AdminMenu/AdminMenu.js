import React from "react";
import { useHistory } from "react-router-dom";
import "./AdminMenu.scss";

function AdminMenu() {
  let history = useHistory();

  return (
    <div className="ocontainer">
      <div class="icontainer">
        <div class="icard" onClick={() => history.push("/createaccount")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Create Account</h3>
            <p>
              You can make accounts of student and admin as you wish. Just fill
              in the basic details and click on create account.
            </p>
          </div>
        </div>

        <div class="icard" onClick={() => history.push("/manageaccounts")}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h3>Manage Account</h3>
            <p>
              All the accounts of faculties and students are displayed here. You
              can also edit the basic information of any acocunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
