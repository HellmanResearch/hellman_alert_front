/** @format */

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Router from "./Router";
import "./index.less";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { defaultUrl } from "./contanst";

const { Content } = Layout;

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    if (window?.ethereum) {
      window?.ethereum.on("accountsChanged", function (accounts: any) {
        // Time to reload your interface with accounts[0]!
      });
      window?.ethereum.on("connect", (connectInfo: any) => {});
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("login")) {
      axios
        .get(`${defaultUrl}users/users/self`)
        .then((res) => {
          console.log("===3", res);
          dispath({ type: "user/login", payload: res.data });
        })
        .catch((err) => {
          dispath({ type: "user/login", payload: { cancel: true } });
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout className='ssv-page'>
        <Header />
        <Content>
          <Router />
        </Content>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default React.memo(App);
