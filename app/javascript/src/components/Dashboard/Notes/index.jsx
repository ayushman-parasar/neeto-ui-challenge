import React, { useState } from "react";

import ContentLayout from "components/Common/ContentLayout";
import SubMenu from "components/Common/SubMenu";

import { TABS, SEGMENTS, TAGS, NOTES } from "./constants";
import NoteTable from "./NoteTable";

const Notes = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const displayNotes = () => <NoteTable notes={NOTES} />;

  return (
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
      />
    </>
  );
};

export default Notes;
