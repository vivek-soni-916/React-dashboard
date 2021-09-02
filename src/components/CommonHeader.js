import classes from "./CommonHeader.module.css";

function CommonHeader(props) {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.roomType}>{props.argument1}</div>
        <div className={classes.roomNo}>{props.argument2}</div>
      </div>
    </div>
  );
}

export default CommonHeader;
