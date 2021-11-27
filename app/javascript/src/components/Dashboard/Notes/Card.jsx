import React from "react";

import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui/v2";
import { MenuVertical, Clock } from "neetouiIcons";

import { IMAGEURL } from "components/Common/Sidebar/constants";

const Card = ({ note, setShowDeleteAlert }) => {
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
          user={{ name: "Oliver Smith", imageUrl: IMAGEURL }}
          size="small"
          className="ml-1"
        />
      </div>
    );
  };

  return (
    <div className="neeto-ui-shadow-xs border my-4 p-4">
      <div className="flex justify-between">
        <Typography className="" style="h4" weight="semi-bold">
          {note.title}
        </Typography>
        <Dropdown
          buttonProps={{
            onClick: function noRefCheck() {},
            className: "bg-white text-gray-500",
          }}
          buttonStyle="text"
          onClose={function noRefCheck() {}}
          position="bottom-end"
          icon={MenuVertical}
        >
          <li>Edit</li>
          <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
        </Dropdown>
      </div>
      <Typography style="body2" className="text-gray-500">
        {note.description}
      </Typography>
      <hr className="my-3" />
      <div className="flex justify-between">
        <Tag
          label="Getting Started"
          disabled="true"
          className="text-gray-500 bg-gray-50 border text"
        />
        <TimeStamp />
      </div>
    </div>
  );
};

export default Card;
