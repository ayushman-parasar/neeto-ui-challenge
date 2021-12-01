import React, { useEffect, useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader } from "neetoui/v2";

import ContentLayout from "components/Common/ContentLayout";
import EmptyState from "components/Common/EmptyState";
import SubMenu from "components/Common/SubMenu";
import { FORM_CONTACTS, FORM_TAGS } from "components/Dashboard/Notes/constants";

import { TABS, SEGMENTS, TAGS, NOTES } from "./constants";
import ListNotes from "./ListNotes";
import NewNote from "./NewNote";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      setNotes(NOTES);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {notes.length ? (
        <>
          <SubMenu
            isSubMenuOpen={isSubMenuOpen}
            title="Notes"
            tabs={TABS}
            segments={SEGMENTS}
            tags={TAGS}
          />
          <ContentLayout
            setIsSubMenuOpen={setIsSubMenuOpen}
            isSubMenuOpen={isSubMenuOpen}
            title="Note"
            setIsCreatePaneOpen={setIsCreatePaneOpen}
          >
            <ListNotes notes={notes} />
          </ContentLayout>
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
      <NewNote
        fetchNotes={fetchNotes}
        showPane={isCreatePaneOpen}
        setShowPane={setIsCreatePaneOpen}
        contacts={FORM_CONTACTS}
        tags={FORM_TAGS}
      />
    </>
  );
};

export default Notes;
