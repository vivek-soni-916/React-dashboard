import React from "react";
import CenterDiv from "./CenterDiv";
import LeftDiv from "./LeftDiv";
import RightDiv from "./RightDiv";
import classes from "./MainComponentContainer.module.css";
import { faBug, faUnlockAlt,faCheckCircle,faCoffee,faDumbbell,faSignOutAlt,faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainComponentContainer() {

  const Rooms = [
    {
      type: "Deluxe Room",
      room_no: 101,
      description: "1 Bed"
    },
    {
      type: "King Room",
      room_no: 102,
      description: "2 King Size Bed "
    },
    {
      type: "Family Room",
      room_no: 103,
      description: "4 Beds"
    },
    {
      type: "Deluxe Room ",
      room_no: 104,
      description: "1 bed"
    },
    {
      type: "King Room",
      room_no: 105,
      description: "2 King Size Bed"
    },
    {
      type: "Family Room",
      room_no: 106,
      description: "4 Beds"
    },
    {
      type: "Deluxe Room ",
      room_no: 107,
      description: "1 bed"
    },
    {
      type: "King Room",
      room_no: 108,
      description: "2 King Size Bed"
    },
    {
      type: " Family Room",
      room_no: 109,
      description: "4 Beds"
    },
    {
      type: "Deluxe Room ",
      room_no: 110,
      description: "1 bed"
    }

  ]

  const Functionality = [
    { icon:  <FontAwesomeIcon icon={faBug}/>, 
      functonality_name :"Dirty",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faDotCircle}/>,
      functonality_name : "Out of Order",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faCheckCircle}/>,
      functonality_name : "Reserved",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faBug}/>,
      functonality_name : "Occupied",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faCoffee}/>,
      functonality_name : "Banquet Events",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faDumbbell}/>,
      functonality_name : "Gym Dirty",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faUnlockAlt}/>,
      functonality_name :"Vacant",
      No_of_Rooms : 0,
      category : "wip"
    },
    {icon:  <FontAwesomeIcon icon={faSignOutAlt}/>,
      functonality_name : "Due Out",
      No_of_Rooms : 0,
      category : "wip"
    }
  ]

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


  return (
    <div>
      <div className={(classes.flex_container)}>
        <div className={classes.flex_item_left}>
          <LeftDiv arrayOfRooms={Rooms} />
        </div>
        <div className={classes.flex_item_center} id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
          <CenterDiv />
        </div>
        <div className={classes.flex_item_right}>
          <RightDiv arrayOfFunctionality = {Functionality}/>
        </div>
      </div>
    </div>
  );
}

export default MainComponentContainer;
