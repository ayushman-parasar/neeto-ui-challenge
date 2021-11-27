import React from "react";

import { Alert, Toastr } from "neetoui/v2";

function DeleteAlert({ isAlertOpen, setIsAlertOpen, item, status = true }) {
  const displayToasterAlert = status => {
    setIsAlertOpen(false);
    status
      ? Toastr.success(`${item} deleted successfully`)
      : Toastr.errror("Error");
  };
  return (
    <div className="p-4">
      <Alert
        isOpen={isAlertOpen}
        message={`Are you sure you want to delete the ${item}? This action cannot be undone.`}
        onClose={() => setIsAlertOpen(false)}
        onSubmit={() => displayToasterAlert(status)}
        size="md"
        title={`Delete ${item}`}
      />
    </div>
  );
}
export default DeleteAlert;
