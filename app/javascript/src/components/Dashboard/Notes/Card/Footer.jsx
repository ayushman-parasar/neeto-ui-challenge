import React from "react";

import { Tag, Tooltip, Avatar, Typography } from "neetoui/v2";
import { Clock } from "neetouiIcons";

import { IMAGEURL } from "components/Common/Sidebar/constants";
import { useUserState } from "contexts/user";

const Footer = () => {
  const { user } = useUserState();

  const TimeStamp = () => {
    return (
      <div className="flex items-center">
        <Clock size={14} color="#68737d" />
        <Tooltip position="bottom" content={"Wednesday, 10:30AM"}>
          <Typography style="body2" className="text-gray-500 px-1">
            Created 2 hours ago
          </Typography>
        </Tooltip>
        <Avatar
          user={{
            name: `${user.first_name} ${user.last_name}`,
            imageUrl: IMAGEURL,
          }}
          size="small"
          className="ml-1"
        />
      </div>
    );
  };
  return (
    <div className="flex justify-between">
      <Tag
        label="Getting Started"
        disabled="true"
        className="text-gray-500 bg-gray-50 border text"
      />
      <TimeStamp />
    </div>
  );
};
export default Footer;
