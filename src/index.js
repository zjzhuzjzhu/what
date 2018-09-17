import React from "react";
import ReactDOM from "react-dom";
import { Button, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

const App = () => (
  <div className="App">
    <p>Current antd version: {version}</p>
    <p>Please fork this codesandbox to reproduce your issue.</p>
    <div>
      <Button type="primary">Here is a button</Button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
