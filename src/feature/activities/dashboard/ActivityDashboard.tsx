import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

const ActivityDashboard = function () {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry, loadActivities]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading app" />;
  }

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <GridColumn width="6">
        {/* {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />} */}
        {/* <h2>Activity filters</h2> */}
        <ActivityFilters />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
