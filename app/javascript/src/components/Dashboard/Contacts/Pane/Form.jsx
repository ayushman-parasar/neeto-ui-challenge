import React from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import { Check } from "neetouiIcons";

import formValidationSchemas from "constants/formValidationSchemas";

export default function ContactForm({
  onClose,
  refetch,
  contact,
  isEdit,
  roles,
}) {
  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    refetch();
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.contactForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-9">
            <div className="flex space-x-3 flex-grow-0 w-full">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                required
                placeholder="Enter First Name"
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                required
                placeholder="Enter Last Name"
              />
            </div>
            <Input
              label="Email Address"
              name="email"
              required
              placeholder="Enter Email"
              className="flex-grow-0 w-full"
            />
            <Select
              isClearable
              isSearchable
              label="Role"
              name="role"
              options={roles}
              size="large"
              required
              placeholder="Select Role"
              className="flex-grow-0 w-full"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              iconPosition="right"
              icon={Check}
              disabled={isSubmitting}
              loading={isSubmitting}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
