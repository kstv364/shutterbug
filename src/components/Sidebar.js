import React from "react";
import SidebarUser from "./SidebarUser"


export default (props) => {
  const { top5 } = props;
  return (
    <>
      <h6> People you may know </h6>{" "}
      {top5.map((user) => {
        return (
          <SidebarUser key={user.phone_number} user={user}>
          </SidebarUser>
          
        );
      })}
    </>
  );
};
