import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Phone,
  Mail,
  ExternalLink,
  GraduationCap,
  Users,
  Briefcase,
  Award,
  ChevronRight,
  Star,
  Trophy,
  Target,
  X,
  TrendingUp,
  Clock,
  BookOpen,
  Zap,
  ChevronLeft,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Index = () => {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [activeProgram, setActiveProgram] = useState("MBA");
  const [showPlacementPopup, setShowPlacementPopup] = useState(false);
  const [activeTab, setActiveTab] = useState("MBA");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickedRecruiters, setClickedRecruiters] = useState<string[]>([]);
  const [expandedMobileProgram, setExpandedMobileProgram] = useState<
    string | null
  >(null);
  const [mobileTabState, setMobileTabState] = useState<{
    [key: string]: "specs" | "eligibility";
  }>({});
  const [showMoreFAQs, setShowMoreFAQs] = useState(false);
  const [selectedMobileProgram, setSelectedMobileProgram] = useState<
    string | null
  >("MBA");
  const [showAllCertifications, setShowAllCertifications] = useState<{
    [key: string]: boolean;
  }>({});
  const [showScholarshipPopup, setShowScholarshipPopup] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Carousel images
  const carouselImages = [
    {
      type: "video",
      src: "https://www.youtube.com/embed/En5F0Eb_Djw?autoplay=1&mute=1&rel=0&loop=1&playlist=En5F0Eb_Djw&controls=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&showinfo=0&playsinline=1&branding=0&origin=https%3A%2F%2Fhitech.edu",
      alt: "Campus Life Video",
      title: "Campus Life",
      subtitle: "Experience Our Vibrant Community",
    },
    {
      type: "image",
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600",
      alt: "Hi-Tech Institute Campus",
      title: "Hi-Tech Institute Campus",
      subtitle: "Modern Infrastructure & Facilities",
    },
    {
      type: "image",
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=800",
      alt: "Campus View",
      title: "Campus Infrastructure",
      subtitle: "World-Class Education Hub",
    },
  ];

  // Enhanced auto-advance carousel matching HTML behavior
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // 5 second intervals like HTML version

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Direct slide navigation like HTML version
  const setCarouselSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  // Enhanced touch gesture handlers for better mobile experience
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(e.targetTouches[0].clientX); // Initialize end position
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 30; // Reduced for easier swiping
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset touch positions
    setTouchStartX(0);
    setTouchEndX(0);
  };

  const handleRecruiterClick = (recruiterName: string) => {
    setClickedRecruiters((prev) =>
      prev.includes(recruiterName)
        ? prev.filter((name) => name !== recruiterName)
        : [...prev, recruiterName],
    );
  };

  const programs = {
    MBA: {
      duration: "2-year program",
      certifications: "10 certifications",
      internships: "6+ months of internships/projects",
      projects: "4 capstone projects",
      specializations: "5 specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Marketing Management",
          careers:
            "Marketing Manager, Brand Manager, Digital Marketing Specialist",
        },
        {
          name: "IT, Analytics & Research",
          careers: "Business Analyst, Data Scientist, Research Analyst",
        },
        {
          name: "Human Resource Management",
          careers:
            "HR Manager, Talent Acquisition Manager, HR Business Partner",
        },
        {
          name: "Finance Management",
          careers: "Finance Manager, Investment Analyst, Financial Planner",
        },
        {
          name: "Operations Management",
          careers: "Operations Manager, Supply Chain Manager, Process Manager",
        },
      ],
      eligibility:
        "50% marks in graduation from a recognised university (45% for reserved category).",
    },
    BBA: {
      duration: "3-year program",
      certifications: "10 certifications",
      internships: "8+ months of internships/projects",
      projects: "6 capstone projects",
      specializations: "6 specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "IT & Business Analytics",
          careers:
            "Big Data Analyst, Data Visualization Specialist, Business Intelligence Analyst",
        },
        {
          name: "Human Resource & Talent Analytics",
          careers:
            "HR Data Analyst, Talent Acquisition Specialist, Workforce Planning Manager",
        },
        {
          name: "Marketing Management",
          careers: "Marketing Manager, Brand Manager, Campaign Strategist",
        },
        {
          name: "Retail Sales Management",
          careers: "Retail Manager, Sales Executive, Store Operations Manager",
        },
        {
          name: "Operations Management",
          careers:
            "Operations Manager, Production Manager, Logistics Coordinator",
        },
        {
          name: "Banking, Financial Services and Insurance (BFSI)",
          careers: "Banking Officer, Financial Advisor, Insurance Specialist",
        },
      ],
      eligibility:
        "Candidates must have secured a minimum of 45% aggregate marks in Class 12th from a recognized board (40% for SC/ST/OBC candidates). No specific subject requirements.",
    },
    BCA: {
      duration: "3-year program",
      certifications: "10 certifications",
      internships: "8+ months of internships/projects",
      projects: "3 capstone projects",
      specializations: "6 specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Cloud Computing",
          careers: "Cloud Engineer, DevOps Engineer, Cloud Architect",
        },
        {
          name: "Cyber Security & Forensics",
          careers:
            "Cybersecurity Analyst, Ethical Hacker, Digital Forensics Specialist",
        },
        {
          name: "Blockchain",
          careers:
            "Blockchain Developer, Cryptocurrency Analyst, Smart Contract Developer",
        },
        {
          name: "Machine Learning & AI",
          careers: "ML Engineer, AI Developer, Data Scientist",
        },
        {
          name: "Data Science & Analytics",
          careers:
            "Data Analyst, Business Intelligence Analyst, Data Visualization Expert",
        },
        {
          name: "Full Stack Development",
          careers:
            "Full Stack Developer, Web Application Developer, Frontend/Backend Developer",
        },
      ],
      eligibility:
        "Candidates must have secured a minimum of 45% aggregate marks in Class 12th from a recognized board (40% for SC/ST/OBC candidates). Mathematics as a compulsory subject is preferred.",
    },
    MCA: {
      duration: "2-year program",
      certifications: "10 certifications",
      internships: "6+ months of internships/projects",
      projects: "2 capstone projects",
      specializations: "5 specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Full Stack Development",
          careers:
            "Full Stack Developer, Web Application Developer, Frontend/Backend Developer",
        },
        {
          name: "Machine Learning & AI",
          careers: "ML Engineer, AI Developer, Data Scientist",
        },
        {
          name: "Data Science",
          careers:
            "Data Scientist, Data Analyst, Business Intelligence Specialist",
        },
        {
          name: "Cloud Computing",
          careers: "Cloud Engineer, DevOps Engineer, Cloud Solutions Architect",
        },
        {
          name: "Cyber Security",
          careers:
            "Cybersecurity Analyst, Security Engineer, Information Security Specialist",
        },
      ],
      eligibility:
        "50% marks in graduation from a recognised university (45% for reserved category). Must have studied at least one of these subjects: Computer Science, Information Technology, Informatics Practices, Mathematics, Business Mathematics, or Statistics.",
    },
    "B.Tech": {
      duration: "4-year program",
      certifications: "10 certifications",
      internships: "10+ months of Internships",
      projects: "4 capstone projects",
      specializations: "2 specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Computer Science Engineering",
          careers: "Software Engineer, System Analyst, Application Developer",
        },
        {
          name: "Information Technology",
          careers: "IT Specialist, Business Analyst, Project Manager",
        },
      ],
      eligibility:
        "Candidates must have secured a minimum of 45% aggregate marks in Class 12th from a recognized board (40% for SC/ST/OBC candidates). Compulsory subjects: Physics, Mathematics and Chemistry.",
    },
  };

  const successStories = [
    {
      name: "Priya Sharma",
      program: "MBA Graduate",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=100",
      testimonial:
        "Sunstone has been a game-changer in my journey. The practical curriculum, supportive faculty, and collaborative environment have sharpened my skills and broadened my perspective. It's more than an institution—it's a community fostering growth and success.",
      rating: 5,
      year: "MBA 2024",
    },
    {
      name: "Rahul Gupta",
      program: "BCA Graduate",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=100",
      testimonial:
        "The admission process at Sunstone was seamless, with clear guidance at every step. The diverse student community and supportive faculty create an engaging learning experience. Modern facilities and a focus on skill development have added immense value to my journey.",
      rating: 5,
      year: "BCA 2024",
    },
    {
      name: "Anjali Verma",
      program: "MCA Graduate",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=100",
      testimonial:
        "Sunstone has been a game-changer in my journey. The practical curriculum, supportive faculty, and collaborative environment have sharpened my skills and broadened my perspective. It's more than an institution—it's a community fostering growth and success.",
      rating: 5,
      year: "MCA 2024",
    },
    {
      name: "Vikram Singh",
      program: "B.Tech Graduate",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=100",
      testimonial:
        "The admission process at Sunstone was seamless, with clear guidance at every step. The diverse student community and supportive faculty create an engaging learning experience. Modern facilities and a focus on skill development have added immense value to my journey.",
      rating: 5,
      year: "B.Tech 2024",
    },
  ];

  const faqs = [
    {
      question: "What is the admission process for Hi-Tech Institute programs?",
      answer:
        "The admission process varies by program but generally includes application submission, entrance test (where applicable), document verification, and counseling. We provide step-by-step guidance throughout the process.",
    },
    {
      question: "Are there scholarship opportunities available?",
      answer:
        "Yes, we offer multiple scholarship programs including the SAT Scholarship and Bright Minds Scholarship. These can cover up to 100% of tuition fees based on academic performance and entrance test scores.",
    },
    {
      question: "What is the Placement Opportunity Program (POP)?",
      answer:
        "POP is our guaranteed placement program that provides 200+ placement opportunities, dedicated career support, and a money-back guarantee if placement commitments are not met.",
    },
    {
      question: "What are the eligibility criteria for different programs?",
      answer:
        "Eligibility varies by program. Generally, undergraduate programs require 45% marks in Class 12th (40% for reserved categories), while postgraduate programs require 50% marks in graduation (45% for reserved categories).",
    },
    {
      question: "How does the fee payment work?",
      answer:
        "We offer flexible fee payment options including installments, education loans, and scholarship adjustments. Our finance team provides personalized guidance for payment planning.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Apply Now Button - Mobile Responsive */}
      <div className="fixed right-4 md:right-6 bottom-4 md:bottom-6 z-50 animate-bounce-subtle">
        <div className="relative group">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 w-full h-full bg-[#c38935] rounded-xl animate-pulse opacity-30 group-hover:animate-ping"></div>

          {/* Main Button */}
          <a
            href="https://sunstone.in/apply-now"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-auto px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-[#c38935] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#c38935] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3 border-2 border-white/20 animate-glow-pulse"
          >
            {/* Button Content */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Apply Now</div>
                <div className="text-xs opacity-90 hidden md:block">
                  Sunstone Portal
                </div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>
      </div>

      {/* 1. Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 animate-slide-down hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
            <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-3 md:space-x-4 group animate-fade-in hover:animate-wiggle">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-5 md:h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="h-6 md:h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent animate-pulse"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2F21884ee3ea37450d8004527e3ae2d318?format=webp&width=800"
                  alt="Sunstone"
                  className="h-5 md:h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <a
                href="mailto:connect@sunstone.in"
                className="hidden md:flex items-center space-x-2 text-[#22336a] hover:text-[#c38935] transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">connect@sunstone.in</span>
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center space-x-2 bg-gradient-to-r from-[#c38935] to-[#d4a853] hover:from-[#d4a853] hover:to-[#c38935] text-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl transition-all duration-500 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 animate-glow-pulse"
              >
                <Phone className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-sm">+91 7065-30-30-30</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Hero Banner with Fixed Carousel Implementation */}
      <section className="bg-[#22336a] text-white py-4 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c38935]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="col-span-1 text-center md:text-left animate-slide-in-left order-2 md:order-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white">
                <span className="text-[#c38935] bg-clip-text bg-gradient-to-r from-[#c38935] to-[#f4d03f]">
                  Learning That Leads To Success
                </span>
              </h1>
              <div className="text-white/90 font-medium max-w-2xl leading-relaxed mb-6 text-base md:text-lg">
                <p className="text-base md:text-lg">
                  Join Hi-Tech Institute for industry-aligned programs with
                  assured placement support.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <a
                  href="https://sunstone.in/campuses/hi-tech-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#22336a] hover:bg-gray-100 font-bold text-sm md:text-base rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto"
                >
                  <span>Explore Programs with Sunstone</span>
                  <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="tel:+917065303030"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-transparent border border-white text-white font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:bg-white hover:text-[#22336a] transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="col-span-1 animate-slide-in-right order-1 md:order-2">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                {/* Enhanced Media Container matching HTML structure exactly */}
                <div className="relative bg-white rounded-xl md:rounded-2xl p-2 md:p-3 shadow-2xl group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                  {/* Carousel Container - Exact HTML implementation */}
                  <div
                    className="relative rounded-lg md:rounded-xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
                    style={{ aspectRatio: "4/3" }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    id="heroCarousel"
                  >
                    {/* Video Slide */}
                    <div
                      className={`carousel-slide ${currentSlide === 0 ? "active" : ""} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 0 ? "opacity-100" : "opacity-0"}`}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/En5F0Eb_Djw?autoplay=1&mute=1&rel=0&loop=1&playlist=En5F0Eb_Djw&controls=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&disablekb=1&fs=0&showinfo=0&playsinline=1&branding=0&origin=https%3A%2F%2Fhitech.edu"
                        title="Campus Life Video"
                        className="w-full h-full border-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    {/* Image Slides */}
                    <div
                      className={`carousel-slide ${currentSlide === 1 ? "active" : ""} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? "opacity-100" : "opacity-0"}`}
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600"
                        alt="Hi-Tech Institute Campus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={`carousel-slide ${currentSlide === 2 ? "active" : ""} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? "opacity-100" : "opacity-0"}`}
                    >
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=800"
                        alt="Campus View"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Navigation Arrows - Matching HTML exactly */}
                    <button
                      onClick={prevSlide}
                      className="hidden sm:flex absolute left-1.5 md:left-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 border border-white/20 hover:scale-110"
                    >
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="hidden sm:flex absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 border border-white/20 hover:scale-110"
                    >
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    {/* Carousel Dots - Matching HTML exactly */}
                    <div className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-10 px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full">
                      <button
                        onClick={() => setCarouselSlide(0)}
                        className={`carousel-dot ${currentSlide === 0 ? "active" : ""} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === 0
                            ? "bg-white shadow-lg scale-125 ring-2 ring-white/30"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                        }`}
                      />
                      <button
                        onClick={() => setCarouselSlide(1)}
                        className={`carousel-dot ${currentSlide === 1 ? "active" : ""} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === 1
                            ? "bg-white shadow-lg scale-125 ring-2 ring-white/30"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                        }`}
                      />
                      <button
                        onClick={() => setCarouselSlide(2)}
                        className={`carousel-dot ${currentSlide === 2 ? "active" : ""} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === 2
                            ? "bg-white shadow-lg scale-125 ring-2 ring-white/30"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                        }`}
                      />
                    </div>

                    {/* Mobile Swipe Indicator - Matching HTML */}
                    <div className="sm:hidden absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1 text-white text-xs opacity-70 animate-pulse border border-white/20">
                      <span className="flex items-center gap-1">
                        <span>👆</span>
                        <span className="text-[10px]">Swipe</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Placement Highlights - Mobile Optimized */}
      <section className="py-6 md:py-12 bg-[#22336a]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden animate-slide-up hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-[#c38935] text-white px-4 md:px-6 py-4 md:py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    Placement Highlights
                  </h3>
                  <p className="text-sm md:text-base opacity-90">
                    MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              {/* Stats Grid - Mobile responsive matching HTML */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22336a] mb-2">
                    26 LPA
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Highest Package
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22336a] mb-2">
                    1200+
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Top Recruiters
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#22336a] mb-2">
                    5000+
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Students Placed
                  </p>
                </div>
              </div>

              {/* Comparison Cards - Mobile responsive matching HTML */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#c38935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      63%
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-sm md:text-base">
                      63% Higher ROI
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      vs private colleges
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#22336a] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">
                      7X
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-sm md:text-base">
                      7X More Companies
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      vs top private institutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600">
                  Placement Report Audited & Verified by B2K Analytics, Official
                  Auditor for IIM Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Immersive Campus Experience */}
      <section className="py-6 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Animated Header */}
          <div className="text-center mb-8 md:mb-16">
            {/* Floating Badge */}
            <div className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#22336a] to-[#c38935] backdrop-blur-lg rounded-full mb-6 md:mb-8 border border-white/20 shadow-2xl group hover:scale-105 transition-all duration-500 animate-bounce-in">
              <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                IMMERSIVE CAMPUS EXPERIENCE
              </span>
              <div
                className="w-3 h-3 bg-[#f4d03f] rounded-full ml-3 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Animated Title - Mobile Optimized */}
            <h2 className="text-sm sm:text-lg md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-8 leading-tight">
              <span className="inline-block animate-slide-in-left text-[#22336a]">
                Experience
              </span>{" "}
              <span className="inline-block animate-slide-in-right text-[#22336a]">
                Our
              </span>
              <br />
              <span
                className="text-[#22336a] inline-block animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                Vibrant Campus Life
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <p
                className="text-xs sm:text-sm md:text-xl text-gray-700 leading-relaxed animate-fade-in-up mb-3 sm:mb-4 md:mb-6"
                style={{ animationDelay: "0.5s" }}
              >
                Step into a world where education meets innovation, creativity,
                and community. Watch our students thrive in an environment
                designed for excellence.
              </p>

              {/* Animated Stats - Mobile Optimized */}
              <div
                className="grid grid-cols-3 gap-2 md:gap-8 mb-4 md:mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <div className="text-center group bg-white/50 backdrop-blur-sm rounded-lg md:rounded-2xl p-2 md:p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div className="text-sm sm:text-base md:text-4xl font-bold text-[#c38935] mb-1 group-hover:scale-110 transition-transform duration-300 animate-count-up">
                    20000+
                  </div>
                  <div className="text-[10px] md:text-sm text-gray-600 font-medium">
                    Happy Students
                  </div>
                </div>
                <div className="text-center group bg-white/50 backdrop-blur-sm rounded-lg md:rounded-2xl p-2 md:p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div
                    className="text-sm sm:text-base md:text-4xl font-bold text-[#22336a] mb-1 group-hover:scale-110 transition-transform duration-300 animate-count-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    50+
                  </div>
                  <div className="text-[10px] md:text-sm text-gray-600 font-medium">
                    Campus Facilities
                  </div>
                </div>
                <div className="text-center group bg-white/50 backdrop-blur-sm rounded-lg md:rounded-2xl p-2 md:p-4 hover:bg-white/70 transition-all duration-300 hover:scale-105 shadow-lg">
                  <div
                    className="text-sm sm:text-base md:text-4xl font-bold text-[#f4d03f] mb-1 group-hover:scale-110 transition-transform duration-300 animate-count-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    24/7
                  </div>
                  <div className="text-[10px] md:text-sm text-gray-600 font-medium">
                    Learning Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra-Enhanced Video Container - Mobile Optimized */}
          <div className="max-w-4xl md:max-w-6xl mx-auto px-4 md:px-8 overflow-hidden">
            <div
              className="relative group animate-scale-in"
              style={{ animationDelay: "0.9s" }}
            >
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#c38935]/20 via-[#22336a]/15 to-[#c38935]/20 rounded-xl md:rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

              {/* Main Video Container */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-xl md:rounded-3xl overflow-hidden border border-[#c38935]/30 md:border-2 shadow-2xl group-hover:border-[#c38935]/60 transition-all duration-700 group-hover:scale-102 group-hover:-translate-y-2">
                <div className="aspect-video relative p-2 md:p-4">
                  <div className="relative rounded-2xl overflow-hidden h-full shadow-inner">
                    <iframe
                      src="https://fast.wistia.com/embed/iframe/g4et8b6dnb?autoplay=1&muted=1"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Enhanced Info Panel */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-white/80 to-white/90 backdrop-blur-lg border-t border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-[#22336a] font-bold text-sm md:text-2xl mb-2 group-hover:text-[#c38935] transition-colors duration-300">
                        Hi-Tech Institute - Where Dreams Become Reality
                      </h3>
                      <p className="text-gray-700 text-sm md:text-base">
                        Immerse yourself in our world-class programs:{" "}
                        <span className="text-[#c38935] font-semibold">
                          MBA
                        </span>{" "}
                        •{" "}
                        <span className="text-[#22336a] font-semibold">
                          BBA
                        </span>{" "}
                        •{" "}
                        <span className="text-[#c38935] font-semibold">
                          BCA
                        </span>{" "}
                        •{" "}
                        <span className="text-[#22336a] font-semibold">
                          MCA
                        </span>{" "}
                        •{" "}
                        <span className="text-[#c38935] font-semibold">
                          B.Tech
                        </span>
                      </p>
                    </div>

                    {/* Interactive CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="https://sunstone.in/campuses/hi-tech-institute"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#c38935] hover:bg-[#d4a853] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group/btn"
                      >
                        <span>Book Campus Tour</span>
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                      <a
                        href="tel:+919069069069"
                        className="px-6 py-3 bg-[#22336a] hover:bg-[#2d4a7b] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 border border-[#22336a] flex items-center justify-center"
                      >
                        <span className="mr-2">📞</span>
                        <span>Call Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sunstone Philosophy Section - Mobile Optimized */}
      <section className="py-6 md:py-12 bg-gradient-to-br from-[#22336a] via-[#2d4a7b] to-[#22336a] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-5 right-5 w-32 h-32 md:w-72 md:h-72 bg-[#c38935]/10 rounded-full blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-5 left-5 w-40 h-40 md:w-96 md:h-96 bg-white/5 rounded-full blur-2xl md:blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] via-[#f4d03f] to-[#c38935]">
                THE SUNSTONE PHILOSOPHY
              </span>
              <br />
              <span className="text-white/90">
                helps you learn from the best and provide a hands-on experience
                so your education is not just limited to theory
              </span>
            </h2>
          </div>

          {/* Philosophy Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Point 1 */}
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:bg-white/15 hover:border-[#c38935]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#c38935] to-[#f4d03f] rounded-xl md:rounded-2xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-[#c38935] mb-2">
                    01
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-3">
                    Learn from Recruiters
                  </h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    CEOs, CTOs, and COOs of Fortune 500 companies and start-ups
                    with years of recruitment experience
                  </p>
                </div>
              </div>
            </div>

            {/* Point 2 */}
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:bg-white/15 hover:border-[#c38935]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#f4d03f] to-[#c38935] rounded-xl md:rounded-2xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-[#c38935] mb-2">
                    02
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-3">
                    Practice in the Real World
                  </h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    Gain hands-on experience with internships & real-life
                    projects to be job-ready from Day 1
                  </p>
                </div>
              </div>
            </div>

            {/* Point 3 */}
            <div className="group relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 h-full hover:bg-white/15 hover:border-[#c38935]/30 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#c38935] to-[#f4d03f] rounded-xl md:rounded-2xl mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-[#c38935] mb-2">
                    03
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-3">
                    Create Your Portfolio
                  </h3>
                  <p className="text-white/80 leading-relaxed text-xs md:text-sm">
                    Showcase your verified skills and experience with a
                    professional portfolio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Placement Opportunity Program */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
          {/* More Compact Header for Mobile */}
          <div className="text-center mb-4 md:mb-16">
            <h2 className="text-base sm:text-lg md:text-4xl lg:text-6xl font-bold text-[#22336a] mb-2 md:mb-6 leading-tight">
              Placement
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] via-[#f4d03f] to-[#c38935]">
                {" "}
                Opportunity
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22336a] to-[#3b4d7a]">
                Program (POP)
              </span>
            </h2>
            <div className="max-w-4xl mx-auto text-gray-700 text-sm md:text-xl leading-relaxed font-normal max-w-896 pb-4 mx-auto">
              <p>WHAT WE PROMISE TO ALL STUDENTS</p>
            </div>
          </div>

          {/* Mobile: Different Animation - Vertical Sliding Cards */}
          <div className="block md:hidden mb-4">
            <div className="space-y-2">
              <div
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 transform transition-all duration-700 animate-slide-in-left"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-2">
                      200+ Placement Opportunities
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Guaranteed access to extensive placement opportunities
                      across leading companies
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 transform transition-all duration-700 animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-2">
                      First Year Tuition Fee Back
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      We'll refund your first-year tuition fee if you don't
                      receive promised opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 transform transition-all duration-700 animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-2">
                      Dedicated Career Support
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Personal mentorship, interview preparation, and continuous
                      guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 3-Column Grid Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">
                200+ Placement Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Access to extensive placement opportunities across leading
                companies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">
                First Year Tuition Fee Back
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you don't receive the promised placement opportunities, we'll
                refund your first-year tuition fee.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">
                Dedicated Career Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Personal mentorship, interview preparation, and continuous
                guidance from industry professionals throughout your journey.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={() => setShowPlacementPopup(true)}
              className="bg-[#22336a] hover:bg-[#2d4a7b] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Learn About POP
            </Button>
          </div>
        </div>
      </section>

      {/* 7. New Age Education Section */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 via-transparent to-[#c38935]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-4 md:mb-6">
              New Age Education That Secures Futures
            </h2>
            <p className="text-xs md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              <strong>
                Transform your career with industry-integrated programs designed
                by corporate leaders, featuring cutting-edge curriculum,
                practical learning experiences, and guaranteed placement
                support.
              </strong>
            </p>
          </div>

          {/* Key Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#22336a] group-hover:text-[#c38935] transition-colors duration-300">
                  Curriculum for Jobs of 2030
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Future-focused learning paths designed for tomorrow's careers
                  with industry-relevant skills and cutting-edge technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#22336a] group-hover:text-[#c38935] transition-colors duration-300">
                  Corporate Leaders as Educators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Learn directly from industry veterans and Fortune 500
                  executives who bring real-world experience to the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center text-[#22336a] group-hover:text-[#c38935] transition-colors duration-300">
                  Hands-on Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Practical projects, internships, and real-world applications
                  ensure you're job-ready from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. Key Offerings - Same as New Age Education above */}

      {/* 9. Awards Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading
              industry bodies and educational institutions
            </p>
          </div>

          {/* Awards Carousel */}
          <div className="relative overflow-hidden bg-white rounded-xl py-8">
            <div className="flex space-x-8 animate-scroll-right-to-left">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex-shrink-0 w-64">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-[#22336a] mb-2">
                      Excellence Award {index + 1}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Recognized for outstanding contribution to higher
                      education and student success.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Programs Offered */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Programs Offered
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our industry-aligned programs designed to prepare you
              for tomorrow's careers
            </p>
          </div>

          {/* Program Tabs */}
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="MBA">MBA</TabsTrigger>
              <TabsTrigger value="BBA">BBA</TabsTrigger>
              <TabsTrigger value="BCA">BCA</TabsTrigger>
              <TabsTrigger value="MCA">MCA</TabsTrigger>
              <TabsTrigger value="B.Tech">B.Tech</TabsTrigger>
            </TabsList>

            {Object.entries(programs).map(([key, program]) => (
              <TabsContent key={key} value={key}>
                <Card className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <CardHeader
                    className={`bg-gradient-to-r ${program.color} text-white p-6`}
                  >
                    <CardTitle className="text-2xl font-bold mb-2">
                      {key === "B.Tech"
                        ? "Bachelor of Technology (B.Tech)"
                        : key === "MBA"
                          ? "Master of Business Administration (MBA)"
                          : key === "BBA"
                            ? "Bachelor of Business Administration (BBA)"
                            : key === "BCA"
                              ? "Bachelor of Computer Applications (BCA)"
                              : "Master of Computer Applications (MCA)"}
                    </CardTitle>
                    <CardDescription className="text-white/90">
                      {key === "MBA"
                        ? "Transform into a business leader with comprehensive management education"
                        : key === "BBA"
                          ? "Build a strong foundation in business fundamentals and management principles"
                          : key === "BCA"
                            ? "Master the foundations of computer science and software development"
                            : key === "MCA"
                              ? "Advanced computer science education for software development leadership"
                              : "Comprehensive engineering education with cutting-edge technology focus"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Duration
                        </div>
                        <div className="text-lg font-bold text-[#22336a]">
                          {program.duration.split("-")[0]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Certifications
                        </div>
                        <div className="text-lg font-bold text-[#22336a]">
                          {program.certifications.split(" ")[0]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Internships
                        </div>
                        <div className="text-lg font-bold text-[#22336a]">
                          {program.internships.split(" ")[0]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Projects
                        </div>
                        <div className="text-lg font-bold text-[#22336a]">
                          {program.projects.split(" ")[0]}
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Specializations
                        </div>
                        <div className="text-lg font-bold text-[#22336a]">
                          {program.specializations.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Specializations Grid */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#22336a] mb-6">
                        Specializations & Career Paths
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {program.certificationsList.map((cert, index) => (
                          <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg hover:border-[#c38935] transition-colors duration-300"
                          >
                            <h5 className="font-bold text-[#22336a] mb-2">
                              {cert.name}
                            </h5>
                            <p className="text-sm text-gray-600">
                              {cert.careers}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-[#22336a] mb-3">
                        Eligibility Criteria
                      </h4>
                      <p className="text-gray-700">{program.eligibility}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          {/* CTA Buttons */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => setShowPlacementPopup(true)}
                className="bg-[#22336a] hover:bg-[#2d4a7b] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Learn About POP
              </Button>
              <Button
                onClick={() => setShowScholarshipPopup(true)}
                className="bg-[#c38935] hover:bg-[#d4a853] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Star className="mr-2 h-5 w-5" />
                Check Scholarship Options
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Top Recruiters */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Our Top Recruiters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading companies trust our graduates and actively recruit from
              our programs
            </p>
          </div>

          {/* Recruiters Carousel */}
          <div className="relative overflow-hidden bg-white rounded-xl py-8">
            <div className="flex space-x-8 animate-scroll-left-to-right">
              {[
                "TCS",
                "Infosys",
                "Wipro",
                "Microsoft",
                "Google",
                "Amazon",
                "IBM",
                "Accenture",
                "Deloitte",
                "KPMG",
              ].map((company, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-48 p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${clickedRecruiters.includes(company) ? "ring-2 ring-[#c38935]" : ""}`}
                  onClick={() => handleRecruiterClick(company)}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#c38935] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">
                        {company.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-bold text-[#22336a]">{company}</h4>
                    <p className="text-sm text-gray-600">Top Recruiter</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. Fee Payment */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Easy Fee Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible payment plans designed to make quality education
              accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#22336a]">
                  Installment Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Spread your fees across convenient monthly or quarterly
                  installments with zero additional charges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#22336a]">
                  Education Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Partner with leading banks for hassle-free education loans at
                  competitive interest rates.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-[#22336a]">Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Merit-based scholarships covering up to 100% of tuition fees
                  for deserving candidates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 13. Admission Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Simple Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these easy steps to secure your admission and start your
              journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description:
                  "Submit your application form with required documents through our online portal.",
              },
              {
                step: "02",
                title: "Entrance Test",
                description:
                  "Take the SAT (Sunstone Admission Test) or submit valid entrance exam scores.",
              },
              {
                step: "03",
                title: "Counseling",
                description:
                  "Participate in our counseling session to choose your preferred program and specialization.",
              },
              {
                step: "04",
                title: "Confirmation",
                description:
                  "Complete the admission formalities and confirm your seat by paying the admission fee.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#22336a] to-[#c38935] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">
                      {item.step}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-[#22336a] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://sunstone.in/apply-now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#c38935] hover:bg-[#d4a853] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Your Application</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* 14. Success Stories */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates who have transformed their careers through
              our programs
            </p>
          </div>

          {/* Desktop Horizontal Scrolling */}
          <div className="hidden md:block relative overflow-hidden bg-gray-50 rounded-xl py-8 mb-16">
            <div className="flex space-x-8 animate-scroll-right-to-left">
              {successStories.concat(successStories).map((story, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <Card className="h-80 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <img
                          src={story.image}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-bold text-[#22336a] text-lg">
                            {story.name}
                          </h4>
                          <p className="text-[#c38935] font-semibold">
                            {story.program}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        "{story.testimonial}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex text-yellow-400">
                          {[...Array(story.rating)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500">
                          {story.year}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden mb-8">
            <div className="overflow-hidden">
              <div className="flex space-x-4 animate-scroll-left-to-right">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 text-center p-4 bg-white rounded-lg shadow-lg border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div className="text-left">
                        <h4 className="font-bold text-[#22336a] text-sm">
                          {story.name}
                        </h4>
                        <p className="text-[#c38935] font-semibold text-xs">
                          {story.program}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      "{story.testimonial.substring(0, 120)}..."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our programs and admission
              process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, showMoreFAQs ? faqs.length : 3).map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg bg-white p-6 text-left hover:bg-gray-50 transition-colors duration-200">
                  <span className="font-semibold text-[#22336a]">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-gray-500" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6 bg-white rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {faqs.length > 3 && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowMoreFAQs(!showMoreFAQs)}
                variant="outline"
                className="border-[#22336a] text-[#22336a] hover:bg-[#22336a] hover:text-white"
              >
                {showMoreFAQs ? "Show Less" : "Show More FAQs"}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 16. Footer */}
      <footer className="bg-[#22336a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-8 w-auto"
                />
                <div className="h-8 w-px bg-white/20"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2F21884ee3ea37450d8004527e3ae2d318?format=webp&width=800"
                  alt="Sunstone"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-white/80 mb-4">
                Hi-Tech Institute in partnership with Sunstone - Learning that
                leads to success.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    MBA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    BBA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    BCA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    MCA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    B.Tech
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Admission Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Placement Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Campus Life
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <a
                  href="tel:+917065303030"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7065-30-30-30
                </a>
                <a
                  href="mailto:connect@sunstone.in"
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  connect@sunstone.in
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm">
                © 2024 Hi-Tech Institute. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {showPlacementPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-lg md:rounded-2xl max-w-sm md:max-w-5xl w-full mx-2 md:mx-4 relative shadow-2xl max-h-[95vh] md:max-h-[90vh] overflow-y-auto animate-scaleIn">
            <Button
              onClick={() => setShowPlacementPopup(false)}
              className="absolute top-2 right-2 md:top-4 md:right-4 w-6 h-6 md:w-10 md:h-10 p-0 rounded-full"
              variant="outline"
            >
              <X className="h-3 w-3 md:h-5 md:w-5" />
            </Button>

            <div className="p-3 md:p-8">
              <div className="text-center mb-3 md:mb-8">
                <h3 className="text-sm md:text-3xl font-bold text-[#22336a] mb-2 md:mb-4">
                  Placement Opportunity Program
                </h3>
                <p className="text-gray-600 text-xs md:text-lg max-w-2xl mx-auto">
                  An industry-aligned placement program with dedicated support,
                  focused on outcomes that matter.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-3 md:mb-8">
                <div className="text-center p-2 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                  <div className="text-sm md:text-3xl font-bold text-[#22336a] mb-1 md:mb-2">
                    200+
                  </div>
                  <p className="text-gray-600 font-medium text-[10px] md:text-base">
                    Assured Opportunities
                  </p>
                </div>
                <div className="text-center p-2 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                  <div className="text-sm md:text-3xl font-bold text-[#22336a] mb-1 md:mb-2">
                    100%
                  </div>
                  <p className="text-gray-600 font-medium text-[10px] md:text-base">
                    First Year Tuition Fee Back
                  </p>
                </div>
                <div className="text-center p-2 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                  <div className="text-sm md:text-3xl font-bold text-[#22336a] mb-1 md:mb-2">
                    1200+
                  </div>
                  <p className="text-gray-600 font-medium text-[10px] md:text-base">
                    Top Recruiters
                  </p>
                </div>
                <div className="text-center p-2 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                  <div className="text-sm md:text-3xl font-bold text-[#22336a] mb-1 md:mb-2">
                    26 LPA
                  </div>
                  <p className="text-gray-600 font-medium text-[10px] md:text-base">
                    Highest Package
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-3 md:pt-6">
                <p className="text-[10px] md:text-sm text-gray-500 text-center mb-3 md:mb-6 max-w-3xl mx-auto">
                  Terms and conditions apply. Placement guarantee subject to
                  program completion, maintaining minimum academic standards,
                  and active participation in placement activities.
                </p>
                <div className="flex flex-col gap-2 md:gap-4 md:flex-row justify-center">
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 bg-[#22336a] hover:bg-[#2d4a7b] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-xs md:text-base"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </a>
                  <a
                    href="tel:+917065303030"
                    className="inline-flex items-center justify-center px-4 py-2 md:px-8 md:py-3 bg-white border-2 border-[#22336a] text-[#22336a] font-bold rounded-lg hover:bg-[#22336a] hover:text-white transition-all duration-300 text-xs md:text-base"
                  >
                    <Phone className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    <span>Call for Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showScholarshipPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-end justify-center md:items-center md:justify-center">
          <div className="bg-white rounded-t-2xl md:rounded-2xl w-full max-w-sm md:max-w-2xl md:w-full relative shadow-2xl max-h-[75vh] md:max-h-[90vh] overflow-y-auto transform transition-all duration-300">
            <Button
              onClick={() => setShowScholarshipPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 p-0 rounded-full"
              variant="outline"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="p-3 md:p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#22336a] to-[#c38935] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#22336a] mb-2">
                  Scholarship Opportunities
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Unlock your potential with financial support
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-3 md:p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#22336a] to-[#c38935] rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <Trophy className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22336a] text-xs md:text-sm">
                        SAT Scholarship
                      </h4>
                      <p className="text-[10px] md:text-xs text-gray-600">
                        Sunstone Admission Test
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    Unlock scholarships up to{" "}
                    <span className="font-bold text-[#c38935]">
                      100% of tuition fees
                    </span>{" "}
                    based on your SAT performance.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-xl p-3 md:p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#c38935] to-[#22336a] rounded-lg flex items-center justify-center mr-2 md:mr-3">
                      <Star className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22336a] text-xs md:text-sm">
                        Bright Minds Scholarship
                      </h4>
                      <p className="text-[10px] md:text-xs text-gray-600">
                        Merit-based Excellence
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600">
                    Get financial support ranging from{" "}
                    <span className="font-bold text-[#c38935]">25% to 75%</span>{" "}
                    based on academic achievements.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button
                  onClick={() => {
                    setShowScholarshipPopup(false);
                    window.open("https://sunstone.in/apply-now", "_blank");
                  }}
                  className="bg-gradient-to-r from-[#22336a] to-[#c38935] text-white px-4 md:px-6 py-2 rounded-lg font-semibold text-xs md:text-sm"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
