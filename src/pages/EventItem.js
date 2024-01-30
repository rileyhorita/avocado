
const EventItem = ({ eventName, date }) => {
    return (
      <div className="event-item1">
        <p>
          <b>{eventName}</b>
        </p>
        <p className="date">{date}</p>
    </div>
    );
  };
  
  export default EventItem;