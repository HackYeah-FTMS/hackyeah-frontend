import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";
import ResultsPage from "./pages/ResultsPage";
import HomePage from "./pages/HomePage";

const ZeroWasteApp = () => {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <Switch>
          <Route path="/questions" component={QuestionsPage} />
          <Route path="/result" component={ResultsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default ZeroWasteApp;
