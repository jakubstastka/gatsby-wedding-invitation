import React from "react";

type Props = {
  color: string;
};

const Divider = ({ color }: Props) => (
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
