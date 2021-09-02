import React  from 'react';
import classes from "./PresentDateGiver.module.css";

function PresentDateGiver(){
    const PresentDate = Date().toLocaleString()
    
    return(
        <div>
            <div className={classes.border}>
                {PresentDate}  
            </div>    
        </div>
    );
}

export default PresentDateGiver;