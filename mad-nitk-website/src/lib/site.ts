import {
  Award,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Camera,
  Command,
  Crown,
  FileText,
  GalleryHorizontal,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  Mail,
  MapPin,
  Megaphone,
  Newspaper,
  QrCode,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/recruitment", label: "Recruitment" },
  { href: "/dashboard", label: "Dashboard" }
];

export const stats = [
  { value: "14+", label: "Years of student leadership" },
  { value: "75K+", label: "Event participants influenced" },
  { value: "120+", label: "Campus initiatives delivered" },
  { value: "45+", label: "Partners and collaborators" }
];

export const features = [
  { icon: Crown, title: "Leadership Studio", text: "Structured roles, accountability rituals, and real ownership for every member." },
  { icon: CalendarDays, title: "Event Operating System", text: "Registrations, QR attendance, volunteer assignment, certificates, and post-event analytics." },
  { icon: Sparkles, title: "AI-Assisted Workflow", text: "Draft event pages, blogs, captions, FAQs, emails, and accessible alt text without losing editorial control." },
  { icon: ShieldCheck, title: "Secure Member Platform", text: "JWT sessions, role permissions, validation, audit logs, and production-ready environment boundaries." }
];

export const events = [
  {
    title: "Confluence Strategy Summit",
    slug: "confluence-strategy-summit",
    date: "2026-08-18T10:00:00+05:30",
    venue: "Jubilee Hall, NIT Kurukshetra",
    category: "Flagship",
    seats: 420,
    description: "A high-intensity strategy, operations, and leadership conclave for students building serious campus initiatives."
  },
  {
    title: "MAD Case Arena",
    slug: "mad-case-arena",
    date: "2026-09-07T17:00:00+05:30",
    venue: "Senate Hall",
    category: "Competition",
    seats: 180,
    description: "Teams solve a live business and campus operations case with mentor feedback and staged elimination rounds."
  },
  {
    title: "Creator x Manager Lab",
    slug: "creator-manager-lab",
    date: "2026-10-12T16:00:00+05:30",
    venue: "Innovation Centre",
    category: "Workshop",
    seats: 90,
    description: "A practical lab on brand systems, content planning, sponsorship decks, and measurable community growth."
  }
];

export const members = [
  {
    name: "Aarav Mehta",
    role: "Secretary",
    department: "Computer Engineering",
    year: "Final Year",
    skills: ["Strategy", "Sponsorship", "Systems"],
    bio: "Builds operating systems for teams that make campus events feel effortless.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Naina Sharma",
    role: "Joint Secretary",
    department: "Electronics",
    year: "Third Year",
    skills: ["Operations", "Design", "Comms"],
    bio: "Turns ideas into event flows, volunteer pods, and crisp on-ground execution.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Kabir Anand",
    role: "Events Head",
    department: "Mechanical",
    year: "Third Year",
    skills: ["Logistics", "Stage", "Analytics"],
    bio: "Owns flagship production, schedules, attendance, and post-event learning loops.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ira Bansal",
    role: "Creative Head",
    department: "Civil",
    year: "Second Year",
    skills: ["Brand", "Motion", "Editorial"],
    bio: "Shapes campaigns, visual language, and the content engine behind MAD.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80"
  }
];

export const sponsors = ["Campus Incubation Cell", "Alumni Network", "Startup Haryana", "E-Cell NITK", "Design Circle"];

export const timeline = [
  { year: "2012", title: "Foundation", text: "MAD begins as a focused student management collective." },
  { year: "2016", title: "Flagships", text: "Large-format campus programs become the club's identity." },
  { year: "2021", title: "Digital Operations", text: "Registrations, content, and member workflows move online." },
  { year: "2026", title: "Platform Era", text: "MAD becomes a full-stack leadership and event operating platform." }
];

