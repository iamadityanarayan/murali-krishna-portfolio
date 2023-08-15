import { WorkDataType } from "../types/Work";

const Image1 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image1.jpg?raw=true`;
const Image2 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image2.jpg?raw=true`;
const Image3 = `https://github.com/iamadityanarayan/Images/blob/main/Murali%20Krishna/Home%20Page/image3.jpg?raw=true`;

export const workData: WorkDataType = [
  {
    image: `${Image1}`,
    projectTitle: "Yummy Food Delivery App",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `Yummy is a food delivery service app.Order your favourite food.
    Find restaurants near you. Order food with the best
    experience.Yummy is a food delivery service app.Order your
    favourite food. Find restaurants near you. Order food with the
    best experience.`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Yummy Food-Delivery-App",
        link: `https://www.behance.net/gallery/177512503/Yummy-Food-Delivery-App`
      },
      {
        title: "Prototype link",
        desc: "Yummy Food-Delivery-App Prototype link",
        link: `https://www.figma.com/proto/7OEoufJ6fs8n04tQqHhl2s/My-Projects?page-id=1%3A6437&type=design&node-id=22-3587&viewport=215%2C1152%2C0.21&t=QZ7fT3xd9792EYRH-1&scaling=scale-down&starting-point-node-id=22%3A3587&mode=design`
      },
    ],
  },
  {
    image: `${Image2}`,
    projectTitle: "Helping Hands",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `Designing a user-friendly and visually appealing interface for a web application. The objective is to demonstrate your understanding of user-centred design principles, information architecture, and visual design skills. specifications.`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Helping hands Case Study",
        link: `https://www.behance.net/gallery/177470353/Volunteer-and-Administrators-management-dashboard`
      },
      {
        title: "Prototype link",
        desc: "Helping hands Prototype link",
        link: `https://www.figma.com/proto/7OEoufJ6fs8n04tQqHhl2s/My-Projects?page-id=0%3A1&type=design&node-id=1-21&viewport=1280%2C-376%2C0.19&t=exJq3FimaXoGokYv-8&scaling=scale-down-width&starting-point-node-id=1%3A21&hide-ui=1`
      },
    ],
  },
  {
    image: `${Image3}`,
    projectTitle: "Organization",
    techList: ["Research", "UX design", "UI design"],
    projectOveriew: "Project Overview",
    projectDescription: `Create a platform for employees across the entire organisation that serves as a one-stop shop for all of their needs. Concentrate on fostering teamwork and employee involvement channel of choice for internal communications, news, and announcements.`,
    moreContent: [
      {
        title: "Case Study",
        desc: "Organization",
      },
      {
        title: "Prototype link",
        desc: "OrganizationPrototype link",
      },
    ],
  },
];