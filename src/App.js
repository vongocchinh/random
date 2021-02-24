import Routers from "./router/routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header";

function App(props) {
  return (
    <>
      <Header />
      <Router>
        <Routers />
      </Router>
    </>
  );
}
export default App;
