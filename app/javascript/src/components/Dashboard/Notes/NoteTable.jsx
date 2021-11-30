import React, { useState } from "react";

import DeleteAlert from "components/Common/DeleteAlert";

import Card from "./Card";

export default function NoteTable({ notes = [] }) {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  return (
    <>
      <div className="w-full">
        {notes &&
          notes.map((note, index) => (
            <Card
              note={note}
              key={index}
              setIsDeleteAlertOpen={setIsDeleteAlertOpen}
            />
          ))}
      </div>
      <DeleteAlert
        isAlertOpen={isDeleteAlertOpen}
        setIsAlertOpen={setIsDeleteAlertOpen}
        item="Note"
      />
    </>
  );
}
