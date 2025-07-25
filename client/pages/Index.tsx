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
      {/* Enhanced Apply Now Button */}
      <div className="fixed right-6 bottom-6 z-50 animate-bounce-subtle">
        <div className="relative group">
          {/* Animated Background Ring */}
          <div className="absolute inset-0 w-full h-full bg-[#c38935] rounded-xl animate-pulse opacity-30 group-hover:animate-ping"></div>

          {/* Main Button */}
          <a
            href="https://sunstone.in/apply-now"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-auto px-6 py-4 bg-gradient-to-r from-[#c38935] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#c38935] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 hover:rotate-3 border-2 border-white/20 animate-glow-pulse"
          >
            {/* Button Content */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold">Apply Now</div>
                <div className="text-xs opacity-90">Sunstone Portal</div>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </a>

          {/* Enhanced Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
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
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>
      </div>

      {/* Professional Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 animate-slide-down hover:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-3 sm:space-x-4 group animate-fade-in hover:animate-wiggle">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent animate-pulse"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2F21884ee3ea37450d8004527e3ae2d318?format=webp&width=800"
                  alt="Sunstone"
                  className="h-6 w-auto transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href="mailto:connect@sunstone.in"
                className="hidden sm:flex items-center space-x-2 text-[#22336a] hover:text-[#c38935] transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">connect@sunstone.in</span>
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center space-x-2 bg-gradient-to-r from-[#c38935] to-[#d4a853] hover:from-[#d4a853] hover:to-[#c38935] text-white px-4 py-2.5 rounded-xl transition-all duration-500 font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 animate-glow-pulse"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 7065-30-30-30</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Carousel */}
      <section className="bg-gradient-to-br from-[#22336a] via-[#2d4a7b] to-[#22336a] text-white py-20 relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#c38935]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3 text-center lg:text-left animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
                <span className="text-white font-semibold text-sm">
                  PROFESSIONAL EXCELLENCE
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white">
                Transform Your Future with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-[#f4d03f]">
                  {" "}
                  Premier Education
                </span>
              </h1>
              <div className="mb-6">
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mb-4">
                  Join Hi-Tech Institute of Engineering & Technology for
                  industry-aligned programs in MBA, BBA, BCA, MCA & B.Tech with
                  guaranteed placement support.
                </p>
                <div className="inline-flex items-center px-6 py-3 rounded-xl">
                  <div className="flex items-center mr-3">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F05c684834e29442981626bcf1f7ee2bb%2Fe8fe1239f4724767b509ddb3b4f8688e?format=webp&width=800"
                      alt="Institution Image"
                      className="h-10 w-auto rounded-lg"
                    />
                  </div>
                  <span className="text-white font-bold text-lg">
                    Powered By Sunstone
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://sunstone.in/campuses/hi-tech-institute"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#22336a] hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Explore Programs</span>
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+917065303030"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#22336a] transition-all duration-300 shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="relative max-w-xl mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-2">
                  {/* Carousel Container */}
                  <div className="relative">
                    <div className="overflow-hidden rounded-lg">
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

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                      {carouselImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-[#c38935] rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <p className="text-[#22336a] font-bold text-sm">
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

      {/* Placement Highlights - Updated without emojis */}
      <section className="py-12 bg-[#22336a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-slide-up hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
            <div className="bg-[#c38935] text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Placement Highlights</h3>
                  <p className="text-sm opacity-90">
                    MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    26 LPA
                  </div>
                  <p className="text-sm text-gray-600">Highest Package</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    1200+
                  </div>
                  <p className="text-sm text-gray-600">Top Recruiters</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    5000+
                  </div>
                  <p className="text-sm text-gray-600">Students Placed</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c38935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">63%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-sm">
                      63% Higher ROI
                    </p>
                    <p className="text-xs text-gray-600">vs private colleges</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#22336a] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">7X</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-sm">
                      7X More Companies
                    </p>
                    <p className="text-xs text-gray-600">vs institutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#c38935]">
                    <p>
                      <br />
                    </p>
                  </span>{" "}
                  Placement report audited by B2K Analytics
                </p>
              </div>
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

      {/* Professional Placement Guarantee Program */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Engaging Header with Animations */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#22336a]/10 rounded-full mb-6 animate-fade-in">
              <Trophy className="h-5 w-5 text-[#22336a] mr-2 animate-pulse" />
              <span className="text-[#22336a] font-semibold">
                PLACEMENT OPPORTUNITY PROGRAM
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6 leading-tight animate-slide-up">
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
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Comprehensive placement support with assured career guidance and
                guaranteed success
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
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

          {/* Professional Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Side - Key Guarantees */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#22336a] mb-3">
                      Placement Opportunities
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      <p>
                        Guaranteed access to extensive placement opportunities
                        across leading companies{" "}
                      </p>
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

            {/* Right Side - Program Benefits */}
            <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-200">
              <h3 className="text-3xl font-bold text-[#22336a] mb-8 text-center">
                Program Benefits
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#22336a] rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">
                      Guaranteed Interviews
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Interview opportunities with top companies
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#c38935] rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">
                      Skills Development
                    </h4>
                    <p className="text-gray-600 text-sm">
                      70+ training sessions by industry experts
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#22336a] rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">
                      Professional Portfolio
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Build impressive portfolio with real projects
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#c38935] rounded-lg flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">
                      Industry Network
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Access to extensive professional network
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#22336a]/5 rounded-xl">
                <p className="text-sm text-gray-600 text-center font-medium">
                  Trusted by 1000+ students
                </p>
              </div>
            </div>
          </div>

          {/* Professional CTA */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-[#22336a] to-[#2d4a7b] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Secure Your Future?
                  </h3>
                  <p className="text-lg opacity-90 mb-6">
                    Join our placement guarantee program and take the first step
                    towards career success
                  </p>
                  <div className="flex gap-4 justify-center">
                    <button
                      onClick={() => setShowPlacementPopup(true)}
                      className="inline-flex items-center px-8 py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                    <a
                      href="https://sunstone.in/apply-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-white border-2 border-white text-[#22336a] hover:bg-gray-50 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="h-5 w-5 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Terms and conditions apply. Placement guarantee is subject to
              program completion, maintaining minimum academic standards, and
              active participation in placement activities. Full terms available
              upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Key Offerings - Updated with 4 items and enhanced popup */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 via-transparent to-[#c38935]/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Key Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes our programs exceptional and job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Industry Expert Sessions */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Expert Sessions
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <p>
                    Session by industry experts and leading faculty from
                    Fortune 500 companies
                  </p>
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 2. Professional Portfolio */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
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
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#c38935] rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  <p>POP</p>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <p>
                    Access to 200+ guaranteed job opportunities with
                    comprehensive placement support{" "}
                  </p>
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 4. Advanced Certifications */}
            <div
              className="group relative animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Certifications
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <p>
                    In-demand advanced certifications to choose from various
                    domains and enhance your carrer prospects
                  </p>
                  <p>
                    <br />
                  </p>
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - All Blue Colors */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#22336a]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22336a]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6">
              Programs Offered
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Transform your career with industry-aligned programs designed by
              experts
            </p>
          </div>

          {/* Program Selector - All Blue */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(programs).map(
              ([programName, programData], index) => (
                <button
                  key={programName}
                  onClick={() => setActiveTab(programName)}
                  className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                    activeTab === programName
                      ? `bg-gradient-to-r ${programData.color} text-white shadow-2xl`
                      : "bg-white text-[#22336a] hover:bg-gray-50 shadow-lg border border-gray-200"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6" />
                    <span>{programName}</span>
                  </div>
                  {activeTab === programName && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
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
                  {/* Header with Blue Gradient */}
                  <div
                    className={`bg-gradient-to-r ${programData.color} p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <GraduationCap className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">
                            {programName} Program
                          </h3>
                          <p className="text-xl opacity-90">
                            Excellence in Education
                          </p>
                        </div>
                      </div>

                      {/* Program Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Clock className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">
                            {programData.duration}
                          </div>
                          <div className="text-xs opacity-80">Duration</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Award className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">
                            {programData.certifications}
                          </div>
                          <div className="text-xs opacity-80">
                            Certifications
                          </div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Briefcase className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">
                            {programData.internships}
                          </div>
                          <div className="text-xs opacity-80">Experience</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Target className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">
                            {programData.projects}
                          </div>
                          <div className="text-xs opacity-80">Projects</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Star className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">
                            {programData.specializations}
                          </div>
                          <div className="text-xs opacity-80">
                            Specializations
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Certifications */}
                      <div className="md:col-span-2">
                        <h4 className="text-2xl font-bold text-[#22336a] mb-6 flex items-center">
                          <Star className="h-6 w-6 mr-2 text-[#c38935]" />
                          Advanced Certifications
                        </h4>
                        <div className="grid gap-4">
                          {programData.certificationsList
                            .slice(0, 6)
                            .map((cert, index) => (
                              <div
                                key={index}
                                className="group p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-[#c38935]/20"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-8 h-8 bg-[#c38935] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <Target className="h-4 w-4 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-bold text-[#22336a] group-hover:text-[#c38935] transition-colors duration-300">
                                      {cert.name}
                                    </h5>
                                    <p className="text-sm text-gray-600 mt-1">
                                      {cert.careers}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>

                      {/* Eligibility */}
                      <div>
                        <h4 className="text-2xl font-bold text-[#22336a] mb-6 flex items-center">
                          <Award className="h-6 w-6 mr-2 text-[#c38935]" />
                          Eligibility
                        </h4>
                        <div className="p-6 bg-gradient-to-br from-[#22336a]/5 to-[#c38935]/5 rounded-xl border border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {programData.eligibility}
                          </p>
                        </div>

                        <div className="mt-6">
                          <a
                            href="https://sunstone.in/apply-now"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r ${programData.color} text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                          >
                            <span>Apply Now</span>
                            <ExternalLink className="ml-2 h-5 w-5" />
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

      {/* Easy Fee Payment Banner */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-gray-200">
              <span className="text-[#22336a] font-bold text-sm tracking-wide">
                🏦 EASY FEE PAYMENT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#22336a] mb-6 leading-tight">
              TAKE CHARGE OF YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-yellow-400">
                EDUCATION
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Make quality education affordable with our innovative EMI options, scholarship
              programs, and smart financial assistance
            </p>
          </div>

          {/* Banner Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#c38935] to-[#d4a853] rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 px-4 py-2 rounded-full">
                    <span className="text-white font-bold text-sm">EASY FEE PAYMENT</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Take charge of your education
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl">
                  Pay smart by choosing Sunstone. Pay the college fee and a nominal amount to unlock your dream job with
                  Sunstone.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 bg-white/20 rounded-xl p-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#c38935] text-sm">✓</span>
                    </div>
                    <span className="text-white font-medium">0-Cost EMI available</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/20 rounded-xl p-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-[#c38935] text-sm">✓</span>
                    </div>
                    <span className="text-white font-medium">Up to 100% scholarship available</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#22336a] hover:bg-gray-100 font-bold rounded-lg transition-all duration-300 shadow-lg"
                  >
                    <span>Apply Now →</span>
                  </a>
                </div>

                <p className="text-xs text-white/70 mt-6">
                  *Terms & conditions apply
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Top Recruiters Section with Horizontal Scrolling */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Top Recruiters
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join a network of 1,200+ leading companies that actively recruit
              our graduates
            </p>
          </div>

          {/* Horizontal Scrolling Logos */}
          <div className="relative overflow-hidden bg-gray-50 rounded-xl py-8 mb-12">
            <div className="flex space-x-8 animate-scroll">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800"
                alt="Bosch"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800"
                alt="HCL"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800"
                alt="TCS"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800"
                alt="Paytm"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2a888cd02a8458da92d61b7a81eb34a?format=webp&width=800"
                alt="Microsoft"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2ae8a71a00048b29ff8d476edb3bb66?format=webp&width=800"
                alt="Genpact"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800"
                alt="Bajaj Finserv"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800"
                alt="Airtel"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800"
                alt="IBM"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800"
                alt="Infosys"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Feee378591ebf4593b8dd2c2712b5decc?format=webp&width=800"
                alt="Hero"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F8a29a23fc1f641fea8ccad2a228407aa?format=webp&width=800"
                alt="Axis Bank"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />

              {/* Duplicate for seamless loop */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800"
                alt="Bosch"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800"
                alt="HCL"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800"
                alt="TCS"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800"
                alt="Paytm"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2a888cd02a8458da92d61b7a81eb34a?format=webp&width=800"
                alt="Microsoft"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2ae8a71a00048b29ff8d476edb3bb66?format=webp&width=800"
                alt="Genpact"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800"
                alt="Bajaj Finserv"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800"
                alt="Airtel"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800"
                alt="IBM"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800"
                alt="Infosys"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Feee378591ebf4593b8dd2c2712b5decc?format=webp&width=800"
                alt="Hero"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F8a29a23fc1f641fea8ccad2a228407aa?format=webp&width=800"
                alt="Axis Bank"
                className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Career Focus Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-2">
                Industry Connections
              </h3>
              <p className="text-gray-600">
                Strong network of leading companies across sectors
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#22336a] rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-2">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Excellent packages and growth opportunities
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-2">
                Success Stories
              </h3>
              <p className="text-gray-600">
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-[#22336a]/10 rounded-full mb-6">
              <Clock className="h-5 w-5 text-[#22336a] mr-2" />
              <span className="text-[#22336a] font-semibold">
                Quick & Easy Process
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#22336a] mb-6 leading-tight">
              Your Journey to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c38935] to-[#d4a853]">
                {" "}
                Success
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Four streamlined steps to unlock your potential and transform your
              career
            </p>
          </div>

          {/* Process Steps with Enhanced Design */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#22336a] via-[#c38935] to-[#22336a] opacity-30"></div>

            <div className="grid lg:grid-cols-4 gap-8 mb-16">
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

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#22336a] via-[#2d4a7b] to-[#22336a] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#c38935]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4">
                  Ready to Transform Your Future?
                </h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join thousands of successful graduates who chose excellence.
                  Your journey starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a
                    href="tel:+917065303030"
                    className="group inline-flex items-center px-8 py-4 bg-white text-[#22336a] font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50"
                  >
                    <Phone className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                    <span>Call: +91 7065-30-30-30</span>
                  </a>
                  <a
                    href="https://sunstone.in/apply-now"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-8 py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="h-5 w-5 mr-3" />
                    <span>Secure Your Spot Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#c38935]/5 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-[#22336a]/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#c38935]/10 rounded-full mb-6">
              <Trophy className="h-5 w-5 text-[#c38935] mr-2" />
              <span className="text-[#c38935] font-semibold">
                AWARDS & RECOGNITION
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6 leading-tight">
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
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Our commitment to educational excellence has been recognized by
                leading industry organizations
              </p>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {/* ASSOCHAM Award */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#c38935]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F8a91f11dc8e04d358b985214fbcb8d95?format=webp&width=800"
                      alt="ASSOCHAM India Award"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c38935] rounded-full flex items-center justify-center">
                    <Trophy className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center group-hover:text-[#c38935] transition-colors duration-300">
                  ASSOCHAM India
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  Excellence in Educational Innovation
                </p>
              </div>
            </div>

            {/* IndiGlobal Award */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#22336a]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F58105dfe0ced43e6b0151b52d99be4b4?format=webp&width=800"
                      alt="IndiGlobal Education Award"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#22336a] rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center group-hover:text-[#22336a] transition-colors duration-300">
                  IndiGlobal Education
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  Outstanding Academic Excellence
                </p>
              </div>
            </div>

            {/* HolonIQ EdTech 100 */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#c38935]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fc50132f6b1ef47a481e34f16b5b1f8fa?format=webp&width=800"
                      alt="HolonIQ South Asia EdTech 100"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#c38935] rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center group-hover:text-[#c38935] transition-colors duration-300">
                  HolonIQ EdTech 100
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  Top EdTech Company 2022
                </p>
              </div>
            </div>

            {/* GSV 150 Award */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#22336a]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2Fbdbe9f2d629c4922b6d938266a01067d?format=webp&width=800"
                      alt="GSV 150 Global Digital Learning"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#22336a] rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center group-hover:text-[#22336a] transition-colors duration-300">
                  GSV 150
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  Global Digital Learning Leader
                </p>
              </div>
            </div>

            {/* Education Innovation Summit Award */}
            <div
              className="group relative animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-[#c38935]/30 hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7d21049135914cccb56913f42d147819%2F9a5d04f143714c30b0905a3a9d2c3b0f?format=webp&width=800"
                      alt="Education Innovation Summit Award"
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#c38935] to-[#f4d03f] rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#22336a] mb-2 text-center group-hover:text-[#c38935] transition-colors duration-300">
                  Education Innovation
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  Summit & Awards 2023
                </p>
              </div>
            </div>
          </div>

          {/* Recognition Statistics */}
          <div className="bg-gradient-to-r from-[#22336a] to-[#2d4a7b] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-[#c38935]/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  <h3 style="text-align: center;">
                    <strong>Career-Focused Learning Outcomes</strong>
                  </h3>
                  <p>
                    <br />
                  </p>
                </h3>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  <p>
                    <strong style="font-size: 20px;">
                      Our programs are designed to equip students with the
                      right skills, certifications, and opportunities to
                      succeed in today's job market.
                    </strong>
                  </p>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#f4d03f] mb-2">
                    5+
                  </div>
                  <p className="text-lg opacity-90">
                    <p>Specialisations</p>
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    <p>
                      <strong style="font-size: 14px;">
                        Future-ready skills for tomorrow's careers
                      </strong>
                    </p>
                  </p>
                </div>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#f4d03f] mb-2">
                    <p>20+</p>
                  </div>
                  <p className="text-lg opacity-90">
                    <p>Program domains</p>
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    <p>
                      <strong style="font-size: 14px;">
                        &nbsp;Spanning tech, management &amp; more
                      </strong>
                    </p>
                  </p>
                </div>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 group hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-[#f4d03f] mb-2">
                    <p>10+</p>
                  </div>
                  <p className="text-lg opacity-90">
                    <p>Advanced Certifications</p>
                  </p>
                  <p className="text-sm opacity-70 mt-1">
                    <p>
                      <strong style="font-size: 14px;">
                        &nbsp;Aligned with industry needs
                      </strong>
                    </p>
                  </p>
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
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-[#22336a]/10 rounded-full mb-6 animate-fade-in">
              <Star className="h-5 w-5 text-[#22336a] mr-2 animate-pulse" />
              <span className="text-[#22336a] font-semibold">
                STUDENT SUCCESS STORIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6 leading-tight">
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
              className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Discover how our programs have transformed careers and opened new
              opportunities for students across diverse industries
            </p>
          </div>

          {/* Enhanced Testimonials Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
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

      {/* FAQ Section - Updated with new questions */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#22336a]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#22336a]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our programs
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "Why should I choose Sunstone?",
                  answer:
                    "• Training and development sessions by industry experts\n• Hands-on capstone projects every semester\n• Professional portfolio development\n• Expert faculty from premier institutions\n• Comprehensive placement support and career guidance\n• Access to pan-India student community",
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
              ].map((faq, index) => (
                <div key={index} className="group">
                  <Collapsible>
                    <CollapsibleTrigger className="w-full">
                      <div className="p-6 rounded-xl transition-all duration-300 cursor-pointer bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#22336a]/30 hover:shadow-lg">
                        <div className="flex items-center justify-between text-left">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="w-12 h-12 bg-[#22336a] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-[#22336a] group-hover:text-[#22336a] transition-colors duration-300">
                                {faq.question}
                              </h3>
                              <div className="text-sm font-medium mt-1 text-[#22336a]/70">
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
                          <ChevronDown className="h-6 w-6 text-gray-600 group-hover:text-[#22336a] transform group-hover:rotate-180 transition-all duration-300" />
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6 -mt-2">
                        <div className="pt-6 border-t border-gray-200 bg-white rounded-xl p-6 ml-16 shadow-sm">
                          <div className="text-gray-700 leading-relaxed text-lg">
                            {faq.answer.includes("•") ? (
                              <div className="space-y-2">
                                {faq.answer
                                  .split("\n")
                                  .map((point, pointIndex) => (
                                    <div
                                      key={pointIndex}
                                      className="flex items-start space-x-2"
                                    >
                                      {point.startsWith("•") ? (
                                        <>
                                          <span className="text-[#c38935] font-bold text-xl mt-0.5">
                                            •
                                          </span>
                                          <span>
                                            {point.substring(1).trim()}
                                          </span>
                                        </>
                                      ) : (
                                        <span>{point}</span>
                                      )}
                                    </div>
                                  ))}
                              </div>
                            ) : (
                              <p>{faq.answer}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-[#22336a] rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg">
                    Our expert counselors are here to guide you through your
                    educational journey
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+917065303030"
                      className="inline-flex items-center px-8 py-4 bg-white text-[#22336a] font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Us Now
                    </a>
                    <a
                      href="https://sunstone.in/apply-now"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-[#c38935] hover:bg-[#d49640] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-[#22336a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">
                Sunstone Education
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Hi-Tech Institute of Engineering & Technology, powered by
                Sunstone. Transforming careers through quality education and
                industry partnerships.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/sunstoneedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1877F2] hover:bg-[#1655C4] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
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
                  className="w-10 h-10 bg-[#0A66C2] hover:bg-[#084C8C] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
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
                  className="w-10 h-10 bg-[#FF0000] hover:bg-[#CC0000] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
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
                  className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6B2A94] hover:via-[#DC1515] hover:to-[#E5642A] rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 text-white"
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
              <h3 className="text-lg font-bold text-white mb-4">Programs</h3>
              <ul className="space-y-2 text-sm">
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
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:connect@sunstone.in"
                  className="flex items-center text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  connect@sunstone.in
                </a>
                <a
                  href="tel:+917065303030"
                  className="flex items-center text-gray-300 hover:text-[#c38935] transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 7065-30-30-30
                </a>
                <a
                  href="https://sunstone.in/apply-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#c38935] hover:bg-[#d4a853] text-white text-sm font-semibold rounded-lg transition-colors duration-300 mt-4"
                >
                  Apply Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 Sunstone Education. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#c38935] text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="text-gray-400 hover:text-[#c38935] text-sm transition-colors duration-300"
              >
                Terms
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="https://sunstone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#c38935] text-sm transition-colors duration-300"
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
