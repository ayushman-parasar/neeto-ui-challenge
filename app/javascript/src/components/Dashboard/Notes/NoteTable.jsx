import React from "react";

import Card from "./Card";

export default function NoteTable({ notes = [] }) {
  return (
    <>
      <div className="w-full">
        {notes && notes.map((note, index) => <Card note={note} key={index} />)}
      </div>
    </>
  );
}
