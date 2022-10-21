/** @format */

import { shallowEqual, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Metrics from "@/pages/metrics";
import Subscribe from "@/pages/subscribe";
import { rootState } from "./type";
import NoData from "@/components/noData";
import Alert from "@/pages/alert";
import { Suspense } from "react";

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
        <Route path='/subscribe' element={<Subscribe />}>
          <Route path=':subscribeId' element={<Subscribe />} />
        </Route>
        <Route path='/alerts' element={<Alert />} />
      </Routes>
    </Suspense>
  );
};
