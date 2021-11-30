import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui/v2";

import ContentLayout from "components/Common/ContentLayout";
import DeleteAlert from "components/Common/DeleteAlert";
import SubMenu from "components/Common/SubMenu";

import { TABS, CONTACTS, ROLES } from "./constants";
import ContactsTable from "./ContactsTable";
import NewContact from "./Pane/CreateContact";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
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
  const displayContacts = () => {
    return (
      <ContactsTable
        setShowDeleteAlert={setShowDeleteAlert}
        contacts={contacts}
      />
    );
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
        displayContent={displayContacts}
        setIsCreatePaneOpen={setIsCreatePaneOpen}
      />
      <DeleteAlert
        isAlertOpen={showDeleteAlert}
        setIsAlertOpen={setShowDeleteAlert}
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
