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
    author: { name: "Anonymous", title: "Manager" },
  },
  {
    text: "Christian always finds the time to help his teammates out.",
    author: { name: "Anonymous", title: "Team Member" },
  },
  {
    text: "Christian is a leader. [...] his presence was immediately felt.",
    author: { name: "Anonymous", title: "Team Member" },
  },
  {
    text: "You're one of my favorite engineers that I've worked with.",
    author: { name: "Anonymous", title: "Manager" },
  },
  {
    text: "He is knowledgeable across a broad range of topics and is a great resource.",
    author: { name: "Anonymous", title: "Team Member" },
  },
  {
    text: "Your ability to break down complex problems, understand the biggest picture & how a small solution fits in, is unmatched.",
    author: { name: "Anonymous", title: "Team Member" },
  },
  {
    text: "You've clearly made an impact during team events by visually sketching out designs using Mermaid, Draw.io, etc.",
    author: { name: "Anonymous", title: "Manager" },
  },
  {
    text: "I see some real good stuff come out of you.",
    author: { name: "Anonymous", title: "Director" },
  },
  { text: "I'm proud of you.", author: { name: "Mom", title: "Mother" } },
  {
    text: "Out of everyone I've worked with here, I believe I've learned the most from you.",
    author: { name: "Anonymous", title: "Team Member" },
  },
];
