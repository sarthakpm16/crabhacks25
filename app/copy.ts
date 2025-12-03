export const copy = {
  event: {
    name: "crabhacks",
    tagline: "the coolest high school hackathon in the dmv area",
    year: "2025",
    description: "join us for a day of innovation, collaboration, and creativity. whether you're building your first project or your hundredth, crabhacks is the perfect place to bring your ideas to life.",
    longDescription: "crabhacks brings together the brightest high school students from across the dmv region for an unforgettable day of building, learning, and connecting. compete for prizes, learn from industry mentors, and connect with fellow builders—all while creating something amazing.",
  },
  dates: {
    start: "december 7, 2025",
    end: "december 7, 2025",
    duration: "10 hours",
    registrationDeadline: "december 3, 2025",
    checkIn: "sunday 9:00 am",
    kickoff: "sunday 9:30 am",
    closing: "sunday 7:00 pm",
  },
  location: {
    venue: "bethesda, md",
    address: "bethesda, md",
    fullAddress: "4701 Sangamore Rd Suite 100N, Bethesda, MD 20816",
    directions: "located in bethesda, easily accessible by metro, car, or bus. parking available nearby.",
  },
  stats: {
    participants: 300,
    projects: 80,
    sponsors: 5,
    prizes: 1000,
  },
  cta: {
    primary: "register now",
    secondary: "apply as a mentor",
    tertiary: "become a sponsor",
    learnMore: "learn more",
  },
  sponsorship: {
    tiers: ["platinum", "gold", "silver", "bronze"],
    email: "team@crabhacks.org",
    prospectusUrl: "/CrabHacks 2025 Prospectus (3).pdf",
  },
  info: {
    format: "10-hour hackathon",
    teamSize: "teams of 2–4",
    free: "completely free",
    food: "all meals provided",
    swag: "free swag for all participants",
    prizes: "$1,000+ in prizes",
    workshops: "workshops for all skill levels",
    mentors: "experienced mentors available",
  },
  faq: [
    {
      question: "do i need to be a high school student?",
      answer: "yes, crabhacks is open to all current high school students (grades 9–12) in the dmv area.",
    },
    {
      question: "do i need coding experience?",
      answer: "not at all! we welcome participants of all skill levels. we'll have workshops, mentors, and resources to help you build something amazing.",
    },
    {
      question: "how much does it cost?",
      answer: "crabhacks is completely free! we provide food, swag, prizes, and an amazing experience at no cost to you.",
    },
    {
      question: "do i need a team?",
      answer: "nope! you can come solo and we'll help you find a team, or come with your own team of up to 4 people.",
    },
    {
      question: "what should i bring?",
      answer: "bring your laptop, charger, valid student id, and excitement to build! we'll provide everything else including food, drinks, and a place to hack.",
    },
    {
      question: "can i use past projects?",
      answer: "all projects must be started during the hackathon. you can plan ahead, but code must be written during the event.",
    },
    {
      question: "what are the prizes?",
      answer: "we have over $1,000 in prizes across multiple categories including best overall, best design, best use of sponsor apis, and more!",
    },
    {
      question: "will there be workshops?",
      answer: "yes! we'll have workshops throughout the day covering topics from beginner web development to advanced machine learning.",
    },
    {
      question: "how did crabhacks start?",
      answer: "CrabHacks was started by Jaden Hou and Tinu Vanapamula as a merger and continuation of older hackathons, Blair Hacks and Poolesville Hacks. In 2024, Jaden Hou and Sarthak Pal Mahajan organized the first CrabHacks which had over 50 attendees and was sponsored by Sentry, Capital Workspaces, UVA, Steve Shen, and Jun Hou.",
    },
  ],
  sponsors: [
    // tier 1 — platinum
    { name: "Interview Cake", tier: "platinum", url: "https://www.interviewcake.com/", logo: "/InterviewCake.svg" },
    { name: "Capital Workspaces", tier: "platinum", logo: "/CapitalWorkspaces.png" },
    { name: "Solana Foundation", tier: "platinum", url: "https://solana.org/", logo: "/solana.png" },

    // tier 2 — gold
    { name: "Yubico", tier: "gold", url: "https://www.yubico.com/", logo: "/Yubico.png" },
    { name: "Crackd", tier: "gold", url: "https://crackd.it/", logo: "/crackd.png" },
    { name: "Sentry", tier: "gold", url: "https://sentry.io/", logo: "/Sentry.png" },

    // tier 3 — silver
    { name: "TypeOS", tier: "platinum", url: "https://typeos.com/", logo: "/TypeOS.svg" },
    { name: "Indersoft", tier: "silver", url: "http://indersoft.com/", logo: "/Indersoft.png" },

    // tier 4 — bronze
    { name: "Sarah's Handmade Ice Cream", tier: "bronze", url: "https://sarahshandmadeicecream.com/", logo: "/SarahsHandmade.jpg" },
    { name: "YRI Fellowship", tier: "bronze", url: "https://www.yriscience.com/", logo: "/YRIScience.png" },
    { name: "Klinn", tier: "bronze", url: "https://klinn.works", logo: "/klinn.png" },
    { name: "Parv", tier: "bronze" },
  ],
  schedule: [
    { time: "sunday 9:00 am", event: "check-in & breakfast", day: "sunday" },
    { time: "sunday 9:30 am", event: "opening ceremony & kickoff", day: "sunday" },
    { time: "sunday 10:00 am", event: "hacking begins", day: "sunday" },
    { time: "sunday 12:00 pm", event: "lunch", day: "sunday" },
    { time: "sunday 12:30 pm", event: "talk with baker bruce, founder of thea", day: "sunday" },
    { time: "sunday 1:00 pm", event: "workshop session", day: "sunday" },
    { time: "sunday 2:00 pm", event: "talk with cory levy from z fellows", day: "sunday" },
    { time: "sunday 3:00 pm", event: "afternoon snack break", day: "sunday" },
    { time: "sunday 4:00 pm", event: "ice cream with the founder of sarah's handmade ice cream", day: "sunday" },
    { time: "sunday 5:00 pm", event: "hacking ends & submissions due", day: "sunday" },
    { time: "sunday 5:30 pm", event: "judging & demos", day: "sunday" },
    { time: "sunday 6:30 pm", event: "closing ceremony & prizes", day: "sunday" },
    { time: "sunday 7:00 pm", event: "event ends", day: "sunday" },
  ],
  tracks: [
    { name: "web development", icon: "globe" },
    { name: "mobile apps", icon: "smartphone" },
    { name: "ai/ml", icon: "brain" },
    { name: "hardware", icon: "zap" },
    { name: "devops", icon: "cloud" },
    { name: "blockchain", icon: "link" },
  ],
  team: [
    { name: "sarthak pal mahajan", role: "executive director", photo: "/sarthak.jpg" },
    { name: "jaden hou", role: "founder/advisor" },
    { name: "mishelle munkhbatt", role: "marketing lead" },
    { name: "navya rachakonda", role: "finance lead" },
    { name: "kofi hair-ralston", role: "tech lead" },
    { name: "allen du", role: "marketing lead" },
    { name: "ishaan nanda", role: "finance lead" },
    { name: "catherine aixinjueluo", role: "art & design lead" },
  ],
};
