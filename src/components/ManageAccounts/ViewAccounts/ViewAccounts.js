import React, { useState, useEffect } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import AccountStrip from "../AccountStrip/AccountStrip";

function ViewAccounts() {
  const [accounts, setAccounts] = useState([]);

  const [searchField, setSearchField] = useState("");
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    let url = new URL("http://localhost:4000/manageusers/retrieve");
    if (accountType !== "") url.searchParams.append("role", accountType);
    if (searchField !== "") url.searchParams.append("username", searchField);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        setAccounts(result.userlist);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accountType, searchField]);

  return (
    <>
      <h1 className="text-center mb-4 pb-3 text-primary">Accounts</h1>
      <div className="filepage">
        <div className="filepage__filters">
          <div className="filepage__filters__box">
            <h3>Filters</h3>
            <FormGroup>
              <Label>UserName</Label>
              <Input
                type="search"
                placeholder="Search User By Name"
                onChange={(e) => {
                  setSearchField(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label>Choose Account Type</Label>
              <Input
                type="select"
                value={accountType}
                onChange={(e) => {
                  setAccountType(e.target.value);
                }}
              >
                <option value="">All Accounts</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="admin">Admin</option>
              </Input>
            </FormGroup>
          </div>
        </div>

        <div className="filepage__files">
          <FormGroup>
            <div className="studentstrip-header">
              <div className="studentstrip-header__id">
                <h5>ID</h5>
              </div>
              <div className="studentstrip-header__name">
                <h5>NAME</h5>
              </div>
              <div className="studentstrip-header__name">
                <h5>Account Type</h5>
              </div>
              <div className="studentstrip-header__name">
                <h5>Edit Account</h5>
              </div>
            </div>

            {accounts.map((account) => (
              <AccountStrip key={account._id} account={account} />
            ))}
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default ViewAccounts;
