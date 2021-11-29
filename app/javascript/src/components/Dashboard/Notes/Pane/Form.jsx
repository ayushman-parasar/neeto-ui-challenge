import React from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui/v2";
import { Input, Select, Textarea } from "neetoui/v2/formik";
import { Check } from "neetouiIcons";

import notesApi from "apis/notes";
import formValidationSchemas from "constants/formValidationSchemas";

export default function NoteForm({
  onClose,
  refetch,
  note,
  isEdit,
  contacts,
  tags,
}) {
  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      Toastr.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              required
              placeholder="Enter title"
              className="flex-grow-0 w-full"
            />
            <Textarea
              label="Description"
              name="description"
              rows={1}
              required
              placeholder="Enter note description"
              className="flex-grow-0 w-full"
            />
            <Select
              isClearable
              isSearchable
              label="Assigned Contact"
              name="contact"
              options={contacts}
              size="large"
              required
              placeholder="Select Contact"
              className="flex-grow-0 w-full"
            />
            <Select
              isClearable
              isSearchable
              isMulti
              label="Tags"
              name="tags"
              options={tags}
              required
              size="large"
              placeholder="Select Tag"
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
