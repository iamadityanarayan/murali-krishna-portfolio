export type MoreContentType = {
  title: string;
  desc: string;
  link?: string;
};

export type WorkDataType = {
  image: string;
  projectTitle: string;
  techList: string[];
  projectOveriew: string;
  projectDescription: string;
  moreContent: MoreContentType[];
}[];