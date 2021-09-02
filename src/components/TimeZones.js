import classes from "./TimeZones.module.css";
function TimeZones(props) {
  return (
    <div>
    <div>
        {props.Zones.map((Zone) => (
          <div className={classes.inline}>{Zone}</div>
        ))}
      </div>
    </div>
  );
}

export default TimeZones;
