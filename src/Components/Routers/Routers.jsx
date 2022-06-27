/* import React, { Suspense } from "react";
import Loader from '../UI/Loader/Loader';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("../Pages/Home"));
const Characters = React.lazy(() => import("../Pages/Characters"));

function Routers() {
  return (
    <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/characters" exact render={() => <Characters />} />
          </Switch>
        </Suspense>
    </Router>
  );
}

export default Routers;
 */