import * as Yup from "yup";

export const TABS = [
  {
    label: "All",
    count: 0,
  },
  {
    label: "Archived",
    count: 0,
  },
  {
    label: "Completed",
    count: 0,
  },
  {
    label: "Phase2",
    count: 0,
  },
];

export const CONTACTS = [
  {
    key: 1,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: 2,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    key: 3,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: 4,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    key: 5,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: 6,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    key: 7,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: 8,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    key: 9,
    name: "Ronald Richards",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    key: 10,
    name: "Jacob Jones",
    role: "Owner",
    email: "albert@borer.com",
    created_at: "Feb, 5, 2021",
    imageUrl: "https://i.pravatar.cc/150?img=6",
  },
];

export const ROLES = [
  {
    label: "Developer",
    value: "developer",
  },
  {
    label: "CEO",
    value: "owner",
  },
  {
    label: "HR",
    value: "hr",
  },
];

export const CONTACT_FORM_INTIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_VALIDATION_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required"),
  role: Yup.object().required("Role is required").nullable(),
});
