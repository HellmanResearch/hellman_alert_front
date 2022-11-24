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
import Email from "@/pages/email";
import { Suspense, useEffect } from "react";

export default () => {
  const public_key = useSelector(
    (state: rootState) => state?.user?.public_key,
    shallowEqual
  );

  if (!public_key) {
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
