import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Create from "./Create";

import { NOTE_INITIAL_VALUES } from "../constants";

export default function NewNote({
  fetchNotes,
  showPane,
  setShowPane,
  contacts,
  tags,
}) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Create
        onClose={onClose}
        refetch={fetchNotes}
        note={NOTE_INITIAL_VALUES}
        contacts={contacts}
        tags={tags}
        isEdit={false}
      />
    </Pane>
  );
}
