import React from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

function AccountStrip(props) {
  const history = useHistory();

  return (
    <div className="filestrip">
      <div className="filestrip__filename">{props.account.email}</div>
      <div className="filestrip__subject">{`${props.account.firstname} ${props.account.lastname}`}</div>
      <div className="filestrip__dateuploaded">{props.account.role}</div>
      <div className="filestrip__action">
        <Button
          className="btn btn-color5 w-100"
          onClick={() => history.push(`editaccount/${props.account._id}`)}
        >
          Edit Account
        </Button>
      </div>
    </div>
  );
}

export default AccountStrip;
