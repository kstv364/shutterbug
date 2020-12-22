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
import { auth, db } from "./firebase";

const App = () => {
  const top5 = data.slice(0, 5);
  console.log(top5);

  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // the user is logged in
        db.collection("users")
          .doc(authUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              dispatch({
                type: "SET_USER",
                user: doc.data(),
              });
            }
          })
          .catch((err) => console.log(err));
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    const setUp = db.collection("users").onSnapshot((snapshot) => {
      console.log("User doc updated");
      db.collection("users")
        .doc(auth.currentUser?.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            dispatch({
              type: "SET_USER",
              user: doc.data(),
            });
          }
        });
    });

    return () => {
      // any clean up operations go here
      unsubscribe();
      setUp();
    };
  }, []);

  // setInterval(() => {
  //   console.log("USER IS >>", user);
  // }, 3000);
  console.log("USER IS >>", user);
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route
            path="/"
            exact
            render={() => <Home data={data} top5={top5}></Home>}
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
