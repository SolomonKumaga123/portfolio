import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Solomon",
  lastName: "Kumaga",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "High School Student & Aspiring Football Player",
  avatar: "/images/avatar.jpg",
  email: "example@gmail.com",
  location: "America/New_York", // Update to your timezone if needed
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Football Journey`,
  description: `A personal website by Solomon Kumaga, a passionate high school student sharing football tips for beginners, especially at wide receiver and DB positions.`,
  headline: <>Welcome! I'm Solomon Kumaga, a high school sophomore dedicated to mastering football IQ—especially at wide receiver and DB—even before joining a team.</>,
  featured: {
    display: true,
    title: <>New: Football for Beginners – My Guide to Wide Receiver & DB</>,
    href: "/#football-for-beginners",
  },
  subline: (
    <>
      I may not be on a team yet (my mom hasn't let me join), but I'm obsessed with learning and sharing everything I know about football. This site is for anyone starting out—let's get better together!
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a high school sophomore passionate about football and helping beginners master the game!`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi! I'm Solomon Kumaga, a freshman going into 10th grade. I'm passionate about increasing my football IQ, especially at wide receiver and DB—even though I haven't joined a team yet (my mom hasn't let me!). I want to help other beginners learn the game and achieve mastery at both positions, sharing what I've learned and my journey so far.
      </>
    ),
  },
  work: {
    display: false, // No work experience yet
    title: "Work Experience",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "High School",
        description: <>Currently a student, entering 10th grade.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Football Knowledge & Skills",
    skills: [
      {
        title: "Wide Receiver Fundamentals",
        description: <>Tips and drills for route running, catching, and reading defenses as a WR.</>,
        images: [],
      },
      {
        title: "Defensive Back (DB) IQ",
        description: <>How to anticipate plays, cover receivers, and improve footwork as a DB.</>,
        images: [],
      },
      {
        title: "Mindset & Learning",
        description: <>How to study the game, stay motivated, and keep improving even before joining a team.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
