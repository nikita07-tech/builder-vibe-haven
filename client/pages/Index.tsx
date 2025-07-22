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

  // Carousel images
  const carouselImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600",
      alt: "Hi-Tech Institute Campus",
      title: "Hi-Tech Institute Campus",
      subtitle: "Modern Infrastructure & Facilities"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fa55b41786c9548d19f00d4de44dfa692?format=webp&width=800",
      alt: "Campus View",
      title: "Campus Infrastructure",
      subtitle: "World-Class Education Hub"
    }
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
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-12 w-auto"
                />
                <div className="h-6 w-px bg-gray-300"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ff2ddce4e7a6641ef94f7545d416ae4f4?format=webp&width=800"
                  alt="Sunstone"
                  className="h-20 w-auto"
                />
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-6">
              <a
                href="mailto:connect@sunstone.in"
                className="hidden sm:flex items-center space-x-2 text-[#22336a] hover:text-[#c38935] transition-colors font-medium"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">connect@sunstone.in</span>
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center space-x-2 bg-[#c38935] hover:bg-[#c38935]/80 text-white px-4 py-2 rounded-lg transition-colors font-semibold shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 7065-30-30-30</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner with Carousel */}
      <section className="bg-[#22336a] text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
                Power up your career with an MBA, BBA, BCA, MCA & B.Tech at
                Hi-Tech Institute of Engineering & Technology
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-[#c38935] font-semibold">
                Powered by Sunstone
              </p>
              <a
                href="https://sunstone.in/campuses/hi-tech-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#c38935] hover:bg-[#c38935]/80 text-white font-bold rounded-lg transition-all duration-300 shadow-lg"
              >
                <span>Know more</span>
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="lg:col-span-2">
              <div className="relative max-w-sm mx-auto">
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-2">
                  {/* Carousel Container */}
                  <div className="relative">
                    <div className="overflow-hidden rounded-lg">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
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
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
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
                          <span className="text-white text-xs font-bold">🏛️</span>
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
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-[#c38935] text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Placement Highlights</h3>
                  <p className="text-sm opacity-90">
                    MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
                <button 
                  onClick={() => setShowPlacementPopup(true)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 pulse-glow"
                >
                  View Placement Opportunity Program
                </button>
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
                  <p className="text-sm text-gray-600">Job Opportunities</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#c38935] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">63%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#22336a] text-sm">
                      <p>63% Higher ROI</p>
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
                      <p>7* More Companies</p>
                    </p>
                    <p className="text-xs text-gray-600">vs institutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#c38935]">
                    Verified & Audited
                  </span>{" "}
                  by Official Auditor for B2K Analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Placement Opportunity Program Popup */}
      {showPlacementPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-4xl w-full mx-4 relative animate-scaleIn transform perspective-1000 animate-bounce-in shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowPlacementPopup(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:scale-110 group"
            >
              <X className="h-6 w-6 text-gray-600 group-hover:text-red-500 transition-colors" />
            </button>
            
            <div className="p-10">
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-full flex items-center justify-center mx-auto mb-6 animate-spin-slow shadow-xl">
                  <TrendingUp className="h-12 w-12 text-white animate-bounce" />
                </div>
                <h3 className="text-4xl font-bold text-[#22336a] mb-4 animate-slide-up">
                  PLACEMENT OPPORTUNITY PROGRAM OF SUNSTONE
                </h3>
                <p className="text-gray-600 text-xl animate-fade-in-delay">
                  200+ assured placement opportunities or get your 1st year fee back*
                </p>
              </div>

              <div className="mb-8">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F5fffe55221b049ecb1b5366792405a42?format=webp&width=800"
                  alt="Placement Opportunity Program"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="text-center p-8 bg-gradient-to-br from-[#22336a]/10 to-transparent rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left">
                  <div className="text-4xl font-bold text-[#22336a] mb-3 animate-count-up">200+</div>
                  <p className="text-gray-600 font-medium text-lg">Assured Placement Opportunities</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#c38935]/10 to-transparent rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-right">
                  <div className="text-4xl font-bold text-[#22336a] mb-3 animate-count-up">100%</div>
                  <p className="text-gray-600 font-medium text-lg">Fee Back Guarantee*</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#22336a]/10 to-transparent rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold text-[#22336a] mb-3 animate-count-up">1200+</div>
                  <p className="text-gray-600 font-medium text-lg">Top Recruiting Companies</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-[#c38935]/10 to-transparent rounded-2xl transform hover:scale-105 transition-all duration-300 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                  <div className="text-4xl font-bold text-[#22336a] mb-3 animate-count-up">26 LPA</div>
                  <p className="text-gray-600 font-medium text-lg">Highest Package</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#22336a]/5 to-[#c38935]/5 rounded-2xl p-6 mb-8">
                <p className="text-sm text-gray-600 text-center">
                  *Terms and conditions apply. Get a full refund on your 1st year tuition fee. 
                  Option benefits indicate the number of job openings for each student.
                </p>
              </div>

              <div className="text-center">
                <a
                  href="https://sunstone.in/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#22336a] to-[#3b4d7a] text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 animate-pulse-glow text-lg"
                >
                  <span>Apply Now for Placement Opportunity Program</span>
                  <ExternalLink className="ml-3 h-6 w-6 animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Updated Sunstone Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Why Choose Sunstone?
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Transform your career with industry-aligned education and guaranteed placement support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#c38935] rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">Expert Training Sessions</h3>
              <p className="text-gray-600">70+ training and development sessions by recruiters and industry experts</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#22336a] rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">Capstone Projects</h3>
              <p className="text-gray-600">Hands-on capstone projects every semester for real-world experience</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#c38935] rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">Professional Portfolio</h3>
              <p className="text-gray-600">Professional portfolio to get noticed by top recruiters</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#22336a] rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">Expert Faculty</h3>
              <p className="text-gray-600">Learn from expert faculty passed out from IIM and IIT</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#c38935] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">High Salary Packages</h3>
              <p className="text-gray-600">25 LPA highest salary with 150+ job profiles to choose from</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-[#22336a] rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#22336a] mb-3">Guaranteed Interviews</h3>
              <p className="text-gray-600">50+ guaranteed job interviews with Placement Protection Plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Sunstone Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              The Sunstone Philosophy
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our philosophy is deeply rooted in helping you learn from the
              best, providing a hands-on experience so your education is not
              just limited to theory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="text-center border border-gray-200 hover:border-[#c38935] hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-[#c38935] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#22336a] font-bold">
                  Learn from Industry Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Learn from CEOs, CTOs, COOs, and other leaders from Fortune
                  500 companies and leading Indian start-ups with 10+ years of
                  recruitment experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 hover:border-[#22336a] hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-[#22336a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#22336a] font-bold">
                  Real-World Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Put what you learn into practice and gain hands-on experience
                  with internships & real-life projects and be ready for your
                  job from Day 1
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 hover:border-[#c38935] hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-[#c38935] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-[#22336a] font-bold">
                  Professional Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Increase your chances of getting hired by showcasing your
                  verified skills and experience with a professional portfolio
                </p>
              </CardContent>
            </Card>
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
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">Expert Sessions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sessions by industry experts and leading faculty from Fortune 500 companies
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 2. Professional Portfolio */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">Professional Portfolio</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Showcase verified skills and experience to increase hiring chances
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#c38935]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* 3. Placement Opportunities (with enhanced popup) */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => setShowPlacementPopup(true)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#c38935] rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">Placement Opportunities</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  5000+ job opportunities with 1200+ top recruiting companies
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-[#22336a]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 text-[#c38935] group-hover:animate-bounce">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* 4. Advanced Certifications */}
            <div className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c38935] to-[#d4a853] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#22336a] mb-3">Certifications</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In-demand advanced certifications to choose from various domains
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
              Transform your career with industry-aligned programs designed by experts
            </p>
          </div>

          {/* Program Selector - All Blue */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(programs).map(([programName, programData], index) => (
              <button
                key={programName}
                onClick={() => setActiveTab(programName)}
                className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 ${
                  activeTab === programName
                    ? `bg-gradient-to-r ${programData.color} text-white shadow-2xl`
                    : 'bg-white text-[#22336a] hover:bg-gray-50 shadow-lg border border-gray-200'
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
            ))}
          </div>

          {/* Program Content */}
          <div className="relative">
            {Object.entries(programs).map(([programName, programData]) => (
              <div
                key={programName}
                className={`transition-all duration-700 ${
                  activeTab === programName 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 absolute inset-0 transform translate-y-8 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                  {/* Header with Blue Gradient */}
                  <div className={`bg-gradient-to-r ${programData.color} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                          <GraduationCap className="h-10 w-10 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">{programName} Program</h3>
                          <p className="text-xl opacity-90">Excellence in Education</p>
                        </div>
                      </div>

                      {/* Program Stats */}
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Clock className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">{programData.duration}</div>
                          <div className="text-xs opacity-80">Duration</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Award className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">{programData.certifications}</div>
                          <div className="text-xs opacity-80">Certifications</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Briefcase className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">{programData.internships}</div>
                          <div className="text-xs opacity-80">Experience</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Target className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">{programData.projects}</div>
                          <div className="text-xs opacity-80">Projects</div>
                        </div>
                        <div className="text-center p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                          <Star className="h-6 w-6 mx-auto mb-2" />
                          <div className="font-bold text-sm">{programData.specializations}</div>
                          <div className="text-xs opacity-80">Specializations</div>
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
                          {programData.certificationsList.slice(0, 6).map((cert, index) => (
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
                            href="https://sunstone.in/apply"
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

      {/* Top Recruiters Section with Horizontal Scrolling */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Top Recruiters
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join a network of 1,200+ leading companies that actively recruit our graduates
            </p>
          </div>

          {/* Horizontal Scrolling Logos */}
          <div className="relative overflow-hidden bg-gray-50 rounded-xl py-8 mb-12">
            <div className="flex space-x-8 animate-scroll">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800" alt="Bosch" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800" alt="HCL" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800" alt="TCS" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800" alt="Paytm" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2a888cd02a8458da92d61b7a81eb34a?format=webp&width=800" alt="Microsoft" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2ae8a71a00048b29ff8d476edb3bb66?format=webp&width=800" alt="Genpact" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800" alt="Bajaj Finserv" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800" alt="Airtel" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800" alt="IBM" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800" alt="Infosys" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Feee378591ebf4593b8dd2c2712b5decc?format=webp&width=800" alt="Hero" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F8a29a23fc1f641fea8ccad2a228407aa?format=webp&width=800" alt="Axis Bank" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              
              {/* Duplicate for seamless loop */}
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4eebd36dc9ca4ef5bb76a69697bcf965?format=webp&width=800" alt="Bosch" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fefffd34481eb4335b0ce5e2be3b32eda?format=webp&width=800" alt="HCL" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F80bcd2d42697458985f6baa4f1748e53?format=webp&width=800" alt="TCS" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F57b8a745820649d0ab29f1d4f1ed2a72?format=webp&width=800" alt="Paytm" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2a888cd02a8458da92d61b7a81eb34a?format=webp&width=800" alt="Microsoft" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Fb2ae8a71a00048b29ff8d476edb3bb66?format=webp&width=800" alt="Genpact" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4d9300d8327941faafdb8cd488bc7f8d?format=webp&width=800" alt="Bajaj Finserv" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F4bfc49d6ff70493a9403549ca28088d8?format=webp&width=800" alt="Airtel" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Ffa7d6e6553d34b0384a61c351cf47df1?format=webp&width=800" alt="IBM" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F82d69b53737c422781c8efc025af31c9?format=webp&width=800" alt="Infosys" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2Feee378591ebf4593b8dd2c2712b5decc?format=webp&width=800" alt="Hero" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F8a29a23fc1f641fea8ccad2a228407aa?format=webp&width=800" alt="Axis Bank" className="h-16 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#22336a] mb-2">1200+</div>
              <p className="text-gray-600">Top Recruiting Companies</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#22336a] rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#22336a] mb-2">26 LPA</div>
              <p className="text-gray-600">Highest Package Offered</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#c38935] rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#22336a] mb-2">95%</div>
              <p className="text-gray-600">Placement Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Admission Process Steps - Enhanced Layout and Animations */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#22336a]/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#22336a]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#22336a] mb-6 animate-fade-in">
              Admission Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay">
              Simple steps to begin your journey towards a successful career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 animate-bounce-in">
                  <span className="text-white font-bold text-3xl">1</span>
                </div>
                <div className="hidden lg:block absolute top-12 -right-8 text-[#22336a] animate-pulse">
                  <ChevronRight className="h-8 w-8" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22336a]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/30 transition-all duration-500 transform group-hover:-translate-y-2 h-48 flex flex-col">
                <h3 className="text-2xl font-bold text-[#22336a] mb-4 group-hover:text-[#22336a] transition-colors duration-300">
                  Apply Now
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1 flex items-center">
                  Fill out our simple online application form with your details
                </p>
              </div>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 animate-bounce-in">
                  <span className="text-white font-bold text-3xl">2</span>
                </div>
                <div className="hidden lg:block absolute top-12 -right-8 text-[#22336a] animate-pulse">
                  <ChevronRight className="h-8 w-8" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22336a]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/30 transition-all duration-500 transform group-hover:-translate-y-2 h-48 flex flex-col">
                <h3 className="text-2xl font-bold text-[#22336a] mb-4 group-hover:text-[#22336a] transition-colors duration-300">
                  Interview & Test
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1 flex items-center">
                  Participate in counseling session and aptitude assessment
                </p>
              </div>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 animate-bounce-in">
                  <span className="text-white font-bold text-3xl">3</span>
                </div>
                <div className="hidden lg:block absolute top-12 -right-8 text-[#22336a] animate-pulse">
                  <ChevronRight className="h-8 w-8" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22336a]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/30 transition-all duration-500 transform group-hover:-translate-y-2 h-48 flex flex-col">
                <h3 className="text-2xl font-bold text-[#22336a] mb-4 group-hover:text-[#22336a] transition-colors duration-300">
                  Document Review
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1 flex items-center">
                  Submit required documents for verification and eligibility check
                </p>
              </div>
            </div>

            <div className="text-center group animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#22336a] to-[#3b4d7a] rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-all duration-500 animate-bounce-in">
                  <span className="text-white font-bold text-3xl">4</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[#22336a]/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:border-[#22336a]/30 transition-all duration-500 transform group-hover:-translate-y-2 h-48 flex flex-col">
                <h3 className="text-2xl font-bold text-[#22336a] mb-4 group-hover:text-[#22336a] transition-colors duration-300">
                  Seat Book & Confirmation
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed flex-1 flex items-center">
                  Secure your seat and receive admission confirmation to start your journey
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#22336a] mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-gray-700 mb-6">
                Contact us today to begin the admission process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  className="bg-[#c38935] hover:bg-[#c38935]/80 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg"
                  asChild
                >
                  <a href="tel:+917065303030" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91 7065-30-30-30
                  </a>
                </Button>
                <Button
                  className="bg-[#22336a] hover:bg-[#22336a]/80 text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg"
                  asChild
                >
                  <a
                    href="https://sunstone.in/apply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Apply Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Say */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              What Students Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from our successful graduates who transformed their careers
              with Hi-Tech & Sunstone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 hover:border-[#c38935] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#c38935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RK</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">Rahul Kumar</h4>
                    <p className="text-sm text-gray-600">MBA Graduate - TCS</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">
                  "Hi-Tech with Sunstone gave me industry exposure I needed. The
                  placement support was exceptional, and I landed my dream job
                  at TCS with a great package!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-[#22336a] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#22336a] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">BCA Graduate - Infosys</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">
                  "The practical approach and industry connections at
                  Hi-Tech-Sunstone helped me develop real skills. Now I'm
                  working as a software developer at Infosys!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 hover:border-[#c38935] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#c38935] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#22336a]">Amit Joshi</h4>
                    <p className="text-sm text-gray-600">B.Tech Graduate - Wipro</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">
                  "The advanced certifications and project-based learning
                  prepared me perfectly for the industry. Grateful for the
                  excellent placement support!"
                </p>
              </CardContent>
            </Card>
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
                  answer: "You get 70+ training and development sessions by recruiters and industry experts, capstone projects every semester, professional portfolio to get noticed by recruiters, learn from expert faculty passed out from IIM and IIT, 25 LPA highest salary with 150+ job profiles to choose from, 50+ guaranteed job interviews with Placement Protection Plan, 70% job opportunities in the top metros with 250+ job opportunities in MNCs, lifetime access to a pan-India student community, and seed funding support through incubation cell.",
                  category: "sunstone"
                },
                {
                  question: "Does Sunstone provide an online or distance learning program?",
                  answer: "Sunstone offers both online and offline learning programs. Our hybrid approach ensures flexibility while maintaining quality education standards. You can choose from various learning modes based on your preferences and requirements.",
                  category: "sunstone"
                },
                {
                  question: "What are the criteria to get admission into Sunstone-powered colleges?",
                  answer: "Sunstone follows the eligibility criteria of colleges along with a personal interview for Undergraduate programs, and a screening test with an interview for the Postgraduate programs.",
                  category: "admission"
                },
                {
                  question: "Are any EMI options available if I pursue a full-time course from Sunstone?",
                  answer: "Yes, Sunstone offers flexible EMI options and financing solutions to make quality education accessible. We have partnered with leading financial institutions to provide easy payment plans that suit your financial situation.",
                  category: "fees"
                },
                {
                  question: "Do I need to give any entrance exam to get admission to Sunstone-powered colleges?",
                  answer: "The entrance exam requirements vary by program and college. Some programs may require entrance exams while others may have direct admission based on academic performance and interviews. Our counselors will guide you through the specific requirements for your chosen program.",
                  category: "admission"
                },
                {
                  question: "Can I get professional help for my studies if I choose Sunstone?",
                  answer: "Yes, if you choose Sunstone you get help from counselor to choose the right career path, 70+ training and development sessions by industry experts and top recruiters, and learn from expert faculties passed out from IIM and IIT.",
                  category: "support"
                }
              ].map((faq, index) => (
                <div key={index} className="group">
                  <Collapsible>
                    <CollapsibleTrigger className="w-full">
                      <div className="p-6 rounded-xl transition-all duration-300 cursor-pointer bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#22336a]/30 hover:shadow-lg">
                        <div className="flex items-center justify-between text-left">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="w-12 h-12 bg-[#22336a] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-bold">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-[#22336a] group-hover:text-[#22336a] transition-colors duration-300">
                                {faq.question}
                              </h3>
                              <div className="text-sm font-medium mt-1 text-[#22336a]/70">
                                {faq.category === 'sunstone' ? 'Sunstone' : 
                                 faq.category === 'admission' ? 'Admission' :
                                 faq.category === 'fees' ? 'Fees' : 'Support'}
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
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
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
                  <h3 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
                  <p className="text-gray-300 mb-8 text-lg">Our expert counselors are here to guide you through your educational journey</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+917065303030"
                      className="inline-flex items-center px-8 py-4 bg-white text-[#22336a] font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Us Now
                    </a>
                    <a
                      href="mailto:connect@sunstone.in"
                      className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Facebook Icon */}
      <footer className="bg-[#000000] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#c38935] mb-6">
              Sunstone
            </div>
            <p className="text-gray-400 mb-8 text-lg">
              Hi-Tech Institute of Engineering & Technology, powered by Sunstone
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a
                href="mailto:connect@sunstone.in"
                className="flex items-center text-gray-400 hover:text-[#c38935] transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                connect@sunstone.in
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center text-gray-400 hover:text-[#c38935] transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 7065-30-30-30
              </a>
            </div>

            <div className="flex items-center justify-center space-x-6 mb-8">
              <a
                href="https://facebook.com/sunstone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@SunstoneEducation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.998 2.998 0 0 0-2.108-2.085C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.555A2.998 2.998 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.998 2.998 0 0 0 2.108 2.085c1.885.555 9.39.555 9.39.555s7.505 0 9.39-.555a2.998 2.998 0 0 0 2.108-2.085C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/sunstone-business-school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/sunstone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Sunstone. All rights reserved | sunstone.in
              </p>
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
          0%, 100% {
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
          0%, 100% {
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
      `}</style>
    </div>
  );
};

export default Index;
