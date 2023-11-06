import React, { useState } from "react";
import LinkButton from "./LinkButton";
import AccessButton from "./AccessButton";
import { Layout, Menu } from "antd";
import { styled } from "styled-components";
const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      style={{
        background: "#eff2f5",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        justifyItems:'center',
       alignSelf:'center',
        width:'100%',
        height: "4em",
        position:'fixed'
     
      }}
    >
      <span style={{ color: "black", marginRight: "16px" }}>
        Lifespring Center
      </span>
      <LinkButton text="Home" path="/" />
      <LinkButton text="Schedule appointment" path="/schedule-appointment" />
      <LinkButton text="My agenda" path="/my-agenda" />
      <LinkButton text="About us" path="/about-us" />
      <LinkButton text="Pharmacy" path="/pharmacy" />
      <AccessButton text="LOG IN" path="/login" />
      <AccessButton text="SIGN UP" path="/sign-up" />
    </Menu>
  );
};

export default Navbar;
