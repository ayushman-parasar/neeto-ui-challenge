import React from "react";

import { Button, Input } from "neetoui/v2";
import { Header, Container } from "neetoui/v2/layouts";
import { Search, Plus } from "neetouiIcons";

function ContentLayout({
  isSubMenuOpen,
  setIsSubMenuOpen,
  title,
  setIsCreatePaneOpen,
  children,
}) {
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
            <Button
              label={`Add ${title}`}
              icon={Plus}
              size="large"
              onClick={() => setIsCreatePaneOpen(true)}
            />
          </div>
        }
        menuBarToggle={() => setIsSubMenuOpen(!isSubMenuOpen)}
        title={fullTitle}
      />
      {children}
    </Container>
  );
}

export default ContentLayout;
