import { WorkDataType } from "../types/Work";

const Image4 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image4.jpg?raw=true`;
const Image5 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image5.jpg?raw=true`;

export const comingSoon: WorkDataType = [
  {
    image: `${Image4}`,
    projectTitle: "Labor Directory",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `The Labor Directory Project creates an online hub for labor-related information, including laws, rights, jobs, and services. It empowers users with easy access to credible resources, promoting informed decisions and transparency. This collaborative effort enhances understanding within the labor community.`,
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