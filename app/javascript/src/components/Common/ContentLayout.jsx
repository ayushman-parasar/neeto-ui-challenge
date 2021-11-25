import React from "react";

import { Button, Input } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";
import { Search } from "neetouiIcons";

function ContentLayout({ showMenu, setShowMenu, title }) {
  const fullTitle = `All ${title}s`;
  return (
    <Container>
      <Header
        actionBlock={
          <div className="flex space-x-2">
            <Input
              prefix={<Search />}
              placeholder="Search Name, Email, Phone Number, Etc"
            />
            <Button label={`Add ${title}`} icon="ri-add-line" size="large" />
          </div>
        }
        menuBarToggle={() => setShowMenu(!showMenu)}
        title={fullTitle}
      />
      <h2>ContentTable</h2>
    </Container>
  );
}

export default ContentLayout;
