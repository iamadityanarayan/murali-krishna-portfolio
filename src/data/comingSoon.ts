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
    projectTitle: "Lorem Ipsum",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Case Study",
      },
      {
        title: "Prototype link",
        desc: "Prototype link",
      },
    ],
  },
];