import React, { useState, useEffect } from "react";

import { PageLoader } from "neetoui/v2";

import ContentLayout from "components/Common/ContentLayout";
import DeleteAlert from "components/Common/DeleteAlert";
import SubMenu from "components/Common/SubMenu";

import { TABS, CONTACTS } from "./constants";
import ContactsTable from "./ContactsTable";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <SubMenu showSubMenu={showSubMenu} tabs={TABS} title="Contacts" />
      <ContentLayout
        setShowSubMenu={setShowSubMenu}
        showSubMenu={showSubMenu}
        title="Contact"
        displayContent={displayContacts}
      />
      <DeleteAlert
        isAlertOpen={showDeleteAlert}
        setIsAlertOpen={setShowDeleteAlert}
        item="Contact"
      />
    </>
  );
};

export default Contacts;
