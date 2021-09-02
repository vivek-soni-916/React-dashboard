import React from "react";
import CommonHeader from "./CommonHeader";
import classes from "./RightDiv.module.css";

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function RightDiv(props) {

    return (
    <div>
      <CommonHeader argument1="Status" argument2="Room No" />
      {props.arrayOfFunctionality.map((functionalities) => (
        <div className={classes.hoverable} draggable="true" ondragstart="drag(event)" id="drag1">
          <div className={classes.border_bottom}>
            <div className={classes.container}>
              <p className={classes.functionality_name}>{functionalities.icon} {functionalities.functonality_name}</p>
              <p className={classes.functionality_number}>{functionalities.No_of_Rooms}</p>
            </div> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightDiv;
