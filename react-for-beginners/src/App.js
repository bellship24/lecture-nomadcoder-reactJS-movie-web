import {useState, useEffect} from 'react';

function Hello() {
  // const hiFn = () => {
  //   console.log("Hi :)");
  //   return () => {
  //     console.log("Bye :(");
  //   };
  // };
  // useEffect(hiFn, []);
  
  // useEffect(function() {
  //   console.log("Hi :)");
  //   return function() {
  //     console.log("Bye :(");
  //   };
  // }, []);

  useEffect(() => {
    console.log("Hi :)");
    return () => {console.log("Bye :(")};
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      
    </div>
  );
}

export default App;
