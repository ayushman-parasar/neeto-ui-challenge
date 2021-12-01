import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui/v2";

import ContentLayout from "components/Common/ContentLayout";
import DeleteAlert from "components/Common/DeleteAlert";
import SubMenu from "components/Common/SubMenu";

import { TABS, CONTACTS, ROLES } from "./constants";
import ListContacts from "./ListContacts";
import NewContact from "./NewContact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setContacts(CONTACTS);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <SubMenu isSubMenuOpen={isSubMenuOpen} tabs={TABS} title="Contacts" />
      <ContentLayout
        setIsSubMenuOpen={setIsSubMenuOpen}
        isSubMenuOpen={isSubMenuOpen}
        title="Contact"
        setIsCreatePaneOpen={setIsCreatePaneOpen}
      >
        <ListContacts
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          contacts={contacts}
        />
      </ContentLayout>
      <DeleteAlert
        isAlertOpen={isDeleteAlertOpen}
        setIsAlertOpen={setIsDeleteAlertOpen}
        item="Contact"
      />
      <NewContact
        fetchContacts={fetchContacts}
        showPane={isCreatePaneOpen}
        setShowPane={setIsCreatePaneOpen}
        roles={ROLES}
      />
    </>
  );
};

export default Contacts;
