/** @format */

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Router from "./Router";
import "./index.less";
import { useEffect } from "react";

const { Content } = Layout;

function App() {
  useEffect(() => {
    window.ethereum.on("accountsChanged", function (accounts: any) {
      console.log("====3", accounts);
      // Time to reload your interface with accounts[0]!
    });
    window.ethereum.on("connect", (connectInfo: any) => {
      console.log("--connectInfo--3");
    });
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

export default App;
