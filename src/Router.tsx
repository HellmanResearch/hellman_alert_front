/** @format */

import { shallowEqual, useSelector } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import Metrics from "@/pages/metrics";
import Subscribe from "@/pages/subscribe";
import { rootState } from "./type";
import NoData from "@/components/noData";
import Alert from "@/pages/alert";
import { Suspense } from "react";

export default () => {
  const account = useSelector(
    (state: rootState) => state?.user.account,
    shallowEqual
  );

  //   if (!account) {
  //     return <NoData />;
  //   }
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path='/metrics' element={<Metrics />} />
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/alerts' element={<Alert />} />
      </Switch>
    </Suspense>
  );
};
