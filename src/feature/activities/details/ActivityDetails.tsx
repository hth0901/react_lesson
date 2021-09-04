import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Grid, GridColumn, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChar";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
// import ActivityDetailedSidebar from "./ActivityDetailedSideBar";

const ActivityDetails = function () {
  console.log("load!!!!");
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) {
    return <LoadingComponent />;
  }

  return (
    // <Card fluid>
    //   <Image
    //     src={`/assets/categoryImages/${activity && activity.category}.jpg`}
    //   />
    //   <Card.Content>
    //     <Card.Header>{activity && activity.title}</Card.Header>
    //     <Card.Meta>
    //       <span className="date">{activity && activity.date}</span>
    //     </Card.Meta>
    //     <Card.Description>{activity && activity.description}</Card.Description>
    //   </Card.Content>
    //   <Card.Content extra>
    //     <Button.Group widths="2">
    //       <Button
    //         as={Link}
    //         to={`/manage/${activity.id}`}
    //         basic
    //         color="blue"
    //         content="Edit"
    //       />
    //       <Button
    //         as={Link}
    //         to="/activities"
    //         basic
    //         color="grey"
    //         content="Cancel"
    //       />
    //     </Button.Group>
    //   </Card.Content>
    // </Card>
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <GridColumn width={6}>
        <ActivityDetailedSidebar />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDetails);
