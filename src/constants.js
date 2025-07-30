// categoriesData
// import BusinessIcon from '../assets/undraw_business-plan_wv9q.svg'
import BusinessIcon from '/src/assets/undraw_business-plan_wv9q.svg'
import MarketingIcon from '/src/assets/undraw_social-dashboard_81sv.svg'
import FinanceIcon from "/src/assets/undraw_printing-invoices_osgs.svg";
import EntrepreneurshipIcon from "/src/assets/undraw_founding-team_8uhm.svg";
import TechnologyIcon from "/src/assets/undraw_building-a-website_1wrp.svg";
import LeadershipIcon from "/src/assets/undraw_business-chat_xea1.svg";

// dawnloadTemplatesData
import caseStudy from '/src/assets/case-study.jpg'
import researchReport from '/src/assets/report-template.jpg'
import businessPlan from "/src/assets/business-plan-template.jpg";
import userPersonal from "/src/assets/portfolio-ppt-template.jpg";
import competitorAnalysis from "/src/assets/report-template.jpg";
import marketingStrategy from "/src/assets/sales-pitch-template.jpg";

// featuredCasesData
import AI_in_Healthcare from '/src/assets/ai-in-healthcare-industry-1536x864.jpeg'
import Blockchain_Security from '/src/assets/Blockchain1.jpg'
import Sustainability_Tech from '/src/assets/Sustainable Development Goals.jpeg'

// learningResourcesData
import { FaBookOpen } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

// programsData
import img1 from '/src/assets/p-c1.png'
import img2 from '/src/assets/digital-banking.jpg'
import img3 from '/src/assets/tesla_supply_chain_sources.jpg'
import img4 from '/src/assets/Coca-Cola-Brand-Positioning-Strategy-06-scaled.jpg'
import img5 from '/src/assets/1_55XQ2crpGRpBHioLpl3EOA.jpg'
import img6 from '/src/assets/1674734652565.png'
import img7 from '/src/assets/6483f4953b8f65001ea475c3.jpg'
import img8 from '/src/assets/07492436thumbnail.webp'
import img9 from '/src/assets/SWOT-Analysis-of-Uber.png'
import img10 from '/src/assets/New-Project-18.webp'

// testimonialsData
import picOne from '/src/assets/p-1.jpg' 
import picTwo from '/src/assets/p-2.jpg' 
import picThree from '/src/assets/p-3.jpg' 

// whyChooseUsData
import { FaBriefcase } from "react-icons/fa";
import { TiLightbulb } from "react-icons/ti";
import { IoShieldCheckmark } from "react-icons/io5";
import { RiCoinsFill } from "react-icons/ri";


// categoriesData
export const categoriesData = [
    {
        id: 1,
        name: "Business",
        description: "1200+ Case Studies",
        icon: BusinessIcon,
    },
    {
        id: 2,
        name: "Marketing",
        description: "950+ Case Studies",
        icon: MarketingIcon,
    },
    {
        id: 3,
        name: "Finance",
        description: "800+ Case Studies",
        icon: FinanceIcon,
    },
    {
        id: 4,
        name: "Entrepreneurship",
        description: "700+ Case Studies",
        icon: EntrepreneurshipIcon,
    },
    {
        id: 5,
        name: "Technology",
        description: "1000+ Case Studies",
        icon: TechnologyIcon,
    },
    {
        id: 6,
        name: "Leadership",
        description: "650+ Case Studies",
        icon: LeadershipIcon,
    },
];

// dawnloadTemplatesData
export const dawnloadTemplatesData = [
    {
        id: 1,
        name: "Case Study PPT Template",
        description: "50+ ready-to-use case study slides for impactful presentations.",
        icon: caseStudy,
    },
    {
        id: 2,
        name: "Research Report Format",
        description: "30+ Structured format to present your research data professionally.",
        icon: researchReport,
    },
    {
        id: 3,
        name: "Business Plan Template",
        description: "70+ detailed business plans with this strategic template.",
        icon: businessPlan,
    },
    {
        id: 4,
        name: "User Personal Template",
        description: "90+ customizable personal formats, Define your audience with clean.",
        icon: userPersonal,
    },
    {
        id: 5,
        name: "Competitor Analysis Sheet",
        description: "20+ Evaluate competitors with this smart & easy-to-edit layout.",
        icon: competitorAnalysis,
    },
    {
        id: 6,
        name: "Marketing Strategy Deck",
        description: "35+ Present marketing campaigns with a modern, stylish deck.",
        icon: marketingStrategy,
    },
];

