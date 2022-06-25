import React from "react";

const Divider = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      marginTop: 10,
    }}
  />
);

export default Divider;
