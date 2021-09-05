import React from "react";
import "./styles.css";
// import axios from "axios";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation, Switch } from "react-router-dom";
import HomePage from "../../feature/home/HomePage";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import TestErrors from "../../feature/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../feature/errors/NotFound";
import ServerError from "../../feature/errors/ServerError";
// import { observe } from "mobx";

function App() {
  // const { activityStore } = useStore();

  // useEffect(() => {
  //   // agent.Activities.list()
  //   axios
  //     .get<Activity[]>("http://localhost:5000/api/activities")
  //     .then((response) => {
  //       // console.log(response);
  //       setActivities(response.data);
  //     });
  // }, []);

  const location = useLocation();

  return (
    <React.Fragment>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <React.Fragment>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Switch>
                  <Route
                    exact
                    path="/activities"
                    component={ActivityDashboard}
                  />
                  <Route path="/activities/:id" component={ActivityDetails} />
                  <Route
                    key={location.key}
                    path={["/createActivity", "/manage/:id"]}
                    component={ActivityForm}
                  />
                  <Route path="/errors" component={TestErrors} />
                  <Route path="/server-error" component={ServerError} />
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

export default observer(App);
