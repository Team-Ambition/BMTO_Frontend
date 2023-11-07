import { faker } from "@faker-js/faker";

const ChatHistory = [
  {
    type: "Msg",
    message: "Hi 👋🏻, How r u?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "Divider",
    text: "Today",
  },
  {
    type: "Msg",
    message: "Hi 👋 SeoungWoo, not bad, u?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "Msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "MSG",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },
  {
    type: "IMG",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "Msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "Msg",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "Voice",
    link : "alsdfjklsdf",
    incoming: true,
    outgoing: false,
  },
];

export default ChatHistory;