"use client";

// App.js

import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { Menu } from "antd";
// import { Route, Routes, useNavigate } from "react-router-dom";
import {
  AntCloudOutlined,
  BookOutlined,
  DashboardOutlined,
  DollarOutlined,
  SecurityScanOutlined,
  StarOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Header from "./header/page";
import Link from "next/link";

function App() {
  return (
    // Use the "container" class to set full height for the container
    <>
      <Header />
      <div className="container">
        <Menu
          className="side-bar-items"
          items={[
            {
              label: "Dashboard",
              key: "/",
              icon: (
                <Link href="/dashboard">
                  <DashboardOutlined />
                </Link>
              ),
            },
            {
              label: "User Management",
              key: "/userManagement",
              icon: <UsergroupAddOutlined />,
            },
            {
              label: "Doctor Management",
              key: "/doctorManagement",
              icon: <SecurityScanOutlined />,
            },
            { label: "Bookings", key: "/bookings", 
            icon: (
              <Link href="/bookings">
                <DashboardOutlined />
              </Link>
            ),          },
            {
              label: "Locations",
              key: "/locations",
              icon: <AntCloudOutlined />,
            },
            { label: "Reviews", key: "/reviews", icon: <StarOutlined /> },
            { label: "Earnings", key: "/earnings", icon: <DollarOutlined /> },
          ]}
        ></Menu>
        <div style={{ width: "100%" }}>
          <Content />
        </div>
      </div>
    </>
  );
}

function Content() {
  return (
    <>
      <Link href="/"></Link>
      <Link href="/userManagement"></Link>
      <Link href="/doctorManagement"></Link>
      <Link href="/bookings"></Link>
      <Link href="/locations"> </Link>
      <Link href="/reviews"></Link>
      <Link href="/earnings"></Link>
    </>
  );
}

export default App;
