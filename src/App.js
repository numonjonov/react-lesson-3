import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SerachParams";


const App = () => {
  return (
    <div>
      <h1 className="title">Hello</h1>
      <Pet name="hatiko" animal="dog" breed="bone" />
      <SearchParams />
    </div>
  )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));