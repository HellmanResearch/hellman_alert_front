/** @format */

import { shallowEqual, useSelector } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import Metrics from "../src/pages/metrics";
import { rootState } from "./store/type";
import NoData from "@/components/noData";

export default () => {
  const account = useSelector(
    (state: rootState) => state?.user.account,
    shallowEqual
  );

  if (!account) {
    return <NoData />;
  }
  return (
    <Switch>
      <Route path='/metrics' element={<Metrics />} />
      <Route path='/*' element={<Metrics />} />
    </Switch>
  );
};
