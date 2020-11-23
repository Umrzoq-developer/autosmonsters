import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const AdminPanelHeader = ({ children }) => {
  
  return (
    <div
      style={{
        width: "90%",
        margin: "150px auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "15%", display: "flex", flexDirection: "column" }}>
        <NavLink
          style={{ textDecoration: "none", height: "30px", textAlign: "left" }}
          activeClassName="adminNav"
          to="/admin-add"
        >
          Add Admin
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", height: "30px", textAlign: "left" }}
          activeClassName="adminNav"
          to="/admin-list"
        >
          Users List
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", height: "30px", textAlign: "left" }}
          activeClassName="adminNav"
          to="/admin-chat"
        >
           Chat
        </NavLink>
      </div>
      <div style={{ width: "75%", marginLeft: "2%" }}>{children}</div>
    </div>
  );
};

export default React.memo(AdminPanelHeader);
