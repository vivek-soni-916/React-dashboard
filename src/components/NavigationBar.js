import React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavigationBar.module.css";

function NavigationBar() {
  const handle = useFullScreenHandle();

  return (
    <div>
      <FullScreen handle={handle} >
        <header>
          <nav>
            <ul className={classes.backgroundBlue}>
              <li>
                <a className={classes.whiteFont}>Stay View</a>
              </li>
              <li className={classes.rightAlign}>
                <button
                  onClick={handle.enter}
                  className={(classes.backgroundBlue)}>
                  <FontAwesomeIcon icon={faExpand}/>
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </FullScreen>
    </div>
  );
}

export default NavigationBar;
