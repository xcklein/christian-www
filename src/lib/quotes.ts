interface Quote {
  text: string;
  author: {
    name: string;
    title?: string;
  };
}

export const QUOTES: Quote[] = [
  {
    text: "Unfortunately, we can't create a team full of Christians.",
    author: { name: "Myron Moodie", title: "Engineering Manager" },
  },
  {
    text: "I appreciate that you provide thoughtful replies to questions and suggestions, while also feeling empowered to move things forward without getting blocked. Your approach gives me confidence that I can ask questions and offer alternate approaches without holding up progress.",
    author: { name: "Kevin Rich", title: "Engineering Manager" },
  },
  {
    text: "You are great to pair program with!",
    author: { name: "Elizabeth Reed", title: "Software Engineer" },
  },
  {
    text: "Christian is a leader. [...] his presence was immediately felt.",
    author: { name: "Anonymous", title: "Software Engineer" },
  },
  {
    text: "Out of everyone I've worked with here, I believe I've learned the most from you.",
    author: { name: "Anonymous", title: "Software Engineer" },
  },
  {
    text: "Your ability to break down complex problems, understand the biggest picture & how a small solution fits in, is unmatched. Thanks for the laughs and being a fantastic leader.",
    author: { name: "Andrew Kaye", title: "Software Engineer" },
  },
  {
    text: "Engineers like Christian are hard to come by.",
    author: { name: "Gazmir Mazari", title: "Software Engineer" },
  },
  {
    text: "Christian always finds the time to help his teammates out.",
    author: { name: "Anonymous", title: "Software Engineer" },
  },
  {
    text: "You've clearly made an impact during team events by visually sketching out designs using Mermaid, Draw.io, etc.",
    author: { name: "Anonymous", title: "Engineering Manager" },
  },
  {
    text: "Christian is an incredible engineer, and I always look forward to his enthusiasm kicking off and wrapping up our calls. Thank you for everything you do — I'm privileged to work alongside you.",
    author: { name: "Dondré Marable", title: "Project Manager" },
  },
  {
    text: "He consistently reviews PRs thoughtfully and quickly.",
    author: { name: "Austen Hsiao", title: "Software Engineer" },
  },
  {
    text: "I've learned a lot working with you.",
    author: { name: "Anonymous", title: "Engineering Director" },
  },
  {
    text: "He is knowledgeable across a broad range of topics and is a great resource.",
    author: { name: "Anonymous", title: "Software Engineer" },
  },
  {
    text: "From concept to execution, I'm beyond impressed with what you've been able to build in just four short weeks. The change agility, organizational prowess, skill, and attention to detail required to get this accomplished within a month is extremely commendable.",
    author: { name: "Ogi Micic", title: "Customer Success Manager" },
  },
  {
    text: "You're one of my favorite engineers that I've worked with.",
    author: { name: "Anonymous", title: "Engineering Manager" },
  },
];
