import React, { useState } from "react";

import ContentLayout from "components/Common/ContentLayout";
import SubMenu from "components/Common/SubMenu";

import { TABS, SEGMENTS, TAGS } from "./constants";

const Notes = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <SubMenu
        showMenu={showMenu}
        title="Notes"
        tabs={TABS}
        segments={SEGMENTS}
        tags={TAGS}
      />
      <ContentLayout
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        title="Note"
      />
    </>
  );
};

export default Notes;
