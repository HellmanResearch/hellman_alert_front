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
    const data = localStorage.getItem("login");
    if (data && JSON?.parse(data)?.id) {
      axios
        .get(`${defaultUrl}users/users/self`)
        .then((res) => {
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
