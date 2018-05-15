import React from "react";
import { render } from "react-dom";
import DibsClientComponent from "../../lib";

function Demo() {
  return (
    <DibsClientComponent
      dibsServerAddress={'http://140.82.29.51:3000'}
      username={'dibs'}
    >
      {dibs => JSON.stringify(dibs, null, 4)}
    </DibsClientComponent>
  );
}

render(<Demo />, document.getElementById("app"));
