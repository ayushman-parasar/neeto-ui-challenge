import React from "react";

import { Typography, Dropdown } from "neetoui/v2";
import { MenuVertical } from "neetouiIcons";

const Header = ({ note, setIsDeleteAlertOpen }) => {
  return (
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
        <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default Header;
