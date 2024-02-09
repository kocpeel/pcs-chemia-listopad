import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import "./components/Blob/Blob";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kocpeel/sciagaFiles/main/chemia/luy.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div id="jsonRender">
        {data && (
          <>
            <h1 className="dzial">{data.dzial}</h1>
            {Object.values(data.tematy).map((temat, index) => (
              <div key={index}>
                <h2 className="nazwaTematu">{temat.nazwaTematu}</h2>
                <span className="description">{temat.description}</span>
                {temat.img && <img src={temat.img} />}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default App;
