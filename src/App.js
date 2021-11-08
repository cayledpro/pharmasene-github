import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
//import MasterLayout from "./layouts/admin/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import AdminPrivateRoute from "./AdminPrivateRoute";
import axios from "axios";
import PharmaciesView from "./components/frontend/Pharmacies/PharmaciesView";
import MedicamentsView from "./components/frontend/Medicaments/MedicamentsView";
import { Container } from "react-bootstrap";
import Header from "./layouts/frontend/Header";
import ClassesTherapeutiquesView from "./components/frontend/ClassesTherapeutiques/ClassesTherapeutiquesView";
import ConseilsView from "./components/frontend/Conseils/ConseilsView";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://senepharma-api.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Container className="mt-5" id="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/pharmacies"
                            component={PharmaciesView}
                        />
                        <Route
                            exact
                            path="/medicaments"
                            component={MedicamentsView}
                        />
                        <Route
                            exact
                            path="/classes-therapeutiques"
                            component={ClassesTherapeutiquesView}
                        />
                        <Route
                            exact
                            path="/conseils"
                            component={ConseilsView}
                        />
                        {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> */}
                        <Route path="/login">
                            {localStorage.getItem("auth_token") ? (
                                <Redirect to="/" />
                            ) : (
                                <Login />
                            )}
                        </Route>
                        <Route path="/register">
                            {localStorage.getItem("auth_token") ? (
                                <Redirect to="/" />
                            ) : (
                                <Register />
                            )}
                        </Route>

                        {/* <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
            component={MasterLayout}
          /> */}
                        <AdminPrivateRoute path="/admin" name="Admin" />
                    </Switch>
                </Container>
            </Router>
        </div>
    );
}

export default App;
