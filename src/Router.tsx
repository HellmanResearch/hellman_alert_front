/** @format */

import { Routes as Switch, Route } from "react-router-dom";
import Metrics from "../src/pages/metrics";

export default () => {
  return (
    <Switch>
      <Route path='/metrics' element={<Metrics />} />
      <Route path='/*' element={<Metrics />} />
    </Switch>
  );
};
