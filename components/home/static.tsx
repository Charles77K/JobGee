import { FaFileAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { IoChatbubbleOutline } from "react-icons/io5";

export const CHOOSE_US = [
  {
    title: "AI-Powered Matching",
    icon: <FaRobot size={25} />,
    description:
      "Our advanced algorithms analyze your skills and experience to find the most relevant job opportunities for you.",
  },
  {
    title: "Custom Resume Generator",
    icon: <FaFileAlt size={25} />,
    description:
      "Generate tailored resumes for each job application that highlight the most relevant skills and experiences.",
  },
  {
    title: "Cover Letter Writer",
    icon: <IoChatbubbleOutline size={25} />,
    description:
      "Let our AI write personalized cover letters that showcase why you're the perfect fit for each position.",
  },
];

export const HOW_IT_WORKS = [
  {
    number: 1,
    title: "Upload Your Resume",
    description:
      "Upload your existing resume or enter your experience and skills manually",
  },
  {
    number: 2,
    title: "Find Matching Jobs",
    description:
      "Our Ai analyzes job listings across multiple platforms to find the best matches for you",
  },
  {
    number: 3,
    title: "Generate Documents",
    description:
      "Create tailored resumes and cover letters optimized for each job application",
  },
  {
    number: 4,
    title: "Track Applications",
    description:
      "Keep track of all your job applications in one place and never miss a follow-up",
  },
];

export const TESTIMONIALS = [
  {
    image: "/images/profile.jpg",
    title: "Emily Carter",
    role: "Marketing Specialist",
    comment:
      "This platform helped me land my dream job by perfectly matching my skills with the right opportunity. The AI-generated resume was spot-on!",
  },
  {
    image: "/images/profile.jpg",
    title: "Daniel Lee",
    role: "Software Developer",
    comment:
      "I was struggling to get interviews until I used this platform. The AI-crafted cover letter made my applications stand out!",
  },
  {
    image: "/images/profile.jpg",
    title: "Sophia Martinez",
    role: "Data Analyst",
    comment:
      "The job recommendations were incredibly accurate, and the AI-generated resume highlighted my strengths perfectly. Highly recommended!",
  },
];
