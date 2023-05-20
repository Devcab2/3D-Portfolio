import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  stockoverwatch,
  dreamtxt,
  scheduler,
  threejs,
  hudsons,
  terra,
  prestige,
  cmh,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Custom Web Development",
    icon: web,
  },
  {
    title: "React Specialist",
    icon: mobile,
  },
  {
    title: "Backend Basics",
    icon: backend,
  },
  {
    title: "QA & Testing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Security Professional",
    company_name: "Hudoson's Canada Pub",
    icon: hudsons,
    iconBg: "#383E56",
    date: "March 2022 - Current",
    points: [
      "Provide security & awareness training to co-workers",
      "Hosting large corporate and social events",
      "Monitor security systems to identify and mitigate potential risks or breaches of security.",
      "Developing and implementing procedures and policies to keep staff and guests safe and secure.",
    ],
  },
  {
    title: "Underground Infrastructure Repairman",
    company_name: "TerraBurst Inc",
    icon: terra,
    iconBg: "#E6DEDD",
    date: "March 2021 - March 2022",
    points: [
      "Conduct inspections and diagnose sewer and watermain potential hazards using hightech equipment",
      "Communicate with home/business owners to provide quotes and friendly service. Discuss potential solutions to problems.",
      "Pipe repair, maintenance, and prevention against floods back-ups and leaks",
    ],
  },
  {
    title: "Journeyman Plumber",
    company_name: "Prestigious Plumbing",
    icon: prestige,
    iconBg: "#383E56",
    date: "January 2018 - December 2021",
    points: [
      "Installing, repairing, and maintaining plumbing systems and fixtures, such as pipes, valves, faucets, and toilets.",
      "Reading and interpreting blueprints, drawings, and specifications to determine plumbing requirements for new construction or renovation projects.",
      "Ensuring compliance with building codes, safety standards, and other regulations governing plumbing systems and fixtures, and maintaining accurate records of work performed.",
    ],
  },
  {
    title: "Demolition Specialist",
    company_name: "CMH Industries",
    icon: cmh,
    iconBg: "#E6DEDD",
    date: "April 2016 - December 2017",
    points: [
      "Evaluating the scope of the demolition project, including the size and type of structure to be demolished, and identifying any potential hazards or obstacles that may impact the demolition process.",
      "Preparing detailed cost estimates and proposals for demolition services, including labor, equipment, and disposal costs, and presenting them to clients for review and approval.",
      "Developing and maintaining relationships with subcontractors and vendors to ensure that all necessary equipment and resources are available for the demolition project.",
      "Ensuring compliance with all relevant safety regulations and guidelines, and taking appropriate measures to minimize risks to workers, the public, and the environment during the demolition process.",
    ],
  },
];

const projects = [
  {
    name: "Stock OverWatch",
    description:
      "Web-based educational platform that allows users to interact with the live stockmarket using imaginary funds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase api",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: stockoverwatch,
    source_code_link: "https://github.com/LIZXP/StockOverWatch",
  },
  {
    name: "Dream TxT",
    description:
      "Web application that enables users to look-up, compare, and purchase books. This app is secure and enables specific permissions for different account types.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: dreamtxt,
    source_code_link: "https://github.com/Devcab2/DREAM.txt",
  },
  {
    name: "Scheduler",
    description: 
      "A comprehensive calendar / booking app that allows users to plan out their appointments and meetings in a simple easy to use format.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
    ],
    image: scheduler,
    source_code_link: "https://github.com/Devcab2/scheduler",
  },
];

export { services, technologies, experiences, projects };