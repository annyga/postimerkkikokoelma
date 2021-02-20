import {BrowserRouter as Router, Route } from "react-router-dom";
import Etusivu from "./components/Etusivu";
import Selaa from "./components/Selaa";
import Valikko from "./components/Valikko";
import Tiedot from "./components/Tiedot";
import {useState} from "react";





function App() {

  const [indx, setIndx] = useState(0);

  return (
    <Router >
      <Valikko/>
      <Route path="/" exact component={Etusivu}/>
      <Route path="/selaa" render={
        (props) => (<Selaa indx={indx} setIndx={setIndx}/>)
      }/>
      <Route path="/postimerkki/:id" exact component={Tiedot}/>
    </Router>
  );
}

export default App;
