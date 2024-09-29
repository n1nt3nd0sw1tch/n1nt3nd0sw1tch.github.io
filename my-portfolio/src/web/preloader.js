import React from "react";

function Pre(props) {
  return (
    // The component returns a div element whose id is dynamically set
    // based on the value of the 'load' prop passed to the component.
    // If 'props.load' is true, the div's id is set to "preloader".
    // If 'props.load' is false, the div's id is set to "preloader-none".
    <div id={props.load ? "preloader" : "preloader-none"}></div>
  );
}

export default Pre;
