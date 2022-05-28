import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="A First"
      address="dummy"
      description="the meetup"
    />
  );
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: "m1",
        title: "A First",
        address: "dummy",
        description: "the meetup",
      },
    },
  };
}

export default MeetupDetails;
