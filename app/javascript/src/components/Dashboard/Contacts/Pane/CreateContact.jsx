import React from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

const NewContact = ({ fetchContacts, showPane, setShowPane, roles }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose} size="lg">
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchContacts}
        contact={formInitialValues.contactForm}
        roles={roles}
        isEdit={false}
      />
    </Pane>
  );
};

export default NewContact;
