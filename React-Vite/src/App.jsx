import Card from "./Components/Card/Card";
import { useState } from "react";

const App = () => {
  const [] = useState([
    {
      name: "David",
      age: 20,
      number: "01221026369",
    },
    {
      name: "Demo",
      age: 19,
      number: "01047973644",
    },
    {
      name: "Mathew",
      age: 18,
      number: "01246753767",
    },
  ]);

  return (
    <>
      <h1>Boys Data</h1>
      <Card nameList={boys} />
    </>
  );
};

export default App;
