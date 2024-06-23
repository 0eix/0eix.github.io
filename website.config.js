export const personalInfo = {
  name: "Nanevie AMEGASSI",
  profilePicture: "/profile.png", //optional
  role: "Master Student in Cognitive Science",
  university: "Grenoble Institute of Technology",
  universityWebsite: "",
  socialMedia: [
    { name: "Email", url: "mailto:eliseeamegassi@gmail.com" },
    // { name: "Twitter", url: "https://twitter.com/anxndsgn" },
    {name: "GitHub", url: "https://github.com/0eix",},
    { name: "LinkedIn", url: "https://linkedin.com/in/nanevie" },
    {name: "ResearchGate", url: "https://www.researchgate.net/profile/Nanevie-Amegassi"},
    {name: "ORCID", url: "https://orcid.org/0009-0003-7853-1856"},
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: "",
  // teaserImage: "/teaser.jpg",
};

export const navigation = [
  // { name: "Projects", route: "/projects" },
  // { name: "Publications", route: "/publications" },
  { name: "CV", route: "/Nanevie_AMEGASSI.pdf", innerProps: {target:"_blank"} },
  // { name: "About", route: "/about" },
  // { name: "News", route: "/news" },
];

export const homepageSection = {
  AboutSection: true,
  SelectedPublicationsSection: false,
  ProjectSection: false,
  NewsSection: false,
};
