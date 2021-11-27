import React, { useState } from "react";

import DeleteAlert from "components/Common/DeleteAlert";

import Card from "./Card";

export default function NoteTable({ notes = [] }) {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  return (
    <>
      <div className="w-full">
        {notes &&
          notes.map((note, index) => (
            <Card
              note={note}
              key={index}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          ))}
      </div>
      <DeleteAlert
        isAlertOpen={showDeleteAlert}
        setIsAlertOpen={setShowDeleteAlert}
        item="Note"
      />
    </>
  );
}
