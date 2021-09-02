import React from "react";
import classes from "./LeftDiv.module.css";
import CommonHeader from "./CommonHeader";

function LeftDiv(props) {

  return (
    <div>
      <CommonHeader argument1 = "Room Types" argument2 = "Room No" />
      <div>
        {props.arrayOfRooms.map((room) => (
          <div key = {room.id} className={classes.hoverable}>
            <div className={classes.border_bottom}>
              <div className={classes.container}>
                <p className={classes.room_name}>{room.type}</p>
                <p className={classes.room_number}>{room.room_no}</p>
              </div>
              <div className={classes.room_description}>{room.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftDiv;
