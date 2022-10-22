import "./flightTimeStyle.scss";

function FlightTimeStyle({ time }) {
  return (
    <div className="wraperTime">
      <div className="flightTime">{time}</div>
    </div>
  );
}
export default FlightTimeStyle;
