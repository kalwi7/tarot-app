import classes from "./index.module.css";
import Cards from "./components/Cards";
import Results from "./components/Results";

function App() {
  return (
    <div className={classes.wrapper}>
      <Cards />
      <Results />
    </div>
  );
}

export default App;
