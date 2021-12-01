import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Create from "./Create";

import { CONTACT_FORM_INTIAL_VALUES } from "../constants";

const NewContact = ({ fetchContacts, showPane, setShowPane, roles }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose} size="lg">
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Create
        onClose={onClose}
        refetch={fetchContacts}
        contact={CONTACT_FORM_INTIAL_VALUES}
        roles={roles}
        isEdit={false}
      />
    </Pane>
  );
};

export default NewContact;
