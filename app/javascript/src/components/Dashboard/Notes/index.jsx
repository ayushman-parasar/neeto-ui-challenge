import React, { useState } from "react";

import { Button } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

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
      <Container>
        <div className="flex items-center justify-center w-full h-full">
          <h2>ContentLayoutComponent</h2>
          <Button
            label={`${showMenu ? "Close" : "Open"} Hamburger`}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </Container>
    </>
  );
};

export default Notes;
