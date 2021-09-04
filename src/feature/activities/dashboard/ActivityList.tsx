import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityListItem from "./ActivityListItem";

const ActivityList = function () {
  const { activityStore } = useStore();
  const { activitiesByDate, groupActivities } = activityStore;

  return (
    <React.Fragment>
      {groupActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          <Segment>
            <Item.Group divided>
              {activities.map((activity) => (
                <ActivityListItem key={activity.id} activity={activity} />
              ))}
            </Item.Group>
          </Segment>
        </Fragment>
      ))}
    </React.Fragment>
    // <Segment>
    //   <Item.Group divided>
    //     {activitiesByDate.map((activity) => (
    //       <ActivityListItem key={activity.id} activity={activity} />
    //     ))}
    //   </Item.Group>
    // </Segment>
  );
};

export default observer(ActivityList);
