import { WorkDataType } from "../types/Work";

const Image4 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image4.jpg?raw=true`;
const Image5 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image5.jpg?raw=true`;

export const comingSoon: WorkDataType = [
  {
    image: `${Image4}`,
    projectTitle: "Labor Directory",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Labor Directory",
      },
      {
        title: "Prototype link",
        desc: "Labor Directory Prototype link",
      },
    ],
  },
  {
    image: `${Image5}`,
    projectTitle: "Ai.Voice Changer",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `The AI Voice Changer project aims to develop an innovative tool that utilizes artificial intelligence to modify and transform vocal tones and characteristics. This technology offers users the ability to alter their voices in real-time for various creative and practical applications.`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Ai.Voice Changer Case Study",
      },
      {
        title: "Prototype link",
        desc: "Ai.Voice Changer Prototype link",
      },
    ],
  },
];