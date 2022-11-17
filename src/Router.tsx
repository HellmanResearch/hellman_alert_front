/** @format */

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";
import Metrics from "@/pages/metrics";
import Subscribe from "@/pages/subscribes/addItem";
import Subscribes from "@/pages/subscribes/";
import History from "@/pages/history";
import { rootState } from "./type";
import NoData from "@/components/noData";
import Alert from "@/pages/alert";
import { Suspense, useEffect } from "react";

export default () => {
  const dispath = useDispatch();
  const public_key = useSelector(
    (state: rootState) => state?.user?.public_key,
    shallowEqual
  );

  useEffect(() => {
    if (localStorage.getItem("login")) {
      const data = JSON.parse(localStorage.getItem("login") || "{}");
      dispath({ type: "user/login", payload: data });
    }
  }, []);

  if (!public_key) {
    return <NoData />;
  }
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/metrics' element={<Metrics />} />
        <Route path='/subscribe' element={<Subscribes />} />
        <Route path='/history/:id' element={<History />} />
        <Route path='/subscribe/add' element={<Subscribe />} />
        <Route path='/subscribe/:subscribeId' element={<Subscribe />} />
        <Route path='/alerts' element={<Alert />} />
        <Route path='/*' element={<Metrics />} />
      </Routes>
    </Suspense>
  );
};
