import { Fragment, useState } from "react";
import moment from "moment";
import { events } from "./__tests__/mockData";
import { TimeLineEvent, TimelineType } from "./type";
import "./Timeline.css";
import { EventDetailSidebar } from "../EventDetailSidebar/EventDetailSidebar";

// Group events by group_type
const groupEventsByType = (events: TimeLineEvent[]) => {
  return events.reduce((acc, event) => {
    if (!acc[event.group_type]) acc[event.group_type] = [];
    acc[event.group_type].push(event);
    return acc;
  }, {} as Record<string, TimeLineEvent[]>);
};

export const Timeline = () => {
  const [viewMode, setViewMode] = useState<TimelineType>("week");
  const [currentWeekStart, setCurrentWeekStart] = useState(
    moment().startOf("week")
  );
  const [collapsedGroups, setCollapsedGroups] = useState<{
    [key: string]: boolean;
  }>({});

  const [isFlipped, setIsFlipped] = useState(false);

  const [selectedEvents, setSelectedEvents] = useState<TimeLineEvent[]>([]);

  const toggleGroupCollapse = (groupType: string) => {
    setCollapsedGroups((prev) => ({
      ...prev,
      [groupType]: !prev[groupType],
    }));
  };

  const getWeekDays = () => {
    const days = Array(7)
      .fill(0)
      .map((_, i) => currentWeekStart.clone().add(i, "days"));
    return isFlipped ? days.reverse() : days;
  };

  const handleNextWeek = () => {
    setCurrentWeekStart((prev) =>
      isFlipped
        ? prev.clone().subtract(1, "weeks")
        : prev.clone().add(1, "weeks")
    );
  };

  const handlePrevWeek = () => {
    setCurrentWeekStart((prev) =>
      isFlipped
        ? prev.clone().add(1, "weeks")
        : prev.clone().subtract(1, "weeks")
    );
  };

  const renderCalendar = () => {
    if (viewMode === "week") {
      const weekDays = getWeekDays();
      const groupedEvents = groupEventsByType(events);
      console.log("groupedEvents", groupedEvents);

      return (
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Group</th>
              {weekDays.map((day) => (
                <th key={day.format("YYYY-MM-DD")}>
                  {day.format("ddd")} ({day.format("D/M")})
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupedEvents).map(([groupType, groupEvents]) => (
              <Fragment key={groupType}>
                <tr className="group-row">
                  <td>
                    <strong>{groupType}</strong>
                    <button onClick={() => toggleGroupCollapse(groupType)}>
                      {collapsedGroups[groupType] ? "↑" : "↓"}
                    </button>
                  </td>
                  {!collapsedGroups[groupType] &&
                    weekDays.map((weekDay) => {
                      // Filter events for the current group type and current week day
                      const dayEvents = groupEvents.filter((event) =>
                        moment.unix(event.start_time).isSame(weekDay, "day")
                      );

                      return (
                        <td
                          key={weekDay.format("YYYY-MM-DD")}
                          onClick={() => handleClick(dayEvents)}
                        >
                          {dayEvents.length > 0 ? (
                            // Render only the first event
                            <div className="calendar-event">
                              <button title={dayEvents[0].title}>
                                <i className={`fa ${dayEvents[0].type}`} />
                              </button>
                              {/* Optional: Display event title */}
                              {/* <h4>{dayEvents[0].title}</h4> */}
                              {/* Optional: Display event time */}
                              {/* <p>
                                {moment
                                  .unix(dayEvents[0].start_time)
                                  .format("h:mm a")}{" "}
                                -{" "}
                                {moment
                                  .unix(dayEvents[0].end_time)
                                  .format("h:mm a")}
                              </p> */}
                            </div>
                          ) : (
                            // no events fallback
                            ""
                          )}
                        </td>
                      );
                    })}
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      );
    }
  };

  const handleClick = (events: TimeLineEvent[]) => {
    console.log("Events for this day:", events);
    // Set all events for the clicked day
    setSelectedEvents(events);
  };

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-controls">
          <button onClick={() => setViewMode("week")}>Week View</button>
          <button onClick={() => setViewMode("month")} disabled>
            Month View
          </button>
          <button onClick={() => setViewMode("year")} disabled>
            Year View
          </button>
          <button onClick={() => setIsFlipped((prev) => !prev)}>
            {isFlipped ? "Oldest to Newest" : "Newest to Oldest"}
          </button>
        </div>
        {viewMode === "week" && (
          <div className="week-navigation">
            <button onClick={handlePrevWeek}>←</button>
            <span>
              {currentWeekStart.format("MMMM Do YYYY")} -{" "}
              {currentWeekStart.clone().add(6, "days").format("MMMM Do YYYY")}
            </span>
            <button onClick={handleNextWeek}>→</button>
          </div>
        )}
        <div className="content">
          <div className="calendar">{renderCalendar()}</div>
        </div>
      </div>
      {selectedEvents.length > 0 ? (
        <EventDetailSidebar
          events={selectedEvents}
          handleEventClose={() => setSelectedEvents([])}
        />
      ) : null}
    </>
  );
};
