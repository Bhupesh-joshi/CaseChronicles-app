import { FaBookOpen } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const learningResourcesData = [
    {
      id:1,
      title: "How to Write a Winning Case Study?",
      description: "Learn step-by-step strategies to write engaging and result-driven case studies.",
      iconBg: "bg-bule-400 text-blue-700",
      icon: FaBookOpen,
    },
    {
      id:2,
      title: "Case Study Design Guide",
      description: "Tips on layout, visuals, and structure to make your case study look professional.",
      iconBg: "bg-bule-400 text-blue-700",
      icon: FaLightbulb,
    },
    {
      id:3,
      title: "Top Mistakes to Avoid",
      description: "Avoid common blunders that reduce the impact of your case study.",
      iconBg: "bg-bule-400 text-blue-700",
      icon: FaExclamationTriangle,
    },
    {
      id:4,
      title: "Frameworks like SWOT, PESTEL etc.",
      iconBg: "bg-bule-400 text-blue-700",
      description: "Explore popular frameworks to analyze and present your case effectively.",
      icon: FaProjectDiagram,
    },
  ];

  export default learningResourcesData