import React, { useEffect, useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import ContentLayout from "components/Common/ContentLayout";
import EmptyState from "components/Common/EmptyState";
import SubMenu from "components/Common/SubMenu";
import { FORMCONTACTS, FORMTAGS } from "components/Dashboard/Notes/constants";
import NewNotePane from "components/Dashboard/Notes/Pane/CreateNote";

import { TABS, SEGMENTS, TAGS, NOTES } from "./constants";
import NoteTable from "./NoteTable";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setNotes(NOTES);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const displayNotes = () => <NoteTable notes={notes} />;

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      {notes.length ? (
        <>
          <SubMenu
            showSubMenu={showSubMenu}
            title="Notes"
            tabs={TABS}
            segments={SEGMENTS}
            tags={TAGS}
          />
          <ContentLayout
            setShowSubMenu={setShowSubMenu}
            showSubMenu={showSubMenu}
            title="Note"
            displayContent={displayNotes}
            setIsCreatePaneOpen={setIsCreatePaneOpen}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setIsCreatePaneOpen(true)}
          primaryActionLabel="Add New Note"
        />
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        showPane={isCreatePaneOpen}
        setShowPane={setIsCreatePaneOpen}
        contacts={FORMCONTACTS}
        tags={FORMTAGS}
      />
    </>
  );
};

export default Notes;