// exploreLinksData
export const exploreLinksData = [
  {
    heading: "Browse Topics",
    links: [
      { name: "Business Case Studies", path: "/topics/business" },
      { name: "Marketing", path: "/topics/marketing" },
      { name: "Finance", path: "/topics/finance" },
      { name: "Technology", path: "/topics/technology" },
      { name: "Design Thinking", path: "/topics/design-thinking" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { name: "Free Programs", path: "/programs/free" },
      { name: "Paid Programs", path: "/programs/paid" },
      { name: "Certifications", path: "/programs/certifications" },
      { name: "Workshops", path: "/programs/workshops" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { name: "Blogs", path: "/resources/blogs" },
      { name: "Reports", path: "/resources/reports" },
      { name: "Research Papers", path: "/resources/research" },
      { name: "Templates", path: "/resources/templates" },
    ],
  },
  {
    heading: "Community",
    links: [
      { name: "Forum", path: "/community/forum" },
      { name: "Events", path: "/community/events" },
      { name: "User Stories", path: "/community/stories" },
    ],
  },
  {
    heading: "Tools & Help",
    links: [
      { name: "Write Case Study Guide", path: "/help/write-case-study" },
      { name: "Teach with Case Guide", path: "/help/teach-case" },
      { name: "Help Center", path: "/help/faq" },
    ],
  },
];

// faqData
export const faqData = [
    {
        id: 1,
        question: "What is a Case Study and why is it important?",
        answer:
            "A case study is an in-depth analysis of a real-world problem, business challenge, or scenario. It helps learners understand practical solutions and gain critical thinking skills.",
    },
    {
        id: 2,
        question: "How can I explore case studies on CaseStudyHub?",
        answer:
            "You can easily explore case studies by browsing different categories like Business, Marketing, Technology, Leadership, or by using the search functionality on our platform.",
    },
    {
        id: 3,
        question: "Are the case studies on CaseStudyHub free to access?",
        answer:
            "Most of the case studies are free to read. However, some premium or in-depth reports may require a subscription or payment.",
    },
    {
        id: 4,
        question: "What benefits will I get from reading case studies?",
        answer:
            "Case studies help you develop problem-solving skills, understand real market strategies, learn decision-making approaches, and gain insights from real-world examples.",
    },
    {
        id: 5,
        question: "Who can use CaseStudyHub?",
        answer:
            "Students, Entrepreneurs, Business Professionals, Marketers, and anyone interested in real-world learning and problem-solving can use CaseStudyHub.",
    },
    {
        id: 6,
        question: "How can I submit my own case study to CaseStudyHub?",
        answer:
            "You can go to our Contact Us page and submit a request to upload your case study. Our team will review it and get back to you.",
    },
];

// featuredCasesData
export const featuredCasesData = [
    {
        id: 1,
        title: "AI in Healthcare",
        description: "Role of Artificial Intelligence in modern health systems.",
        author: "Dr. Rajiv / MIT University",
        image: AI_in_Healthcare,
    },
    {
        id: 2,
        title: "Blockchain Security",
        description: "Exploring Blockchain applications for secure transactions.",
        author: "Prof. Neha / Stanford University",
        image: Blockchain_Security,
    },
    {
        id: 3,
        title: "Sustainability Tech",
        description: "Green Technology and Future of Sustainable Living.",
        author: "Dr. Arjun / IIT Bombay",
        image: Sustainability_Tech,
    },
];

// headerMenuItemsData
export const headerMenuItemsData = [
    {
        title: "Write Cases",
        dropdown: [
            { label: "Who can submit ?", link: "/Who-Can-Submit-Page" },
            { label: "Submit essentials", link: "/submit-essentials" },
            { label: "Submit guidelines...", link: "/submit-guidelines" },
            { label: "Benifit to the reshearchers", link: "/benifit-reshearchers" }
        ],
    },
    {
        title: "Join Chronicles",
        dropdown: [
            { label: "Visionary leadership insights", link: "/visionary-leadership" },
            { label: "CEO's message to learners", link: "/ceo-message" },
            { label: "Behind the scenes strategy", link: "/behind-the-scenes-strategy" },
            { label: "Commitment to education", link: "/commitment-to-education" }
        ],
    },
    {
        title: "Meet with Team",
        dropdown: [
            { label: "Diverse team of experts", link: "/diverse-team-of-experts" },
            { label: "Innovation-driven culture", link: "/innovation-driven-culture" },
            { label: "Meet the developers", link: "/meet-the-developers" },
            { label: "Story of our journey", link: "/story-of-our-journey" }
        ],
    },
    {
        title: "About Us",
        dropdown: [
            { label: "Our mission and vision", link: "/our-mission-and-Vision" },
            { label: "Meet with the CEO", link: "/meet-with-the-ceo" },
            { label: "About CaseChronicles", link: "/about-casechronicles" }
        ],
    },
];

// learningResourcesData
export const learningResourcesData = [
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

// pricingData
export const pricingData = [
    {
      id: 1,
      title: "Basic",
      price: "19.95",
      duration: "Per Month",
      features: [
        "Feature of the plan",
        "Another feature plan feature",
        "Yet another plan feature",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Standard",
      price: "49.95",
      duration: "Per Month",
      features: [
        "Feature of the plan",
        "Another feature plan feature",
        "Yet another plan feature",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "Premium",
      price: "99.95",
      duration: "Per Month",
      features: [
        "Feature of the plan",
        "Another feature plan feature",
        "Yet another plan feature",
      ],
      popular: false,
    },
  ];

// programsData
export const programsData = [
    {
      id: 1,
      title: "Harvard Business Case: Market Entry in Asia",
      description: "Analyze strategies for successful market entry in emerging Asian economies.",
      category: "Marketing",
      duration: "Short-term",
      level: "Intermediate",
      format: "Self-paced",
      image: img1,
    },
    {
      id: 2,
      title: "Case Study: Digital Disruption in Banking",
      description: "Understand how digital technologies are reshaping traditional banks.",
      category: "Strategy",
      duration: "Long-term",
      level: "Advanced",
      format: "Cohort",
      image: img2
    },
    {
      id: 3,
      title: "Tesla’s Global Supply Chain Management",
      description: "Examine how Tesla handles supply chain disruptions globally.",
      category: "Operations",
      duration: "Short-term",
      level: "Beginner",
      format: "Self-paced",
      image: img3
    },
    {
      id: 4,
      title: "Coca-Cola’s Branding Strategy in Africa",
      description: "Explore how Coca-Cola adapts its branding to diverse African markets.",
      category: "Marketing",
      duration: "Short-term",
      level: "Intermediate",
      format: "Cohort",
      image: img4
    },
    {
      id: 5,
      title: "Apple vs Samsung: Patent Wars Case Study",
      description: "Dive into the legal strategies and business impacts of the tech giants' lawsuits.",
      category: "Legal",
      duration: "Long-term",
      level: "Advanced",
      format: "Self-paced",
      image: img5
    },
    {
      id: 6,
      title: "Amazon’s Logistics Network",
      description: "Learn how Amazon builds and scales its global logistics operations.",
      category: "Operations",
      duration: "Short-term",
      level: "Intermediate",
      format: "Cohort",
      image: img6
    },
    {
      id: 7,
      title: "Netflix: Disrupting the Entertainment Industry",
      description: "Understand Netflix's growth and its impact on media consumption globally.",
      category: "Strategy",
      duration: "Short-term",
      level: "Beginner",
      format: "Self-paced",
      image: img7
    },
    {
      id: 8,
      title: "Zara’s Fast Fashion Business Model",
      description: "Explore how Zara revolutionized fashion retail with supply chain innovation.",
      category: "Marketing",
      duration: "Short-term",
      level: "Intermediate",
      format: "Cohort",
      image: img8
    },
    {
      id: 9,
      title: "Uber’s Global Expansion Challenges",
      description: "Case study on regulatory and market challenges during Uber’s expansion.",
      category: "Strategy",
      duration: "Long-term",
      level: "Advanced",
      format: "Self-paced",
      image: img9
    },
    {
      id: 10,
      title: "Starbucks' Localization Strategy in China",
      description: "Learn how Starbucks customized offerings for Chinese consumers.",
      category: "Marketing",
      duration: "Short-term",
      level: "Beginner",
      format: "Cohort",
      image: img10
    }
  ];
  
// testimonialsData
export const testimonialsData = [
  {
    id: 1,
    image: picOne,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, architecto.",
    author: "John Doe",
    role: "CEO, CompanyX",
  },
  {
    id: 2,
    image: picThree,
    text: "Voluptatum voluptates nulla molestiae, tempora dolore veniam consequatur!",
    author: "Jane Smith",
    role: "Founder, BrandY",
  },
  {
    id: 3,
    image: picTwo,
    text: "Quisquam, saepe. Fugiat possimus quidem sequi molestiae necessitatibus.",
    author: "Alex Johnson",
    role: "CTO, StartupZ",
  },
];

// whyChooseUsData
export const whyChooseUsData = [
    {
        id: 1,
        title: "Academic and Professional Recognition",
        description: "Your work deserves to be seen. Gain visibility in academic, corporate, and policy-making circles.",
        iconBg: "bg-bule-400 text-blue-700",
        icon: FaBriefcase,
    },
    {
        id: 2,
        title: "Global Outreach",
        description: "Case Chronicles is open to contributors and readers from across the world, fostering a truly international perspective.",
        iconBg: "bg-bule-400 text-blue-700",
        icon: TiLightbulb,
    },
    {
        id: 3,
        title: "Cross-disciplinary Learning",
        description: "We welcome submissions from business, education, environment, healthcare, public policy, social work, and more.",
        iconBg: "bg-bule-400 text-blue-700",
        icon: IoShieldCheckmark,
    },
    {
        id: 4,
        title: "Secure, Simple, Supportive",
        description: "Our intuitive submission process ensures your content is safe and easy to upload, with support along the way.",
        iconBg: "bg-bule-400 text-blue-700",
        icon: RiCoinsFill,
    },
];
