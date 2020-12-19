import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import data from "./assets/data/final.json";
import Home from "./components/Home";
import Login from "./components/Login";
import { Header } from "./components/Header";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Container } from "react-bootstrap";

const App = () => {
  const top5 = data.slice(0, 5);
  console.log(top5);

  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>", user);

  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home user={user} data={data} top5={top5}></Home>}
          ></Route>
          <Route
            path="/profile"
            render={() => <Profile user={data[2]}></Profile>}
          ></Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
