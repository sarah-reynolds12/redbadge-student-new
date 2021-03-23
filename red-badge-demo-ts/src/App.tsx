import React from "react";
import PropsExample from "./components/PropsExample"
import PropsMapping from "./components/PropsMapping"

function App() {
  const visitedPlaces = ["Hawaii", "Ireland", "Mexico", "Bahamas", "London", "Dominican Republic"]
  return <div>
    <PropsExample name = "Tom" business ="MySpace" />
    <PropsMapping visited= {visitedPlaces} />
  </div>;
}

export default App;
