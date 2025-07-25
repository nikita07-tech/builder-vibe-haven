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
  const [expandedMobileProgram, setExpandedMobileProgram] = useState<string | null>(null);
  const [mobileTabState, setMobileTabState] = useState<{[key: string]: 'specs' | 'eligibility'}>({});
  const [showMoreFAQs, setShowMoreFAQs] = useState(false);
  const [selectedMobileProgram, setSelectedMobileProgram] = useState<string | null>(null);
  const [showAllCertifications, setShowAllCertifications] = useState<{[key: string]: boolean}>({});

  // Carousel images
  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600",
      alt: "Hi-Tech Institute Campus",
      title: "Hi-Tech Institute Campus",
      subtitle: "Modern Infrastructure & Facilities",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=800",
      alt: "Campus View",
      title: "Campus Infrastructure",
      subtitle: "World-Class Education Hub",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
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
      certifications: "10 advanced certifications",
      internships: "6+ months of internships/projects",
      projects: "4 capstone projects",
      specializations: "6 new-age specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Data Analytics & Business Intelligence",
          careers:
            "Data Analyst, Business Intelligence Analyst, Data Scientist",
        },
        {
          name: "Logistics & Supply Chain Management",
          careers:
            "Supply Chain Manager, Logistics Coordinator, Procurement Manager",
        },
        {
          name: "Sales Leadership",
          careers:
            "Sales Manager, Business Development Manager, Key Account Manager",
        },
        {
          name: "Digital Marketing",
          careers:
            "Social Media Manager, SEO Manager, Performance Marketing Specialist",
        },
        {
          name: "Financial Modelling & Valuation",
          careers:
            "Financial Analyst, Investment Banker, Equity Research Analyst",
        },
        {
          name: "Project Management",
          careers: "Project Manager, Operations Manager, Program Manager",
        },
        {
          name: "Product Management",
          careers: "Product Manager, UX Strategist, Market Research Analyst",
        },
        {
          name: "Entrepreneurship Fundamentals",
          careers: "Startup Founder, Business Consultant, Venture Analyst",
        },
        {
          name: "Human Resource & Talent Analytics",
          careers: "HR Analyst, Talent Acquisition Manager",
        },
        {
          name: "Trading and Investment",
          careers: "Stock Trader, Investment Analyst, Portfolio Manager",
        },
      ],
      eligibility:
        "50% marks in graduation from a recognised university (45% for reserved category).",
    },
    BBA: {
      duration: "3-year program",
      certifications: "10 advanced certifications",
      internships: "8+ months of internships/projects",
      projects: "6 capstone projects",
      specializations: "6 new-age specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Data Analytics & Business Intelligence",
          careers:
            "Data Analyst, Business Intelligence Analyst, Data Scientist",
        },
        {
          name: "Logistics & Supply Chain Management",
          careers:
            "Supply Chain Manager, Logistics Coordinator, Procurement Manager",
        },
        {
          name: "Sales Leadership",
          careers:
            "Sales Manager, Business Development Manager, Key Account Manager",
        },
        {
          name: "Digital Marketing",
          careers:
            "Social Media Manager, SEO Manager, Performance Marketing Specialist",
        },
        {
          name: "Financial Modelling & Valuation",
          careers:
            "Financial Analyst, Investment Banker, Equity Research Analyst",
        },
        {
          name: "Project Management",
          careers: "Project Manager, Operations Manager, Program Manager",
        },
        {
          name: "Product Management",
          careers: "Product Manager, UX Strategist, Market Research Analyst",
        },
        {
          name: "Entrepreneurship Fundamentals",
          careers: "Startup Founder, Business Consultant, Venture Analyst",
        },
        {
          name: "Human Resource & Talent Analytics",
          careers: "HR Analyst, Talent Acquisition Manager",
        },
        {
          name: "Trading and Investment",
          careers: "Stock Trader, Investment Analyst, Portfolio Manager",
        },
      ],
      eligibility:
        "50% marks in class 10 & 12 from a recognised board of education.",
    },
    BCA: {
      duration: "3-year program",
      certifications: "10 advanced certifications",
      internships: "8+ months of internships/projects",
      projects: "6 capstone projects",
      specializations: "6 new-age specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Programming Foundation",
          careers: "Software Developer, Web Developer",
        },
        {
          name: "Full Stack Development",
          careers: "Full Stack Developer, Backend Developer",
        },
        {
          name: "Advanced DSA & Competitive Coding",
          careers: "Software Engineer, Algorithm Engineer",
        },
        {
          name: "Data Science & Analytics",
          careers: "Data Analyst, Business Intelligence Analyst",
        },
        {
          name: "AI for Everyone",
          careers: "AI Consultant, Automation Specialist",
        },
        {
          name: "AI & Machine Learning",
          careers: "Machine Learning Engineer, AI Researcher",
        },
        { name: "Cloud Computing", careers: "Cloud Engineer, DevOps Engineer" },
        {
          name: "Cybersecurity & Forensics",
          careers: "Cybersecurity Analyst, Ethical Hacker",
        },
        {
          name: "Mobile App Development",
          careers: "Mobile App Developer, Android/iOS Developer",
        },
        {
          name: "Robotics and IoT Automation",
          careers: "Robotics Engineer, IoT Developer",
        },
      ],
      eligibility:
        "Passed Class 12th from a recognized board of education. Must have studied at least one of these subjects: Computer Science, Information Technology, Informatics Practices, Mathematics, Business Mathematics, or Statistics.",
    },
    MCA: {
      duration: "2-year program",
      certifications: "10 advanced certifications",
      internships: "6+ months of internships/projects",
      projects: "6 capstone projects",
      specializations: "6 new-age specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Programming Foundation",
          careers: "Software Developer, Web Developer",
        },
        {
          name: "Full Stack Development",
          careers: "Full Stack Developer, Backend Developer",
        },
        {
          name: "Advanced DSA & Competitive Coding",
          careers: "Software Engineer, Algorithm Engineer",
        },
        {
          name: "Data Science & Analytics",
          careers: "Data Analyst, Business Intelligence Analyst",
        },
        {
          name: "AI for Everyone",
          careers: "AI Consultant, Automation Specialist",
        },
        {
          name: "AI & Machine Learning",
          careers: "Machine Learning Engineer, AI Researcher",
        },
        { name: "Cloud Computing", careers: "Cloud Engineer, DevOps Engineer" },
        {
          name: "Cybersecurity & Forensics",
          careers: "Cybersecurity Analyst, Ethical Hacker",
        },
        {
          name: "Mobile App Development",
          careers: "Mobile App Developer, Android/iOS Developer",
        },
        {
          name: "Robotics and IoT Automation",
          careers: "Robotics Engineer, IoT Developer",
        },
      ],
      eligibility:
        "50% marks in graduation from a recognised university (45% for reserved category). Must have studied at least one of these subjects: Computer Science, Information Technology, Informatics Practices, Mathematics, Business Mathematics, or Statistics.",
    },
    "B.Tech": {
      duration: "4-year program",
      certifications: "10 advanced certifications",
      internships: "10+ months of Internships",
      projects: "8 capstone projects",
      specializations: "6 new-age specializations",
      color: "from-[#22336a] to-[#3b4d7a]",
      certificationsList: [
        {
          name: "Programming Foundation",
          careers: "Software Developer, Web Developer",
        },
        {
          name: "Full Stack Development",
          careers: "Full Stack Developer, Backend Developer",
        },
        {
          name: "Advanced DSA & Competitive Coding",
          careers: "Software Engineer, Algorithm Engineer",
        },
        {
          name: "Data Science & Analytics",
          careers: "Data Analyst, Business Intelligence Analyst",
        },
        {
          name: "AI for Everyone",
          careers: "AI Consultant, Automation Specialist",
        },
        {
          name: "AI & Machine Learning",
          careers: "Machine Learning Engineer, AI Researcher",
        },
        { name: "Cloud Computing", careers: "Cloud Engineer, DevOps Engineer" },
        {
          name: "Cybersecurity & Forensics",
          careers: "Cybersecurity Analyst, Ethical Hacker",
        },
        {
          name: "Mobile App Development",
          careers: "Mobile App Developer, Android/iOS Developer",
        },
        {
          name: "Robotics and IoT Automation",
          careers: "Robotics Engineer, IoT Developer",
        },
      ],
      eligibility:
        "Passed Class 10+2 with Physics, Mathematics, Chemistry, Computer Science, or Biology. For Agriculture Engineering, Agriculture stream students must have at least 45% marks (40% for reserved category) in these subjects combined.",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Apply Now Button - Mobile Responsive */}
      <div className="fixed right-3 md:right-6 bottom-3 md:bottom-6 z-50 animate-bounce-subtle">
        <div className="relative group">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 w-full h-full bg-[#c38935] rounded-lg md:rounded-xl animate-pulse opacity-30 group-hover:animate-ping"></div>

          {/* Main Button */}
          <a
            href="https://sunstone.in/apply-now"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-auto px-3 md:px-6 py-2 md:py-4 bg-gradient-to-r from-[#c38935] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#c38935] text-white font-bold rounded-lg md:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3 border-2 border-white/20 animate-glow-pulse"
          >
            {/* Button Content */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-md md:rounded-lg flex items-center justify-center">
                <svg
                  className="w-3 h-3 md:w-5 md:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs md:text-sm font-bold">Apply Now</div>
                <div className="text-xs opacity-90 hidden md:block">Sunstone Portal</div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-lg md:rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          {/* Enhanced Tooltip - Hidden on mobile */}
          <div className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
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
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Professional Header - Extra Small Mobile */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 animate-slide-down hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-16 md:h-18 lg:h-20">
            <div className="flex items-center space-x-1 sm:space-x-4 md:space-x-6 lg:space-x-8">
              <div className="flex items-center space-x-1 sm:space-x-3 md:space-x-4 group animate-fade-in hover:animate-wiggle">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-2 sm:h-5 md:h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="h-3 sm:h-7 md:h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent animate-pulse"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2F21884ee3ea37450d8004527e3ae2d318?format=webp&width=800"
                  alt="Sunstone"
                  className="h-2 sm:h-5 md:h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
              </div>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-3 md:space-x-4">
              <a
                href="mailto:connect@sunstone.in"
                className="hidden md:flex items-center space-x-2 text-[#22336a] hover:text-[#c38935] transition-all duration-300 font-medium px-2 md:px-3 py-1.5 md:py-2 rounded-lg hover:bg-gray-50"
              >
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="text-xs md:text-sm">connect@sunstone.in</span>
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-[#c38935] to-[#d4a853] hover:from-[#d4a853] hover:to-[#c38935] text-white px-1 sm:px-3 md:px-4 py-0.5 sm:py-2 md:py-2.5 rounded-md md:rounded-xl transition-all duration-500 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 animate-glow-pulse"
              >
                <Phone className="h-2 w-2 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">+91 7065-30-30-30</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Carousel - Mobile Optimized */}
      <section className="bg-gradient-to-br from-[#22336a] via-[#2d4a7b] to-[#22336a] text-white py-4 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c38935]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-6 lg:gap-12 items-center">
            <div className="col-span-1 md:col-span-1 lg:col-span-3 text-left animate-slide-in-left">
              <div className="inline-flex items-center px-1 md:px-4 py-0.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-1 md:mb-6 border border-white/30">
                <span className="text-white font-semibold text-xs md:text-sm">
                  PROFESSIONAL EXCELLENCE
                </span>
              </div>
              <h1 className="text-sm sm:text-lg md:text-3xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 lg:mb-6 leading-tight text-white">
                Transform Your Future with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-[#f4d03f]">
                  {" "}
                  Premier Education
                </span>
              </h1>
              <div className="mb-2 md:mb-6">
                <p className="text-xs sm:text-xs md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed max-w-2xl mb-1 md:mb-3 lg:mb-4">
                  Join Hi-Tech Institute for industry-aligned programs with guaranteed placement support.
                </p>
                <div className="inline-flex items-center px-2 md:px-6 py-1 md:py-3 rounded-lg md:rounded-xl">
                  <div className="flex items-center mr-1 md:mr-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2Fe8fe1239f4724767b509ddb3b4f8688e?format=webp&width=800"
                      alt="Institution Image"
                      className="h-4 md:h-8 lg:h-10 w-auto rounded-md md:rounded-lg"
                    />
                  </div>
                  <span className="text-white font-bold text-xs md:text-base lg:text-lg">
                    Powered By Sunstone
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-4">
                <a
                  href="https://sunstone.in/campuses/hi-tech-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-2 sm:px-3 md:px-6 lg:px-8 py-1 sm:py-1.5 md:py-3 lg:py-4 bg-white text-[#22336a] hover:bg-gray-100 font-bold text-xs sm:text-xs md:text-base rounded-md sm:rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Explore Programs</span>
                  <ExternalLink className="ml-1 sm:ml-1 md:ml-2 h-3 w-3 sm:h-3 sm:w-3 md:h-5 md:w-5" />
                </a>
                <a
                  href="tel:+917065303030"
                  className="inline-flex items-center justify-center px-2 sm:px-3 md:px-6 lg:px-8 py-1 sm:py-1.5 md:py-3 lg:py-4 bg-transparent border border-white text-white font-bold text-xs sm:text-xs md:text-base rounded-md sm:rounded-lg md:rounded-xl hover:bg-white hover:text-[#22336a] transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-1 sm:mr-1 md:mr-2 h-3 w-3 sm:h-3 sm:w-3 md:h-5 md:w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2 animate-slide-in-right">
              <div className="relative max-w-xs md:max-w-xl mx-auto">
                <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-lg bg-white p-1 md:p-2">
                  {/* Carousel Container */}
                  <div className="relative">
                    <div className="overflow-hidden rounded-md md:rounded-lg">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                      >
                        {carouselImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto object-cover aspect-[4/3]"
                              loading="eager"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation Arrows - Hidden on small mobile */}
                    <button
                      onClick={prevSlide}
                      className="hidden sm:flex absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="hidden sm:flex absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black/50 hover:bg-black/70 rounded-full items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-1 md:bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Caption - Hidden on small mobile */}
                  <div className="hidden md:block absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 md:p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-1 md:mb-2">
                        <div className="w-4 h-4 md:w-6 md:h-6 bg-[#c38935] rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-[#22336a] font-bold text-xs md:text-sm">
                          {carouselImages[currentSlide].title}
                        </p>
                      </div>
                      <p className="text-gray-600 text-xs">
                        {carouselImages[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights - Extra Small Mobile */}
      <section className="py-2 md:py-8 lg:py-12 bg-[#22336a]">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="bg-white rounded-md md:rounded-xl shadow-xl overflow-hidden animate-slide-up hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-[#c38935] text-white px-2 md:px-6 py-1.5 md:py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs md:text-lg lg:text-xl font-bold">Placement Highlights</h3>
                  <p className="text-xs md:text-sm opacity-90">
                    MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
              </div>
            </div>

            <div className="p-1.5 md:p-4 lg:p-6">
              {/* Mobile: Extra compact stats */}
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 md:gap-4 lg:gap-6 mb-2 md:mb-6">
                <div className="text-center">
                  <div className="text-sm md:text-2xl lg:text-3xl font-bold text-[#22336a] mb-0.5 md:mb-2">
                    26 LPA
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Highest Package</p>
                </div>
                <div className="text-center">
                  <div className="text-sm md:text-2xl lg:text-3xl font-bold text-[#22336a] mb-0.5 md:mb-2">
                    1200+
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Top Recruiters</p>
                </div>
                <div className="text-center">
                  <div className="text-sm md:text-2xl lg:text-3xl font-bold text-[#22336a] mb-0.5 md:mb-2">
                    5000+
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Students Placed</p>
                </div>
              </div>

              {/* Mobile: Ultra compact comparison cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-3 lg:gap-4 mb-1.5 md:mb-4">
                <div className="bg-gray-50 rounded-md md:rounded-lg p-1.5 md:p-3 lg:p-4 flex items-center space-x-1.5 md:space-x-3">
                  <div className="w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#c38935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs md:text-sm">63%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-xs md:text-sm">
                      63% Higher ROI
                    </p>
                    <p className="text-xs text-gray-600">vs private colleges</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md md:rounded-lg p-1.5 md:p-3 lg:p-4 flex items-center space-x-1.5 md:space-x-3">
                  <div className="w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#22336a] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs md:text-sm">7X</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-xs md:text-sm">
                      7X More Companies
                    </p>
                    <p className="text-xs text-gray-600">vs institutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-md md:rounded-lg p-1.5 md:p-3 text-center">
                <p className="text-xs md:text-sm text-gray-700">
                  Placement report audited by B2K Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-[#22336a]/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-[#c38935]/10 rounded-full mb-4 md:mb-6">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-[#c38935] mr-2" />
              <span className="text-[#c38935] font-semibold text-xs md:text-sm">
                AWARDS & RECOGNITION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#22336a] mb-4 md:mb-6 leading-tight">
              Recognized
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] via-[#f4d03f] to-[#c38935]">
                {" "}
                Excellence
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22336a] to-[#3b4d7a]">
                in Education
              </span>
            </h2>
            <div
              className="max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-4">
                Our commitment to educational excellence has been recognized by
                leading industry organizations
              </p>
            </div>
          </div>

          {/* Mobile Awards Carousel */}
          <div className="block md:hidden mb-12">
            <div className="overflow-hidden bg-gray-50 rounded-xl py-6">
              <div className="flex space-x-6 animate-scroll whitespace-nowrap">
                {[
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F634b6859a0a5475897251bed28fb9a48?format=webp&width=800",
                    title: "Excellence in Education",
                    desc: "Recognized for outstanding educational services"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F21c4bdaba70546e89b1432a5a71417d5?format=webp&width=800",
                    title: "Innovation Excellence",
                    desc: "Leading innovation in educational technology"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8a91f11dc8e04d358b985214fbcb8d95?format=webp&width=800",
                    title: "ASSOCHAM India",
                    desc: "Excellence in Educational Innovation"
                  },
                  {
                    src: "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F58105dfe0ced43e6b0151b52d99be4b4?format=webp&width=800",
                    title: "IndiGlobal Education",
                    desc: "Outstanding Academic Excellence"
                  }
                ].map((award, index) => (
                  <div key={index} className="flex-shrink-0 w-60">
                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative">
                      <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden mb-4">
                        <img
                          src={award.src}
                          alt={award.title}
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#c38935] rounded-full flex items-center justify-center">
                        <Trophy className="h-3 w-3 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-[#22336a] mb-1 text-center">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 text-xs text-center">
                        {award.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Awards Horizontal Scrolling */}
          <div className="hidden md:block relative overflow-hidden bg-gray-50 rounded-xl py-8 mb-16">
            <div className="flex space-x-8 animate-scroll">
              {[
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F634b6859a0a5475897251bed28fb9a48?format=webp&width=800",
                  title: "Excellence in Education",
                  desc: "Recognized for outstanding educational services"
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2F21c4bdaba70546e89b1432a5a71417d5?format=webp&width=800",
                  title: "Innovation Excellence",
                  desc: "Leading innovation in educational technology"
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F6b380204f0be44298251449d0b1a0b73%2Ffb516054d41948ecafc7dad3868c1bea?format=webp&width=800",
                  title: "Quality Assurance",
                  desc: "Commitment to quality education standards"
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8a91f11dc8e04d358b985214fbcb8d95?format=webp&width=800",
                  title: "ASSOCHAM India",
                  desc: "Excellence in Educational Innovation"
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F58105dfe0ced43e6b0151b52d99be4b4?format=webp&width=800",
                  title: "IndiGlobal Education",
                  desc: "Outstanding Academic Excellence"
                },
                {
                  src: "https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fc50132f6b1ef47a481e34f16b5b1f8fa?format=webp&width=800",
                  title: "HolonIQ EdTech 100",
                  desc: "Top EdTech Company 2022"
                }
              ].map((award, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative">
                    <div className="w-full h-40 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden mb-4">
                      <img
                        src={award.src}
                        alt={award.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c38935] rounded-full flex items-center justify-center">
                      <Trophy className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {award.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Professional Placement Opportunity Program Popup */}
      {showPlacementPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full mx-4 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-scaleIn">
            <button
              onClick={() => setShowPlacementPopup(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-300 z-10 group"
            >
              <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
            </button>

            <div className="p-8">
              {/* Professional Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-[#22336a]/10 rounded-full mb-4">
                  <Award className="h-4 w-4 text-[#22336a] mr-2" />
                  <span className="text-[#22336a] font-semibold text-sm">
                    PLACEMENT OPPORTUNITY PROGRAM
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#22336a] mb-4">
                  Comprehensive Career Success Program
                </h3>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Industry-leading placement program with guaranteed
                  opportunities and comprehensive support system
                </p>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    200+
                  </div>
                  <p className="text-gray-600 font-medium">
                    Guaranteed Opportunities
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    100%
                  </div>
                  <p className="text-gray-600 font-medium">
                    First Year Tuition Fee Back
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    1200+
                  </div>
                  <p className="text-gray-600 font-medium">Partner Companies</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    26 LPA
                  </div>
                  <p className="text-gray-600 font-medium">Highest Package</p>
                </div>
              </div>

              {/* Program Features */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-[#22336a] mb-4">
                    Program Highlights
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#22336a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Guaranteed interview opportunities with top companies
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#22336a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Comprehensive skill development workshops
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#22336a] rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        Professional portfolio development
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#22336a] mb-4">
                    Success Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-[#22336a]/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          Placement Rate
                        </span>
                        <span className="text-[#22336a] font-bold">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#22336a] h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="p-4 bg-[#c38935]/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">
                          Student Satisfaction
                        </span>
                        <span className="text-[#22336a] font-bold">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#c38935] h-2 rounded-full"
                          style={{ width: "98%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and CTA */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-500 text-center mb-6 max-w-3xl mx-auto">
                  Terms and conditions apply. Placement guarantee subject to
                  program completion, maintaining minimum academic standards,
                  and active participation in placement activities. Full terms
                  available upon enrollment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#22336a] hover:bg-[#2d4a7b] text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="tel:+917065303030"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-[#22336a] text-[#22336a] font-bold rounded-lg hover:bg-[#22336a] hover:text-white transition-all duration-300"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <span>Call for Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Placement Guarantee Program - Mobile Optimized */}
      <section className="py-8 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Compact Header for Mobile */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-6 py-2 md:py-3 bg-[#22336a]/10 rounded-full mb-3 md:mb-6 animate-fade-in">
              <Trophy className="h-4 w-4 md:h-5 md:w-5 text-[#22336a] mr-1 md:mr-2 animate-pulse" />
              <span className="text-[#22336a] font-semibold text-xs md:text-base">
                PLACEMENT OPPORTUNITY PROGRAM
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#22336a] mb-3 md:mb-6 leading-tight animate-slide-up">
              Placement
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] via-[#f4d03f] to-[#c38935] animate-gradient-shift">
                {" "}
                Opportunity
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22336a] to-[#3b4d7a]">
                Program
              </span>
            </h2>
            <div
              className="max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p className="text-sm md:text-xl text-gray-700 leading-relaxed mb-2 md:mb-4">
                Comprehensive placement support with assured career guidance
              </p>
              <div className="hidden md:flex items-center justify-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#22336a] rounded-full animate-pulse"></div>
                  <span>Career Opportunities</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 bg-[#c38935] rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <span>First Year Fee Back</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 bg-[#22336a] rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <span>Expert Mentorship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: Compact Cards Layout */}
          <div className="block md:hidden mb-6">
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-1">
                      200+ Placement Opportunities
                    </h3>
                    <p className="text-xs text-gray-600">
                      Guaranteed access to extensive placement opportunities across leading companies
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-1">
                      First Year Tuition Fee Back
                    </h3>
                    <p className="text-xs text-gray-600">
                      We'll refund your first-year tuition fee if you don't receive promised opportunities
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#22336a] mb-1">
                      Dedicated Career Support
                    </h3>
                    <p className="text-xs text-gray-600">
                      Personal mentorship, interview preparation, and continuous guidance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Professional Grid Layout */}
          <div className="hidden md:grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Side - Key Guarantees */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-3">
                      200+ Placement Opportunities
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Guaranteed access to extensive placement opportunities
                      across leading companies
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-3">
                      First Year Tuition Fee Back
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you don't receive the promised placement opportunities,
                      we'll refund your first-year tuition fee.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-3">
                      Dedicated Career Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Personal mentorship, interview preparation, and continuous
                      guidance from industry professionals throughout your
                      journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact CTA for Mobile */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-[#22336a] to-[#2d4a7b] rounded-lg md:rounded-2xl p-4 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4">
                    Ready to Secure Your Future?
                  </h3>
                  <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-6">
                    Join our placement guarantee program and take the first step
                    towards career success
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
                    <button
                      onClick={() => setShowPlacementPopup(true)}
                      className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                    </button>
                    <a
                      href="https://sunstone.in/apply-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white border-2 border-white text-[#22336a] hover:bg-gray-50 font-bold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5 ml-1 md:ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings - Mobile Responsive with Carousel */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 via-transparent to-[#c38935]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-4 md:mb-6">
              Key Offerings
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes our programs exceptional and job-ready
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="block md:hidden mb-8">
            <div className="overflow-hidden">
              <div className="flex space-x-4 animate-scroll-right-to-left">
                <div className="flex-shrink-0 w-72 group relative cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#22336a] mb-2">
                      Expert Sessions
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Session by industry experts and leading faculty from Fortune 500 companies
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72 group relative cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#22336a] mb-2">
                      Professional Portfolio
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Showcase verified skills and experience to increase hiring chances
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72 group relative cursor-pointer" onClick={() => setShowPlacementPopup(true)}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative">
                      <TrendingUp className="h-6 w-6 text-white" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#c38935] rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#22336a] mb-2">
                      POP
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Access to 200+ guaranteed job opportunities with comprehensive placement support
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-72 group relative cursor-pointer">
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#22336a] mb-2">
                      Certifications
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      In-demand advanced certifications to choose from various domains and enhance your career prospects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* 1. Industry Expert Sessions */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#22336a] mb-2 lg:mb-3">
                  Expert Sessions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Session by industry experts and leading faculty from Fortune
                  500 companies
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 2. Professional Portfolio */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#22336a] mb-2 lg:mb-3">
                  Professional Portfolio
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Showcase verified skills and experience to increase hiring
                  chances
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 3. Placement Opportunities (with enhanced popup) */}
            <div
              className="group relative cursor-pointer animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
              onClick={() => setShowPlacementPopup(true)}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                  <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-4 h-4 lg:w-6 lg:h-6 bg-[#c38935] rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#22336a] mb-2 lg:mb-3">
                  POP
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access to 200+ guaranteed job opportunities with
                  comprehensive placement support
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 4. Advanced Certifications */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-[#22336a] mb-2 lg:mb-3">
                  Certifications
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In-demand advanced certifications to choose from various
                  domains and enhance your career prospects
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Mobile Responsive */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22336a]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#22336a] mb-4 md:mb-6">
              Programs Offered
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Transform your career with industry-aligned programs designed by
              experts
            </p>
          </div>

          {/* Mobile: Program Selection Dropdown */}
          <div className="block md:hidden mb-8">
            {/* Program Selector - Highlighted */}
            <div className="mb-4 p-4 bg-gradient-to-r from-[#22336a]/10 to-[#c38935]/10 rounded-xl border-2 border-[#22336a]/20 relative overflow-hidden">
              {/* Highlight background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#22336a]/5 via-[#c38935]/5 to-[#22336a]/5 animate-pulse"></div>

              <div className="relative z-10">
                <label className="flex items-center text-sm font-bold text-[#22336a] mb-3">
                  <div className="w-5 h-5 bg-[#c38935] rounded-full flex items-center justify-center mr-2 animate-bounce">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  Select Program to View Details:
                </label>
                <select
                  value={selectedMobileProgram || ""}
                  onChange={(e) => setSelectedMobileProgram(e.target.value || null)}
                  className="w-full p-3 border-2 border-[#22336a] rounded-lg text-[#22336a] font-medium focus:outline-none focus:ring-4 focus:ring-[#22336a]/20 focus:border-[#c38935] bg-white shadow-lg"
                >
                  <option value="">Choose a program...</option>
                  {Object.keys(programs).filter(programName => programName !== 'MBA').map((programName) => (
                    <option key={programName} value={programName}>
                      {programName} Program
                    </option>
                  ))}
                </select>

                {/* Helper text */}
                <p className="text-xs text-[#c38935] font-medium mt-2 flex items-center">
                  <span className="animate-pulse mr-1">👆</span>
                  Tap to explore our programs
                </p>
              </div>
            </div>

            {/* Selected Program Details */}
            {selectedMobileProgram && selectedMobileProgram !== 'MBA' && (
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                {/* Program Header */}
                <div className={`bg-gradient-to-r ${programs[selectedMobileProgram].color} p-4 text-white`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{selectedMobileProgram}</h3>
                      <p className="text-sm opacity-90">Program Details</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  {/* Dropdown for Duration & Projects */}
                  <div className="mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-[#22336a] text-sm mb-2">Program Overview:</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Duration:</span>
                          <span className="text-sm font-medium text-[#22336a]">{programs[selectedMobileProgram].duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Projects:</span>
                          <span className="text-sm font-medium text-[#22336a]">{programs[selectedMobileProgram].projects}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Certifications:</span>
                          <span className="text-sm font-medium text-[#22336a]">{programs[selectedMobileProgram].certifications}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-600">Internships:</span>
                          <span className="text-sm font-medium text-[#22336a]">{programs[selectedMobileProgram].internships}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs for Specifications and Eligibility */}
                  <div className="border-b border-gray-200 mb-4">
                    <div className="flex space-x-4">
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          (mobileTabState[selectedMobileProgram] || 'specs') === 'specs'
                            ? 'border-[#22336a] text-[#22336a]'
                            : 'border-transparent text-gray-500'
                        }`}
                        onClick={() => setMobileTabState({...mobileTabState, [selectedMobileProgram]: 'specs'})}
                      >
                        Specifications
                      </button>
                      <button
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          mobileTabState[selectedMobileProgram] === 'eligibility'
                            ? 'border-[#22336a] text-[#22336a]'
                            : 'border-transparent text-gray-500'
                        }`}
                        onClick={() => setMobileTabState({...mobileTabState, [selectedMobileProgram]: 'eligibility'})}
                      >
                        Eligibility
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  {(mobileTabState[selectedMobileProgram] || 'specs') === 'specs' ? (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-[#22336a] text-sm">Key Certifications:</h4>
                      {programs[selectedMobileProgram].certificationsList
                        .slice(0, showAllCertifications[selectedMobileProgram] ? undefined : 3)
                        .map((cert, certIndex) => (
                        <div key={certIndex} className="flex items-start space-x-2 p-2 bg-gray-50 rounded-md">
                          <div className="w-4 h-4 bg-[#c38935] rounded-full mt-0.5 flex-shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-[#22336a]">{cert.name}</p>
                            <p className="text-xs text-gray-600">{cert.careers}</p>
                          </div>
                        </div>
                      ))}

                      {/* View More / View Less Button */}
                      {programs[selectedMobileProgram].certificationsList.length > 3 && (
                        <div className="text-center mt-3">
                          <button
                            onClick={() => setShowAllCertifications({
                              ...showAllCertifications,
                              [selectedMobileProgram]: !showAllCertifications[selectedMobileProgram]
                            })}
                            className="inline-flex items-center px-4 py-2 bg-[#22336a] hover:bg-[#2d4a7b] text-white font-medium rounded-lg transition-all duration-300 text-sm"
                          >
                            {showAllCertifications[selectedMobileProgram] ? (
                              <>
                                <span>View Less</span>
                                <ChevronDown className="ml-1 h-4 w-4 rotate-180" />
                              </>
                            ) : (
                              <>
                                <span>View More ({programs[selectedMobileProgram].certificationsList.length - 3} more)</span>
                                <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-[#22336a] text-sm mb-2">Eligibility Criteria:</h4>
                      <p className="text-sm text-gray-700">{programs[selectedMobileProgram].eligibility}</p>
                    </div>
                  )}

                  {/* Apply Button */}
                  <div className="mt-4">
                    <a
                      href="https://sunstone.in/apply-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${programs[selectedMobileProgram].color} text-white font-bold text-sm rounded-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <span>Apply for {selectedMobileProgram}</span>
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Program Selector */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
            {Object.entries(programs).map(
              ([programName, programData], index) => (
                <button
                  key={programName}
                  onClick={() => setActiveTab(programName)}
                  className={`group relative px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base lg:text-lg transition-all duration-500 transform hover:scale-105 ${
                    activeTab === programName
                      ? `bg-gradient-to-r ${programData.color} text-white shadow-2xl`
                      : "bg-white text-[#22336a] hover:bg-gray-50 shadow-lg border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                    <span>{programName}</span>
                  </div>
                  {activeTab === programName && (
                    <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-0.5 md:h-1 bg-white rounded-full"></div>
                  )}
                </button>
              ),
            )}
          </div>

          {/* Program Content */}
          <div className="relative">
            {Object.entries(programs).map(([programName, programData]) => (
              <div
                key={programName}
                className={`transition-all duration-700 ${
                  activeTab === programName
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 absolute inset-0 transform translate-y-8 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Header with Blue Gradient - Mobile Responsive */}
                  <div
                    className={`bg-gradient-to-r ${programData.color} p-4 md:p-6 lg:p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/10 rounded-full -translate-y-10 translate-x-10 md:-translate-y-16 md:translate-x-16 lg:-translate-y-20 lg:translate-x-20"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full translate-y-8 -translate-x-8 md:translate-y-12 md:-translate-x-12 lg:translate-y-16 lg:-translate-x-16"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 md:mb-0 md:mr-4">
                          <GraduationCap className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-white" />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            {programName} Program
                          </h3>
                          <p className="text-sm md:text-lg lg:text-xl opacity-90">
                            Excellence in Education
                          </p>
                        </div>
                      </div>

                      {/* Program Stats - Mobile Responsive */}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8">
                        <div className="text-center p-2 md:p-3 lg:p-4 bg-white/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                          <Clock className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-auto mb-1 md:mb-2" />
                          <div className="font-bold text-xs md:text-sm">
                            {programData.duration}
                          </div>
                          <div className="text-xs opacity-80">Duration</div>
                        </div>
                        <div className="text-center p-2 md:p-3 lg:p-4 bg-white/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                          <Award className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-auto mb-1 md:mb-2" />
                          <div className="font-bold text-xs md:text-sm">
                            {programData.certifications}
                          </div>
                          <div className="text-xs opacity-80">
                            Certifications
                          </div>
                        </div>
                        <div className="text-center p-2 md:p-3 lg:p-4 bg-white/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                          <Briefcase className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-auto mb-1 md:mb-2" />
                          <div className="font-bold text-xs md:text-sm">
                            {programData.internships}
                          </div>
                          <div className="text-xs opacity-80">Experience</div>
                        </div>
                        <div className="text-center p-2 md:p-3 lg:p-4 bg-white/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                          <Target className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-auto mb-1 md:mb-2" />
                          <div className="font-bold text-xs md:text-sm">
                            {programData.projects}
                          </div>
                          <div className="text-xs opacity-80">Projects</div>
                        </div>
                        <div className="text-center p-2 md:p-3 lg:p-4 bg-white/20 rounded-lg md:rounded-xl backdrop-blur-sm col-span-2 md:col-span-1">
                          <Star className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mx-auto mb-1 md:mb-2" />
                          <div className="font-bold text-xs md:text-sm">
                            {programData.specializations}
                          </div>
                          <div className="text-xs opacity-80">
                            Specializations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Mobile Responsive */}
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                      {/* Certifications - Mobile Responsive */}
                      <div className="lg:col-span-2">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#22336a] mb-4 md:mb-6 flex items-center">
                          <Star className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 text-[#c38935]" />
                          Advanced Certifications
                        </h4>
                        <div className="grid gap-3 md:gap-4">
                          {programData.certificationsList
                            .slice(0, 6)
                            .map((cert, index) => (
                              <div
                                key={index}
                                className="group p-3 md:p-4 bg-gray-50 rounded-lg md:rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-[#c38935]/20"
                              >
                                <div className="flex items-start space-x-2 md:space-x-3">
                                  <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-[#c38935] rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="h-3 w-3 md:h-4 md:w-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-bold text-sm md:text-base text-[#22336a] group-hover:text-[#c38935] transition-colors duration-300">
                                      {cert.name}
                                    </h5>
                                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1">
                                      {cert.careers}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Eligibility - Mobile Responsive */}
                      <div>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-[#22336a] mb-4 md:mb-6 flex items-center">
                          <Award className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 mr-2 text-[#c38935]" />
                          Eligibility
                        </h4>
                        <div className="p-4 md:p-5 lg:p-6 bg-gradient-to-br from-[#22336a]/5 to-[#c38935]/5 rounded-lg md:rounded-xl border border-gray-100">
                          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                            {programData.eligibility}
                          </p>
                        </div>

                        <div className="mt-4 md:mt-6">
                          <a
                            href="https://sunstone.in/apply-now"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center px-4 md:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 bg-gradient-to-r ${programData.color} text-white font-bold text-sm md:text-base rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                          >
                            <span>Apply Now</span>
                            <ExternalLink className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Easy Fee Payment Banner - Mobile Optimized */}
      <section className="py-6 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Compact Header for Mobile */}
          <div className="text-center mb-4 md:mb-16">
            <div className="inline-flex items-center px-3 md:px-6 py-1.5 md:py-3 bg-white/80 backdrop-blur-sm rounded-full mb-3 md:mb-8 shadow-lg border border-gray-200">
              <span className="text-[#22336a] font-bold text-xs md:text-sm tracking-wide">
                🏦 EASY FEE PAYMENT
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-3 md:mb-6 leading-tight">
              TAKE CHARGE OF YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-yellow-400">
                EDUCATION
              </span>
            </h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make quality education affordable with our innovative EMI options and scholarship programs
            </p>
          </div>

          {/* Compact Banner Card for Mobile */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#c38935] to-[#d4a853] rounded-lg md:rounded-2xl p-4 md:p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-3 md:mb-6">
                  <div className="bg-white/20 px-2 md:px-4 py-1 md:py-2 rounded-full">
                    <span className="text-white font-bold text-xs md:text-sm">
                      EASY FEE PAYMENT
                    </span>
                  </div>
                </div>

                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
                  Take charge of your education
                </h3>
                <p className="text-sm md:text-lg opacity-90 mb-4 md:mb-8 max-w-2xl">
                  Pay smart by choosing Sunstone. Pay the college fee and a
                  nominal amount to unlock your dream job with Sunstone.
                </p>

                <div className="space-y-2 md:space-y-4 mb-4 md:mb-8">
                  <div className="flex items-center space-x-2 md:space-x-3 bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#c38935] text-xs md:text-sm">✓</span>
                    </div>
                    <span className="text-white font-medium text-sm md:text-base">
                      0-Cost EMI available
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3 bg-white/20 rounded-lg md:rounded-xl p-2 md:p-4">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#c38935] text-xs md:text-sm">✓</span>
                    </div>
                    <span className="text-white font-medium text-sm md:text-base">
                      Up to 100% scholarship available
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white text-[#22336a] hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 shadow-lg text-sm md:text-base"
                  >
                    <span>Apply Now →</span>
                  </a>
                </div>

                <p className="text-xs text-white/70 mt-3 md:mt-6">
                  *Terms & conditions apply
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Section with Horizontal Scrolling */}
      <section className="py-8 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#22336a] mb-3 md:mb-6">
              Top Recruiters
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join a network of 1,200+ leading companies that actively recruit
              our graduates
            </p>
          </div>

          {/* Two-line Animated Recruiters */}
          <div className="space-y-8 mb-12">
            {/* First line - Right to Left */}
            <div className="relative overflow-hidden bg-gray-50 rounded-xl py-6">
              <div className="flex space-x-12 animate-scroll-right-to-left whitespace-nowrap">
                {[
                  {
                    name: "Bosch",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800",
                  },
                  {
                    name: "HCL",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800",
                  },
                  {
                    name: "TCS",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800",
                  },
                  {
                    name: "Paytm",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800",
                  },
                  {
                    name: "Microsoft",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2a888cd02a8458da92d61b7a81eb34a?format=webp&width=800",
                  },
                  {
                    name: "Genpact",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2ae8a71a00048b29ff8d476edb3bb66?format=webp&width=800",
                  },
                  // Duplicate for seamless loop
                  {
                    name: "Bosch",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800",
                  },
                  {
                    name: "HCL",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800",
                  },
                  {
                    name: "TCS",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800",
                  },
                  {
                    name: "Paytm",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800",
                  },
                ].map((recruiter, index) => (
                  <button
                    key={`${recruiter.name}-${index}`}
                    onClick={() => handleRecruiterClick(recruiter.name)}
                    className={`flex-shrink-0 transition-all duration-300 transform hover:scale-110 ${
                      clickedRecruiters.includes(recruiter.name)
                        ? "filter-none"
                        : "filter grayscale hover:filter-none"
                    }`}
                  >
                    <img
                      src={recruiter.src}
                      alt={recruiter.name}
                      className="h-10 md:h-16 w-auto"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Second line - Left to Right */}
            <div className="relative overflow-hidden bg-gray-50 rounded-xl py-6">
              <div className="flex space-x-12 animate-scroll-left-to-right whitespace-nowrap">
                {[
                  {
                    name: "Bajaj Finserv",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800",
                  },
                  {
                    name: "Airtel",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800",
                  },
                  {
                    name: "IBM",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800",
                  },
                  {
                    name: "Infosys",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800",
                  },
                  {
                    name: "Hero",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Feee378591ebf4593b8dd2c2712b5decc?format=webp&width=800",
                  },
                  {
                    name: "Axis Bank",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F8a29a23fc1f641fea8ccad2a228407aa?format=webp&width=800",
                  },
                  // Duplicate for seamless loop
                  {
                    name: "Bajaj Finserv",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800",
                  },
                  {
                    name: "Airtel",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800",
                  },
                  {
                    name: "IBM",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800",
                  },
                  {
                    name: "Infosys",
                    src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800",
                  },
                ].map((recruiter, index) => (
                  <button
                    key={`${recruiter.name}-${index}`}
                    onClick={() => handleRecruiterClick(recruiter.name)}
                    className={`flex-shrink-0 transition-all duration-300 transform hover:scale-110 ${
                      clickedRecruiters.includes(recruiter.name)
                        ? "filter-none"
                        : "filter grayscale hover:filter-none"
                    }`}
                  >
                    <img
                      src={recruiter.src}
                      alt={recruiter.name}
                      className="h-10 md:h-16 w-auto"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Career Focus Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-[#22336a] mb-1 md:mb-2">
                Industry Connections
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Strong network of leading companies across sectors
              </p>
            </div>
            <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-[#22336a] rounded-full flex items-center justify-center">
                <Trophy className="h-5 w-5 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-[#22336a] mb-1 md:mb-2">
                Career Growth
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Excellent packages and growth opportunities
              </p>
            </div>
            <div className="text-center p-3 md:p-6 bg-white rounded-lg md:rounded-xl shadow-lg border border-gray-200">
              <div className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Target className="h-5 w-5 md:h-8 md:w-8 text-white" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-[#22336a] mb-1 md:mb-2">
                Success Stories
              </h3>
              <p className="text-xs md:text-base text-gray-600">
                Proven track record of student achievements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Admission Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#22336a]/10 to-[#c38935]/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-[#c38935]/10 to-[#22336a]/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 md:px-6 py-1.5 md:py-2 bg-[#22336a]/10 rounded-full mb-4 md:mb-6">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#22336a] mr-2" />
              <span className="text-[#22336a] font-semibold text-sm md:text-base">
                Quick & Easy Process
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#22336a] mb-4 md:mb-6 leading-tight">
              Your Journey to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-[#d4a853]">
                {" "}
                Success
              </span>
            </h2>
            <p className="text-sm md:text-base lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Four streamlined steps to unlock your potential and transform your
              career
            </p>
          </div>

          {/* Mobile Grid for Journey Steps - All Visible at Once */}
          <div className="block md:hidden mb-8">
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  desc: "Submit application online",
                  time: "5 minutes",
                  color: "from-[#22336a] to-[#3b4d7a]",
                  icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                },
                {
                  step: "2",
                  title: "Assessment",
                  desc: "Expert guidance & evaluation",
                  time: "Expert Help",
                  color: "from-[#c38935] to-[#d4a853]",
                  icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                },
                {
                  step: "3",
                  title: "Verification",
                  desc: "Document verification",
                  time: "Secure",
                  color: "from-[#22336a] to-[#3b4d7a]",
                  icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h7v16z"
                },
                {
                  step: "4",
                  title: "Welcome!",
                  desc: "Begin your journey",
                  time: "Success",
                  color: "from-[#c38935] to-[#d4a853]",
                  icon: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mr-2 relative`}>
                        <span className="text-white font-bold text-sm">{item.step}</span>
                        <div className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#c38935] rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d={item.icon} />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xs font-bold text-[#22336a] mb-0.5">{item.title}</h3>
                        <div className="text-xs text-[#c38935] font-semibold">{item.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps with Enhanced Design - Desktop */}
          <div className="hidden md:block relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#22336a] via-[#c38935] to-[#22336a] opacity-30"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Step 1 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                      <span className="text-white font-bold text-2xl">1</span>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#22336a] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto"></div>
                    {/* Icon Background */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c38935] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/20 transition-all duration-500 transform group-hover:-translate-y-3 w-full">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-4">
                      Apply Online
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Submit your application through our user-friendly online
                      portal with guided steps
                    </p>
                    <div className="mt-4 flex items-center justify-center text-[#c38935] text-sm font-semibold">
                      <Clock className="h-4 w-4 mr-1" />5 minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#c38935] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto"></div>
                    {/* Icon Background */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#22336a] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#c38935]/20 transition-all duration-500 transform group-hover:-translate-y-3 w-full">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-4">
                      Assessment & Counseling
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Personalized evaluation and expert guidance to find your
                      perfect program match
                    </p>
                    <div className="mt-4 flex items-center justify-center text-[#c38935] text-sm font-semibold">
                      <Users className="h-4 w-4 mr-1" />
                      Expert Guidance
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#22336a] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto"></div>
                    {/* Icon Background */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c38935] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h7v16z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/20 transition-all duration-500 transform group-hover:-translate-y-3 w-full">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-4">
                      Document Verification
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Quick verification of your academic credentials and
                      eligibility confirmation
                    </p>
                    <div className="mt-4 flex items-center justify-center text-[#c38935] text-sm font-semibold">
                      <Award className="h-4 w-4 mr-1" />
                      Secure Process
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-all duration-500 relative z-10">
                      <span className="text-white font-bold text-2xl">4</span>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#c38935] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 mx-auto"></div>
                    {/* Icon Background */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#22336a] rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#c38935]/20 transition-all duration-500 transform group-hover:-translate-y-3 w-full">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-4">
                      Welcome Aboard!
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Secure your seat and begin your transformational
                      educational journey with us
                    </p>
                    <div className="mt-4 flex items-center justify-center text-[#c38935] text-sm font-semibold">
                      <Trophy className="h-4 w-4 mr-1" />
                      Success Begins
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section - Mobile Optimized */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#22336a] via-[#2d4a7b] to-[#22336a] rounded-lg md:rounded-3xl p-4 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#c38935]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-lg md:text-4xl font-bold mb-2 md:mb-4">
                  Ready to Transform Your Future?
                </h3>
                <p className="text-sm md:text-xl mb-4 md:mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of successful graduates who chose excellence.
                  Your journey starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center">
                  <a
                    href="tel:+917065303030"
                    className="group inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white text-[#22336a] font-bold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 text-sm md:text-base"
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 group-hover:animate-pulse" />
                    <span>Call: +91 7065-30-30-30</span>
                  </a>
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                    <span>Secure Your Spot Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Enhanced Student Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#c38935]/10 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-8 md:mb-16 animate-slide-up">
            <div className="inline-flex items-center px-3 md:px-6 py-2 md:py-3 bg-[#22336a]/10 rounded-full mb-3 md:mb-6 animate-fade-in">
              <Star className="h-4 w-4 md:h-5 md:w-5 text-[#22336a] mr-1 md:mr-2 animate-pulse" />
              <span className="text-[#22336a] font-semibold text-xs md:text-base">
                STUDENT SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#22336a] mb-3 md:mb-6 leading-tight">
              Success
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] via-[#f4d03f] to-[#c38935]">
                {" "}
                Stories
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22336a] to-[#3b4d7a]">
                That Inspire
              </span>
            </h2>
            <p
              className="text-sm md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Discover how our programs have transformed careers and opened new
              opportunities for students across diverse industries
            </p>
          </div>

          {/* Mobile Carousel for Testimonials */}
          <div className="block md:hidden mb-8">
            <div className="overflow-hidden">
              <div className="flex space-x-4 animate-scroll-right-to-left">
                {[
                  {
                    name: "Rahul Kumar",
                    role: "MBA Graduate • Software Engineer",
                    company: "TCS",
                    initials: "RK",
                    quote: "The industry exposure and practical learning approach gave me exactly what I needed to excel in my career. The placement support was exceptional!",
                    color: "from-[#c38935] to-[#f4d03f]"
                  },
                  {
                    name: "Priya Sharma",
                    role: "BCA Graduate • Full Stack Developer",
                    company: "Infosys",
                    initials: "PS",
                    quote: "The practical approach and industry connections helped me develop real skills that matter in today's tech landscape.",
                    color: "from-[#22336a] to-[#3b4d7a]"
                  },
                  {
                    name: "Amit Joshi",
                    role: "B.Tech Graduate • Senior Developer",
                    company: "Wipro",
                    initials: "AJ",
                    quote: "The advanced certifications and project-based learning methodology prepared me perfectly for the industry demands.",
                    color: "from-[#c38935] to-[#f4d03f]"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-72 group relative">
                    <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#c38935] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 rounded-2xl p-4">
                      {/* Avatar and Info */}
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#22336a] text-sm group-hover:text-[#c38935] transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-[#c38935] font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex mb-3 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <span className="text-3xl text-[#c38935]/20 font-serif absolute -top-2 -left-2">
                          "
                        </span>
                        <p className="text-gray-700 text-xs italic leading-relaxed pl-4">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  {
                    name: "Rahul Kumar",
                    role: "MBA Graduate • Software Engineer",
                    company: "TCS",
                    initials: "RK",
                    quote: "The industry exposure and practical learning approach gave me exactly what I needed to excel in my career. The placement support was exceptional!",
                    color: "from-[#c38935] to-[#f4d03f]"
                  },
                  {
                    name: "Priya Sharma",
                    role: "BCA Graduate • Full Stack Developer",
                    company: "Infosys",
                    initials: "PS",
                    quote: "The practical approach and industry connections helped me develop real skills that matter in today's tech landscape.",
                    color: "from-[#22336a] to-[#3b4d7a]"
                  }
                ].map((testimonial, index) => (
                  <div key={`duplicate-${index}`} className="flex-shrink-0 w-72 group relative">
                    <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#c38935] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 rounded-2xl p-4">
                      {/* Avatar and Info */}
                      <div className="flex items-center mb-4">
                        <div className="relative">
                          <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                          </div>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#22336a] text-sm group-hover:text-[#c38935] transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-[#c38935] font-semibold">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex mb-3 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative">
                        <span className="text-3xl text-[#c38935]/20 font-serif absolute -top-2 -left-2">
                          "
                        </span>
                        <p className="text-gray-700 text-xs italic leading-relaxed pl-4">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Testimonials Grid */}
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div
              className="group relative animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#c38935] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <CardContent className="p-8">
                  {/* Avatar and Info */}
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">RK</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22336a] text-lg group-hover:text-[#c38935] transition-colors duration-300">
                        Rahul Kumar
                      </h4>
                      <p className="text-sm text-gray-600">
                        MBA Graduate • Software Engineer
                      </p>
                      <p className="text-xs text-[#c38935] font-semibold">
                        TCS
                      </p>
                    </div>
                  </div>

                  {/* Animated Rating */}
                  <div className="flex mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <span className="text-4xl text-[#c38935]/20 font-serif absolute -top-2 -left-2">
                      "
                    </span>
                    <p className="text-gray-700 text-sm italic leading-relaxed pl-6">
                      The industry exposure and practical learning approach gave
                      me exactly what I needed to excel in my career. The
                      placement support was exceptional, and I landed my dream
                      job with a fantastic package!
                    </p>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#c38935] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#22336a] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 2 */}
            <div
              className="group relative animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#22336a] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">PS</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22336a] text-lg group-hover:text-[#22336a] transition-colors duration-300">
                        Priya Sharma
                      </h4>
                      <p className="text-sm text-gray-600">
                        BCA Graduate • Full Stack Developer
                      </p>
                      <p className="text-xs text-[#c38935] font-semibold">
                        Infosys
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <span className="text-4xl text-[#22336a]/20 font-serif absolute -top-2 -left-2">
                      "
                    </span>
                    <p className="text-gray-700 text-sm italic leading-relaxed pl-6">
                      The practical approach and industry connections helped me
                      develop real skills that matter in today's tech landscape.
                      The comprehensive curriculum and expert guidance prepared
                      me perfectly for professional challenges.
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#22336a] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#c38935] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial 3 */}
            <div
              className="group relative animate-slide-up md:col-span-2 xl:col-span-1"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-[#c38935] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">AJ</span>
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22336a] text-lg group-hover:text-[#c38935] transition-colors duration-300">
                        Amit Joshi
                      </h4>
                      <p className="text-sm text-gray-600">
                        B.Tech Graduate • Senior Developer
                      </p>
                      <p className="text-xs text-[#c38935] font-semibold">
                        Wipro
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 text-yellow-400 fill-current transform transition-all duration-300 hover:scale-125`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <span className="text-4xl text-[#c38935]/20 font-serif absolute -top-2 -left-2">
                      "
                    </span>
                    <p className="text-gray-700 text-sm italic leading-relaxed pl-6">
                      The advanced certifications and project-based learning
                      methodology prepared me perfectly for the industry
                      demands. The quality of education and career support
                      exceeded my expectations in every way.
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#c38935] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div
                    className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-[#22336a] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Optimized */}
      <section className="py-8 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#22336a]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#22336a]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[#22336a] mb-3 md:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our programs
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-2 md:space-y-4">
              {[
                {
                  question: "Why should I choose Sunstone?",
                  answer:
                    "• Training and development sessions by industry experts\n��� Hands-on capstone projects every semester\n• Professional portfolio development\n• Expert faculty from premier institutions\n• Comprehensive placement support and career guidance\n• Access to pan-India student community",
                  category: "sunstone",
                },
                {
                  question:
                    "Does Sunstone provide an online or distance learning program?",
                  answer:
                    "Sunstone offers both online and offline learning programs. Our hybrid approach ensures flexibility while maintaining quality education standards. You can choose from various learning modes based on your preferences and requirements.",
                  category: "sunstone",
                },
                {
                  question:
                    "What makes Sunstone different from other education providers?",
                  answer:
                    "• Industry-aligned curriculum designed with Fortune 500 companies\n• Assured placement opportunities\n• Real-world projects and internships\n• Dedicated placement officer for each student\n• Expert mentorship from IIM/IIT faculty\n• Advanced certifications in emerging technologies\n• First year tuition fee back guarantee",
                  category: "sunstone",
                },
                {
                  question: "What is Sunstone's placement guarantee program?",
                  answer:
                    "Our placement opportunity program guarantees comprehensive career support and placement opportunities. If you don't receive the promised opportunities, we offer first year tuition fee back. The program includes dedicated placement officers, guaranteed interviews, and continuous career guidance.",
                  category: "placement",
                },
                {
                  question: "How does Sunstone's learning methodology work?",
                  answer:
                    "Sunstone follows a practical learning approach combining theoretical knowledge with hands-on experience. Students work on real industry projects, participate in internships, and build professional portfolios. Our expert faculty from premier institutions ensure quality education delivery.",
                  category: "sunstone",
                },
                {
                  question:
                    "What are the criteria to get admission into Sunstone-powered colleges?",
                  answer:
                    "Sunstone follows the eligibility criteria of colleges along with a personal interview for Undergraduate programs, and a screening test with an interview for the Postgraduate programs.",
                  category: "admission",
                },
                {
                  question:
                    "Are any EMI options available if I pursue a full-time course from Sunstone?",
                  answer:
                    "Yes, Sunstone offers flexible EMI options and financing solutions to make quality education accessible. We have partnered with leading financial institutions to provide easy payment plans that suit your financial situation.",
                  category: "fees",
                },
                {
                  question:
                    "What kind of industry connections does Sunstone have?",
                  answer:
                    "Sunstone has partnerships with 1200+ companies including Fortune 500 firms, leading startups, and established organizations across various sectors. Our strong industry network ensures maximum placement opportunities and internship programs for students.",
                  category: "industry",
                },
                {
                  question:
                    "Do I need to give any entrance exam to get admission to Sunstone-powered colleges?",
                  answer:
                    "The entrance exam requirements vary by program and college. Some programs may require entrance exams while others may have direct admission based on academic performance and interviews. Our counselors will guide you through the specific requirements for your chosen program.",
                  category: "admission",
                },
                {
                  question:
                    "Can I get professional help for my studies if I choose Sunstone?",
                  answer:
                    "Yes, if you choose Sunstone you get help from counselor to choose the right career path, 70+ training and development sessions by industry experts and top recruiters, and learn from expert faculties passed out from IIM and IIT.",
                  category: "support",
                },
                {
                  question:
                    "What certifications and skills will I gain through Sunstone programs?",
                  answer:
                    "Students receive 10+ advanced certifications in emerging technologies like AI/ML, Data Science, Digital Marketing, Cloud Computing, and more. These industry-recognized certifications enhance your employability and career prospects significantly.",
                  category: "certifications",
                },
                {
                  question:
                    "How does Sunstone ensure student success and career growth?",
                  answer:
                    "Through dedicated placement officers, personalized career counseling, skill development workshops, professional portfolio building, continuous mentorship, and access to extensive alumni network. We maintain 95% placement rate with comprehensive career support.",
                  category: "success",
                },
              ]
              .slice(0, showMoreFAQs ? undefined : 6) // Show first 6 by default
              .map((faq, index) => (
                <div key={index} className="group">
                  <Collapsible>
                    <CollapsibleTrigger className="w-full">
                      <div className="p-3 md:p-6 rounded-lg md:rounded-xl transition-all duration-300 cursor-pointer bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#22336a]/30 hover:shadow-lg">
                        <div className="flex items-center justify-between text-left">
                          <div className="flex items-center space-x-2 md:space-x-4 flex-1">
                            <div className="w-8 h-8 md:w-12 md:h-12 bg-[#22336a] rounded-lg md:rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold text-sm md:text-base">
                                {index + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm md:text-lg font-bold text-[#22336a] group-hover:text-[#22336a] transition-colors duration-300">
                                {faq.question}
                              </h3>
                              <div className="text-xs md:text-sm font-medium mt-1 text-[#22336a]/70">
                                {faq.category === "sunstone"
                                  ? "Sunstone"
                                  : faq.category === "admission"
                                    ? "Admission"
                                    : faq.category === "fees"
                                      ? "Fees"
                                      : "Support"}
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-gray-600 group-hover:text-[#22336a] transform group-hover:rotate-180 transition-all duration-300" />
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-3 md:px-6 pb-3 md:pb-6 -mt-2">
                        <div className="pt-3 md:pt-6 border-t border-gray-200 bg-white rounded-lg md:rounded-xl p-3 md:p-6 ml-8 md:ml-16 shadow-sm">
                          <div className="text-gray-700 leading-relaxed text-sm md:text-lg">
                            {faq.answer.includes("•") ? (
                              <div className="space-y-1 md:space-y-2">
                                {faq.answer
                                  .split("\n")
                                  .map((point, pointIndex) => (
                                    <div
                                      key={pointIndex}
                                      className="flex items-start space-x-2"
                                    >
                                      {point.startsWith("•") ? (
                                        <>
                                          <span className="text-[#c38935] font-bold text-lg md:text-xl mt-0.5">
                                            ���
                                          </span>
                                          <span className="text-sm md:text-base">
                                            {point.substring(1).trim()}
                                          </span>
                                        </>
                                      ) : (
                                        <span className="text-sm md:text-base">{point}</span>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            ) : (
                              <p className="text-sm md:text-base">{faq.answer}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>

            {/* Know More Button */}
            {!showMoreFAQs && (
              <div className="text-center mt-6 md:mt-8">
                <button
                  onClick={() => setShowMoreFAQs(true)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#22336a] hover:bg-[#2d4a7b] text-white font-bold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                >
                  <span>Know More</span>
                  <ChevronDown className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>
            )}

            {/* Show Less Button */}
            {showMoreFAQs && (
              <div className="text-center mt-6 md:mt-8">
                <button
                  onClick={() => setShowMoreFAQs(false)}
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
                >
                  <span>Show Less</span>
                  <ChevronDown className="ml-2 h-4 w-4 md:h-5 md:w-5 rotate-180" />
                </button>
              </div>
            )}

            {/* CTA Section - Mobile Optimized */}
            <div className="text-center mt-8 md:mt-16">
              <div className="bg-[#22336a] rounded-lg md:rounded-3xl p-4 md:p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <h3 className="text-lg md:text-3xl font-bold text-white mb-2 md:mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-300 mb-4 md:mb-8 text-sm md:text-lg">
                    Our expert counselors are here to guide you through your
                    educational journey
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center">
                    <a
                      href="tel:+917065303030"
                      className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white text-[#22336a] font-bold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                    >
                      <Phone className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      Call Us Now
                    </a>
                    <a
                      href="https://sunstone.in/apply-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-lg md:rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                    >
                      <ExternalLink className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer - Extra Small Mobile */}
      <footer className="bg-[#22336a] text-white">
        <div className="max-w-7xl mx-auto px-1 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-4 md:py-6 lg:py-8 xl:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4 md:gap-6 lg:gap-8">
            {/* About */}
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xs md:text-lg lg:text-xl font-bold text-white mb-0.5 md:mb-3 lg:mb-4">
                Sunstone Education
              </h3>
              <p className="text-gray-300 text-xs leading-tight mb-1 md:mb-4 lg:mb-6 max-w-md">
                Hi-Tech Institute powered by Sunstone. Quality education and
                industry partnerships.
              </p>
              <div className="flex space-x-1 md:space-x-3 lg:space-x-4">
                <a
                  href="https://www.facebook.com/sunstoneedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#1877F2] hover:bg-[#1655C4] rounded-md md:rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://in.linkedin.com/school/sunstone-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#0A66C2] hover:bg-[#084C8C] rounded-md md:rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@SunstoneIND"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-[#FF0000] hover:bg-[#CC0000] rounded-md md:rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a2.998 2.998 0 0 0-2.108-2.085C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.555A2.998 2.998 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.998 2.998 0 0 0 2.108 2.085c1.885.555 9.39.555 9.39.555s7.505 0 9.39-.555a2.998 2.998 0 0 0 2.108-2.085C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sunstone.in/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-4 h-4 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6B2A94] hover:via-[#DC1515] hover:to-[#E5642A] rounded-md md:rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xs md:text-base lg:text-lg font-bold text-white mb-0.5 md:mb-3 lg:mb-4">Programs</h3>
              <ul className="space-y-0.5 md:space-y-2 text-xs md:text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                  >
                    MBA Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                  >
                    BBA Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                  >
                    BCA Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                  >
                    MCA Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                  >
                    B.Tech Program
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs md:text-base lg:text-lg font-bold text-white mb-0.5 md:mb-3 lg:mb-4">Contact</h3>
              <div className="space-y-0.5 md:space-y-3 text-xs md:text-sm">
                <a
                  href="mailto:connect@sunstone.in"
                  className="flex items-center text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                >
                  <Mail className="h-2 w-2 md:h-4 md:w-4 mr-1 md:mr-2" />
                  connect@sunstone.in
                </a>
                <a
                  href="tel:+917065303030"
                  className="flex items-center text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                >
                  <Phone className="h-2 w-2 md:h-4 md:w-4 mr-1 md:mr-2" />
                  +91 7065-30-30-30
                </a>
                <a
                  href="https://sunstone.in/apply-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-1 md:px-4 py-0.5 md:py-2 bg-[#c38935] hover:bg-[#d4a853] text-white text-xs md:text-sm font-semibold rounded-lg transition-colors duration-300 mt-1 md:mt-4"
                >
                  Apply Now
                  <ExternalLink className="ml-0.5 md:ml-2 h-2 w-2 md:h-4 md:w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 mt-1 md:mt-8 pt-1 md:pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs md:text-sm mb-1 sm:mb-0">
              © 2025 Sunstone Education. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 md:space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c38935] text-xs md:text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c38935] text-xs md:text-sm transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://sunstone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c38935] text-xs md:text-sm transition-colors duration-300"
              >
                sunstone.in
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wiggle {
          0%,
          7% {
            transform: rotateZ(0);
          }
          15% {
            transform: rotateZ(-15deg);
          }
          20% {
            transform: rotateZ(10deg);
          }
          25% {
            transform: rotateZ(-10deg);
          }
          30% {
            transform: rotateZ(6deg);
          }
          35% {
            transform: rotateZ(-4deg);
          }
          40%,
          100% {
            transform: rotateZ(0);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-10px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(10px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(195, 137, 53, 0.4);
          }
          50% {
            box-shadow:
              0 0 40px rgba(195, 137, 53, 0.8),
              0 0 60px rgba(195, 137, 53, 0.4);
          }
        }

        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-text {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow:
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.6);
          }
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        .animate-gradient-text {
          background: linear-gradient(45deg, #ffffff, #f4d03f, #ffffff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-text 3s ease infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes fade-in-delay {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes count-up {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(34, 51, 106, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(34, 51, 106, 0.6);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 0.8s ease-out 0.5s both;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
