import { faker } from "@faker-js/faker";

const ChatHistory = [
  {
    type: "Msg",
    message: "Hi 👋🏻, How r u?",
    from: true,
  },
  {
    type: "Divider",
    text: "Today",
  },
  {
    type: "Msg",
    message: "Hi 👋 SeoungWoo, not bad, u?",
    from: false,
  },
  {
    type: "Msg",
    message: "Can you send me an abstarct image?",
    from: false,
  },
  {
    type: "Msg",
    message: "Ya sure, sending you a pic",
    from: true,
  },
  {
    type: "Img",
    img: faker.image.avatar(),
    from: true,
  },
  {
    type: "Msg",
    message: "Can you please send this in file format?",
    from: false,
  },
  {
    type: "Msg",
    message: "Yes sure, here you go.",
    from: true,
  },
  {
    type: "Voice",
    link: "alsdfjklsdf",
    time: "0:36",
    from: true,
  },
];

export default ChatHistory;
