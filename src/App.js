import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "./pages/startPage";
import GlobalMenu from "./pages/GlobalMenu";

function App() {
  return (
    <div className="App">
      <GlobalMenu />
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
    </div>
  );
}

export default App;
