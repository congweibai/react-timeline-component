import moment from "moment";
import { TimeLineEvent } from "../Timeline/type";
import "./EventDetailSidebar.css";

export const EventDetailSidebar = ({
  events,
  handleEventClose,
}: {
  events: TimeLineEvent[];
  handleEventClose: () => void;
}) => {
  if (events.length === 0) {
    return <div className="sidebar">Select a day to see events</div>;
  }

  return (
    <div className="sidebar">
      <h3>
        <button onClick={handleEventClose}>x</button> Events
      </h3>
      {events.map((event) => (
        <div key={event.id}>
          <h4>{event.title}</h4>
          <p>
            <strong>Type:</strong> {event.group_type}
          </p>
          <p>
            <strong>Start Time:</strong>{" "}
            {moment.unix(event.start_time).format("h:mm a")}
          </p>
          <p>
            <strong>End Time:</strong>{" "}
            {moment.unix(event.end_time).format("h:mm a")}
          </p>
          {event?.description ? <p>{event.description}</p> : null}
        </div>
      ))}
    </div>
  );
};
