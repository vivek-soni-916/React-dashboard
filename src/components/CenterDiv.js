import PresentDateGiver from "./PresentDateGiver";
import TimeZones from "./TimeZones";

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

function CenterDiv() {
  const time = ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00", "4:00", "5:00"];

  
  return (
    <div>
      <PresentDateGiver />
      <TimeZones Zones = {time}/>
     
    </div>
  );
}

export default CenterDiv;
