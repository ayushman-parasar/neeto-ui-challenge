import * as Yup from "yup";

export const NOTES = [
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    created_at: "2021-11-21T07:08:32.332Z",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    created_at: "2021-11-21T07:08:32.332Z",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    created_at: "2021-11-21T07:08:32.332Z",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    created_at: "2021-11-21T07:08:32.332Z",
  },
  {
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    created_at: "2021-11-21T07:08:32.332Z",
  },
];

export const TABS = [
  {
    label: "All",
    count: 200,
  },
  {
    label: "Users",
    count: 80,
  },
  {
    label: "Leads",
    count: 60,
  },
  {
    label: "Visitors",
    count: 60,
  },
];

export const SEGMENTS = [
  {
    label: "Europe",
    count: 80,
  },
  {
    label: "Middle-East",
    count: 60,
  },
  {
    label: "Asia",
    count: 60,
  },
];

export const TAGS = [
  {
    label: "Sales",
    count: 80,
  },
  {
    label: "Finance",
    count: 60,
  },
  {
    label: "User-Experience",
    count: 60,
  },
];

export const FORM_TAGS = [
  {
    label: "Getting Started",
    value: "getting_started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user_flow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const FORM_CONTACTS = [
  {
    label: "Simon Smith",
    value: "simon_smith",
  },
  {
    label: "Daemon Smith",
    value: "daemon_smith",
  },
  {
    label: "Roger Smith",
    value: "roger_smith",
  },
];

export const NOTE_INITIAL_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: null,
};

export const NOTE_VALIDATION_SCHEMA = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  contact: Yup.object().required("Contact is required").nullable(),
  tags: Yup.array().required("Tag is required").nullable(),
});
