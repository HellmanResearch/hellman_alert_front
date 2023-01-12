/** @format */

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import Metrics from "@/pages/metrics";
import Subscribe from "@/pages/subscribes/addItem";
import Subscribes from "@/pages/subscribes/";
import History from "@/pages/history";
import { rootState } from "./type";
import NoData from "@/components/noData";
import Alert from "@/pages/alert";
import Email from "@/pages/email";
import { Suspense, useEffect } from "react";
import { message } from "antd";

export default () => {
  const public_key = useSelector(
    (state: rootState) => state?.user?.public_key,
    shallowEqual
  );
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    const handleAccountsChanged = (accounts: any, other: any) => {
      if (accounts.length === 0 || accounts[0] !== public_key) {
        //退出登录
        dispatch({
          type: "user/login",
          payload: { cancel: true },
        });
      }
    };
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    } else {
      console.log("=不支持钱包");
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  if (!public_key && !location.pathname.includes("confirm")) {
    return <NoData />;
  }
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/metrics' element={<Metrics />} />
        <Route path='/subscribe' element={<Subscribes />} />
        <Route path='/history/:id' element={<History />} />
        <Route path='/confirm/:id/:sign' element={<Email />} />
        <Route path='/subscribe/add' element={<Subscribe />} />
        <Route path='/subscribe/:subscribeId' element={<Subscribe />}>
          <Route path=':sign' element={<Subscribe />}></Route>
        </Route>
        <Route path='/alerts' element={<Alert />}>
          <Route path=':id/:sign' element={<Alert />}></Route>
        </Route>
        <Route path='/*' element={<Metrics />} />
      </Routes>
    </Suspense>
  );
};
