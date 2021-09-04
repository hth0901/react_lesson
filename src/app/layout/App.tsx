import React from "react";
import "./styles.css";
// import axios from "axios";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../../feature/home/HomePage";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
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
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => {
          return (
            <React.Fragment>
              <NavBar />
              <Container style={{ marginTop: "7em" }}>
                <Route exact path="/activities" component={ActivityDashboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
              </Container>
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

export default observer(App);
