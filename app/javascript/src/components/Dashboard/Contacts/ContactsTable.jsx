import React, { useState } from "react";

import { Table, Dropdown, Avatar, Typography } from "neetoui/v2";
import { MenuHorizontal } from "neetouiIcons";

const ContactsTable = ({ setShowDeleteAlert, contacts }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <Table
      columnData={[
        {
          dataIndex: "name",
          key: "name",
          render: (name, data) => {
            return (
              <div className="flex items-center">
                <Avatar
                  size="large"
                  className="mr-2"
                  user={{ imageUrl: data.imageUrl, name }}
                />
                <div>
                  <Typography style="h5">{name}</Typography>
                  <Typography style="body3" className="text-gray-500">
                    {data.role}
                  </Typography>
                </div>
              </div>
            );
          },
          title: "Name & Role",
        },
        {
          dataIndex: "email",
          key: "email",
          title: "Email",
          render: email => {
            return (
              <Typography style="body2" className="text-gray-500">
                {email}
              </Typography>
            );
          },
        },
        {
          dataIndex: "created_at",
          key: "created_at",
          title: "Created At",
          render: created_at => {
            return (
              <Typography style="body2" className="text-gray-500">
                {created_at}
              </Typography>
            );
          },
        },
        {
          dataIndex: "menu",
          key: "menu",
          render: () => (
            <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
              <li>Edit</li>
              <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
            </Dropdown>
          ),
          title: "",
        },
      ]}
      currentPageNumber={currentPageNumber}
      defaultPageSize={9}
      handlePageChange={page => {
        setCurrentPageNumber(page);
      }}
      rowData={contacts}
    />
  );
};

export default ContactsTable;