export const pages = {
  about: {
    eyebrow: "The Club",
    title: "A management lab for students who want to lead before they graduate.",
    text: "MAD combines strategy, operations, creative direction, sponsorship, analytics, and people leadership into one high-trust student organization.",
    sections: [
      { title: "Mission", text: "Create ambitious managers who can design, direct, and deliver real outcomes for the NIT Kurukshetra community." },
      { title: "Vision", text: "Make MAD the benchmark for professional student-run organizations across India." },
      { title: "Objectives", text: "Build leadership depth, host high-quality events, support student initiatives, and maintain a culture of ownership." },
      { title: "Core Values", text: "Clarity, taste, reliability, courage, inclusion, and measurable improvement." }
    ]
  },
  sponsors: {
    eyebrow: "Partners",
    title: "Sponsor relationships built like long-term partnerships.",
    text: "MAD offers measurable campus reach, strong student recall, credible activations, and clean reporting for every partner.",
    sections: [
      { title: "Packages", text: "Title, powered-by, knowledge partner, hospitality, hiring, and digital campaign tiers." },
      { title: "Statistics", text: "Audience size, registrations, impressions, footfall, feedback, and lead metrics are collected in one dashboard." },
      { title: "Brochure", text: "Downloadable decks can be generated from current event and audience data." }
    ]
  },
  achievements: {
    eyebrow: "Proof",
    title: "Awards, records, and milestones that compound every year.",
    text: "Track competitions, media coverage, certificates, and measurable community wins in a searchable achievement archive.",
    sections: [
      { title: "Awards", text: "Best managed campus programs, leadership recognitions, and inter-college wins." },
      { title: "Milestones", text: "Participation records, sponsorship growth, volunteer hours, and successful collaborations." },
      { title: "Media Coverage", text: "Press notes, college channels, social highlights, and event recaps." }
    ]
  },
  blogs: {
    eyebrow: "Editorial",
    title: "A publishing desk for leadership, events, and student culture.",
    text: "Markdown-ready blogs support categories, tags, likes, comments, bookmarks, featured stories, and admin moderation.",
    sections: [
      { title: "Featured Blogs", text: "Long-form reflections from leaders, event playbooks, interviews, and case notes." },
      { title: "Rich Editor", text: "A schema-ready editor can store markdown or rich JSON content." },
      { title: "Community", text: "Likes, comments, bookmarks, and author pages are modeled for expansion." }
    ]
  },
  resources: {
    eyebrow: "Resources",
    title: "Playbooks, templates, decks, and downloads in one clean library.",
    text: "Members can access event checklists, sponsor templates, brand files, onboarding guides, and certificate downloads.",
    sections: [
      { title: "Downloads", text: "Role-based files for members, volunteers, heads, and admins." },
      { title: "Search", text: "Global search indexes events, members, galleries, blogs, sponsors, and resources." },
      { title: "Templates", text: "Reusable briefs, run-of-show documents, risk plans, and outreach scripts." }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Reach the team that makes campus execution look calm.",
    text: "Use the contact form for partnerships, collaborations, recruitment, alumni connects, or event support.",
    sections: [
      { title: "Address", text: "NIT Kurukshetra, Thanesar, Haryana 136119." },
      { title: "Email", text: "contact@madnitk.org" },
      { title: "FAQ", text: "Common answers for recruitment, sponsorship, participation, and certificates." }
    ]
  }
};

export const dashboardCards = [
  { icon: LayoutDashboard, title: "Overview", value: "Real-time operations snapshot" },
  { icon: Users, title: "Members", value: "Role-aware profiles and activity" },
  { icon: QrCode, title: "Attendance", value: "QR check-in and verification" },
  { icon: FileText, title: "Certificates", value: "PDF issue, email, and verify" },
  { icon: BarChart3, title: "Analytics", value: "Registrations, reach, and outcomes" },
  { icon: Megaphone, title: "Notifications", value: "Announcements and reminders" }
];

export const adminModules = [
  "Manage Members",
  "Manage Teams",
  "Manage Events",
  "Manage Blogs",
  "Manage Gallery",
  "Manage Sponsors",
  "Manage Recruitment",
  "Manage Certificates",
  "Manage Attendance",
  "Manage Roles",
  "Manage Notifications",
  "Bulk Actions",
  "Logs",
  "Exports"
];

export const searchTargets = [
  { icon: Search, label: "Global search" },
  { icon: Users, label: "Members" },
  { icon: CalendarDays, label: "Events" },
  { icon: GalleryHorizontal, label: "Gallery" },
  { icon: Newspaper, label: "Blogs" },
  { icon: Handshake, label: "Sponsors" }
];

export const gallery = [
  { title: "Strategy Room", category: "Workshops", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" },
  { title: "Flagship Stage", category: "Events", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80" },
  { title: "Team Sprint", category: "Teams", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" },
  { title: "Sponsor Lounge", category: "Partners", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80" },
  { title: "Case Finals", category: "Competitions", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80" },
  { title: "Volunteer Desk", category: "Operations", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" }
];

export const recruitmentSteps = [
  "Application",
  "Portfolio and resume review",
  "Domain task",
  "Panel interview",
  "Final selection",
  "Onboarding sprint"
];

export const footerLinks = [
  { icon: Mail, label: "contact@madnitk.org" },
  { icon: MapPin, label: "NIT Kurukshetra" },
  { icon: Command, label: "Ctrl + K" },
  { icon: Camera, label: "Instagram" },
  { icon: Award, label: "Certificates" },
  { icon: Trophy, label: "Leaderboard" },
  { icon: GraduationCap, label: "Member Portal" },
  { icon: BadgeCheck, label: "Verified Club" },
  { icon: Rocket, label: "Recruitment" }
];
