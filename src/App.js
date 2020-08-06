import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div id="something-important">
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocktail" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
  // return React.createElement("div", { id: "something-important" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cocktail",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  // ]);
};

render(<App />, document.getElementById("root"));
