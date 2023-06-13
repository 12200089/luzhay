import React, {useEffect, useState} from "react";
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import SignUp from "../components/Pages/SignUp";
import SignIn from "../components/Pages/SignIn";
import HomePage from "../pages/Home/Index";

const App = () => {
    const checkAuthenticated = async () => {
        try {
          const res = await fetch("http://localhost:5000/song/verify", {
            method: "POST",
            headers: { jwt_token: localStorage.token }
          });
    
          const parseRes = await res.json();
    
          parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        checkAuthenticated();
      }, []);
    
      const [isAuthenticated, setIsAuthenticated] = useState(false);
    
      const setAuth = boolean => {
        setIsAuthenticated(boolean);
      };

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Login}/>

                        <Route
                            path="/signin"
                            render={props =>
                                !isAuthenticated ? (
                                <SignIn {...props} setAuth={setAuth} />
                                ) : (
                                <Redirect to="/home" />
                                )
                            }
                        />
                        <Route path="/signup" component={SignUp} />
                        <Route
                        path="/home"
                        render={props =>
                                isAuthenticated ? (
                                <Home {...props} setAuth={setAuth} />
                                ) : (
                              <Redirect to="/signin" />
                              )
                            }
                        />

                        <Route path="/admin" component={HomePage}/>
                        
                    </Switch>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

export default App;