import React, { useState } from "react";

import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";
import { Search, Settings, Plus } from "neetouiIcons";

function SubMenu({ showSubMenu, title, tabs, segments, tags }) {
  const [isSegmentSearchCollapsed, setIsSegmentSearchCollapsed] =
    useState(true);
  const [isTagSearchCollapsed, setIsTagSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu={showSubMenu} title={title}>
        {tabs &&
          tabs.map((tab, index) => (
            <MenuBar.Block label={tab.label} count={tab.count} key={index} />
          ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSegmentSearchCollapsed(!isSegmentSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSegmentSearchCollapsed}
          onCollapse={() => setIsSegmentSearchCollapsed(true)}
        />

        {segments &&
          segments.map((segment, index) => (
            <MenuBar.Block
              label={segment.label}
              count={segment.count}
              key={index}
            />
          ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
              onClick: () => setIsTagSearchCollapsed(!isTagSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isTagSearchCollapsed}
          onCollapse={() => setIsTagSearchCollapsed(true)}
        />

        {tags &&
          tags.map((tag, index) => (
            <MenuBar.Block label={tag.label} count={tag.count} key={index} />
          ))}
      </MenuBar>
    </div>
  );
}

export default SubMenu;
