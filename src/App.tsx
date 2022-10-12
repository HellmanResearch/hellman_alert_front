/** @format */

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/header";
import "./index.less";
const { Footer, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Content>
          <Router />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
