import React from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import { Check } from "neetouiIcons";

import { CONTACT_FORM_VALIDATION_SCHEMA } from "../constants";

export default function Create({ onClose, refetch, contact, isEdit, roles }) {
  const handleSubmit = () => {
    Toastr.success("Contact added successfully");
    refetch();
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form>
          <Pane.Body>
            <div className="flex-grow-0 w-full space-y-6">
              <div className="flex space-x-3">
                <Input
                  label="First Name"
                  name="firstName"
                  type="text"
                  size="large"
                  required
                  placeholder="Enter First Name"
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  type="text"
                  size="large"
                  required
                  placeholder="Enter Last Name"
                />
              </div>
              <Input
                label="Email Address"
                name="email"
                size="large"
                required
                placeholder="Enter Email"
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
              />
            </div>
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
