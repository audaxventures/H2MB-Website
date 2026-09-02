import type { LeadershipProfile } from "./types";

// PLACEHOLDER PROFILES — approved names, titles, biographies (~75-110 words),
// headshots and LinkedIn links are required before launch. Do not treat this
// data as real credentials. See brief Section 7, Section 5 and the Section 14
// pre-launch checklist ("Confirm approved leadership names, titles,
// biographies, headshots and LinkedIn links").
export const leadership: LeadershipProfile[] = [
  {
    slug: "leadership-placeholder-1",
    name: "[Full Name Pending Approval]",
    title: "[Title Pending Approval]",
    bio: "[Approved biography pending. Content should cover this leader's relevant experience in energy, infrastructure or commercial development, and their responsibility at H2MB, in approximately 75-110 words. Do not publish until H2MB confirms the biography, title and credentials.]",
    headshot: {
      src: "/images/leadership/placeholder-1.svg",
      alt: "Headshot placeholder — awaiting approved leadership photography.",
      isPlaceholder: true,
    },
  },
  {
    slug: "leadership-placeholder-2",
    name: "[Full Name Pending Approval]",
    title: "[Title Pending Approval]",
    bio: "[Approved biography pending. Content should cover this leader's relevant technical or operating experience and their responsibility at H2MB, in approximately 75-110 words. Do not publish until H2MB confirms the biography, title and credentials.]",
    headshot: {
      src: "/images/leadership/placeholder-2.svg",
      alt: "Headshot placeholder — awaiting approved leadership photography.",
      isPlaceholder: true,
    },
  },
  {
    slug: "leadership-placeholder-3",
    name: "[Full Name Pending Approval]",
    title: "[Title Pending Approval]",
    bio: "[Approved biography pending. Content should cover this leader's relevant commercial or sector experience and their responsibility at H2MB, in approximately 75-110 words. Do not publish until H2MB confirms the biography, title and credentials.]",
    headshot: {
      src: "/images/leadership/placeholder-3.svg",
      alt: "Headshot placeholder — awaiting approved leadership photography.",
      isPlaceholder: true,
    },
  },
];
