import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StearmList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={StearmList} />
          <Route path="/sreams/new" component={StreamCreate} />
          <Route path="/sreams/edit" component={StreamEdit} />
          <Route path="/sreams/delete" component={StreamDelete} />
          <Route path="/sreams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
