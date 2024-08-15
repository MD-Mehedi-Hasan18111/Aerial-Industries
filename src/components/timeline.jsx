/* eslint-disable react/prop-types */
import "../styles/timeline.css";

const TimelineItem = ({ status, funder }) => (
  <div className="timelineItem">
    <div className="timelineItemContent">
      <span className="tag">{status}</span>
      <time>Feb 2020</time>
      <h3>{status}</h3>
      <h4>{funder}</h4>
      <span className="circle" />
    </div>
  </div>
);

const Timeline = (props) => (
  <div className="timelineContainer">
    {props.timelineData.map((data, idx) => (
      <TimelineItem status={data.status} funder={data.funder} key={idx} />
    ))}
  </div>
);

export default Timeline;
