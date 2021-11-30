import React from "react";

import { Typography } from "neetoui/v2";

const Body = ({ note }) => {
  return (
    <>
      <Typography style="body2" className="text-gray-500">
        {note.description}
      </Typography>
      <hr className="my-3" />
    </>
  );
};
export default Body;
