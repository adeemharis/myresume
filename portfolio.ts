import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Adeem Haris",
  title: "Hey, I'm Adeem",
  description:
    "Motivated and detail-oriented Software Engineer with a strong foundation in computer science, artificial intelligence, and data science, seeking to leverage hands-on experience in machine learning, full stack development, and cloud-based solutions to design and implement high-quality, scalable software. Committed to delivering innovative solutions, optimizing system performance, and contributing to impactful projects in a dynamic and collaborative team environment.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "adeemharis",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:adeemharis@gmail.com",
  linkedin: "https://www.linkedin.com/in/adeemharis/",
  github: "https://github.com/adeemharis",
  instagram: "https://www.instagram.com/adeemharis",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I AM A SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Indian Institute of Technology Jodhpur",
    subHeader: "Bachelor of Technology in Artificial Intelligence and Data Science",
    duration: "December 2021 - May 2025",
    desc: "",
    grade: "",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Machine Learning Intern",
    company: "Weya.ai",
    companyLogo: "/img/icons/common/weyanew.png",
    date: "May 2024 - Jul 2024",
    desc: "I Designed and implemented a complete end-to-end machine learning pipeline for energy disaggregation, covering data collection, preprocessing, feature engineering, model training, and cloud deployment for real-world client usage.",
  },
  {
    role: "Summer Research Intern",
    company: "DRDO",
    companyLogo: "/img/icons/common/drdo.png",
    date: "May 2023 - Jul 2023",
    desc: "Collaborated with scientists at the Solid State Physics Laboratory (SSPL) to design and implement machine learning models for fault detection in semiconductor acoustic sensors",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  // {
  //   role: "Full Stack Developer",
  //   company: "ZRTechnologies",
  //   companyLogo: "/img/icons/common/zrtech.jpeg",
  //   date: "Aug 2022 - Jun 2023",
  //   desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  // },
  // {
  //   role: "Backend Developer",
  //   company: "Bleed-AI",
  //   companyLogo: "/img/icons/common/bleedAI.jpg",
  //   date: "Sept 2021 - Oct 2021",
  //   desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  // },
];

export const projects: ProjectType[] = [
  {
    name: "Ridemate",
    desc: "Mobile Applications built using Flutter and Firebase for booking and sharing rides.",
    github: "https://github.com/adeemharis/ridemate",
    // link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Silicosis Detection using X-Rays",
    desc: "Deep Learning Project to detect lung anomalies using Chest X-Rays",
    github: "https://github.com/adeemharis/silico",
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
//   {
//     name: "Wajahat Malek",
//     role: "CEO at Duseca Software",
//     feedback:
//       "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
//   },
//   {
//     name: "Zaid Zaffar",
//     role: "CEO at ZR Technologies",
//     feedback:
//       "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Adeem Haris",
  description: greetings.description,
  author: "Adeem Haris",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Adeem",
    "Adeem Haris",
    "@adeemharis",
    "adeemharis",
    "Portfolio",
    "Adeem Portfolio ",
    "Adeem Haris Portfolio",
  ],
};
