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

          {/* Enhanced Tooltip - Hidden on mobile */}
          <div className="hidden lg:block absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
            <div className="bg-[#22336a] text-white px-4 py-3 rounded-xl shadow-xl whitespace-nowrap relative">
              <div className="text-sm font-bold">Start Your Journey</div>
              <div className="text-xs opacity-80">
                Apply via Sunstone Portal
              </div>
              {/* Arrow pointing to button */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#22336a]"></div>
            </div>
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Professional Header - Mobile Optimized */}
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

      {/* Hero Banner with Fixed Carousel Implementation */}
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
                    <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
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
                    <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600"
                        alt="Hi-Tech Institute Campus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''} absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'}`}>
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
                        className={`carousel-dot ${currentSlide === 0 ? 'active' : ''} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === 0
                            ? "bg-white shadow-lg scale-125 ring-2 ring-white/30"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                        }`}
                      />
                      <button
                        onClick={() => setCarouselSlide(1)}
                        className={`carousel-dot ${currentSlide === 1 ? 'active' : ''} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          currentSlide === 1
                            ? "bg-white shadow-lg scale-125 ring-2 ring-white/30"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                        }`}
                      />
                      <button
                        onClick={() => setCarouselSlide(2)}
                        className={`carousel-dot ${currentSlide === 2 ? 'active' : ''} w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 rounded-full cursor-pointer transition-all duration-300 ${
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

      {/* Placement Highlights - Mobile Optimized */}
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

      {/* Rest of sections would continue... This is just showing the carousel fix */}
    </div>
  );
};

export default Index;
