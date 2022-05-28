import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First"
      address="dummy"
      description="the meetup"
    />
  );
}

export default MeetupDetails;
