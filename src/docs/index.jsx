import React from "react";
import { render } from "react-dom";
import DibsClientComponent from "../../lib";

function Demo() {
  return (
    <DibsClientComponent
      dibsServerAddress={'https://dibs.test.tvlk.cloud'}
      username={'dibs'}
    >
      {dibs => JSON.stringify(dibs, null, 4)}
    </DibsClientComponent>
  );
}

render(<Demo />, document.getElementById("app"));
