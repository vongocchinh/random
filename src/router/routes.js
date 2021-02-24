import { Route, Switch } from "react-router-dom";

import React, { Component } from "react";
import HomeContainer from "../container/home/home";
class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}
export default routers;
