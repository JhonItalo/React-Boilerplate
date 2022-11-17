import React from "react";
import GlobalStyle from "./styles/Global";
import Theme from "./styles/Themes";

function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <div className="App">teste</div>
      </Theme>
    </>
  );
}

export default App;
