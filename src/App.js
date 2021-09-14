import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartPage from "./pages/startPage";
import GlobalMenu from "./components/GlobalMenu";
import contactPage from "./pages/contactPage";
import portfolioPage from "./pages/portfolioPage";

function App() {
  return (
    <div className="App">
      <GlobalMenu />
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/contact" component={contactPage} />
        <Route exact path="/portfolio" component={portfolioPage} />
      </Switch>
    </div>
  );
}

export default App;
