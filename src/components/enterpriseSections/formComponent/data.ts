export const formBasic = [
  {
    label: "First Name",
    name:'fname',
    placeholder: " Prdaeep",
    type: "text",
  },
  {
    label: "Last Name",
    name:'lname',
    placeholder: "Chauhan",
    type: "text",
  },
  {
    label: "Email Address",
    name:'email',
    placeholder: "example@gmial.com",
    type: "email",
  },
];

const meetingType = [
  "Hosting Meeting MySelf",
  "with a small team (2-10) users",
  "with a larger team (11+) users",
  "accross department and multiple teams (50+) users",
  "I'm not sure yet",
];

export const selectOption = [
  {
    label: "HOW DO YOU PLAN ON USING CALENDAR",
    name:'select',
    meetingType: meetingType,
  },
];

export const textArea = [
  {
    name:'textarea',
    label: "How can we help?. (optional)",
    placeholder:'Enter a description...'
  },
];
