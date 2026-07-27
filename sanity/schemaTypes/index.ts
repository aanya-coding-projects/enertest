import { product } from "./product";
import { category } from "./category";
import { introBlock } from "./objects/introBlock";
import { applicationCard } from "./objects/applicationCard";
import { supplement } from "./objects/supplement";
import { homePage } from "./homePage";
import { aboutPage } from "./aboutPage";
import { contactPage } from "./contactPage";
import { caseStudy } from "./caseStudy";

export const schemaTypes = [
  // Page singletons
  homePage,
  aboutPage,
  contactPage,
  // Documents
  product,
  category,
  caseStudy,
  // Objects
  introBlock,
  applicationCard,
  supplement,
];
