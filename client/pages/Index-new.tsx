import React, { useState } from "react";
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

  const programs = {
    MBA: {
      duration: "2-year program",
      certifications: "10 advanced certifications",
      internships: "6+ months of internships/projects",
      projects: "4 capstone projects",
      specializations: "6 new-age specializations",
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
    <div className="min-h-screen bg-gradient-to-b from-sunstone-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-sunstone-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F6aa2af8ffe8d468e99a56819aff9babb?format=webp&width=800"
                  alt="Hi-Tech Institute"
                  className="h-12 w-auto"
                />
                <div className="h-6 w-px bg-sunstone-gray-300"></div>
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
                className="hidden sm:flex items-center space-x-2 text-sunstone-blue hover:text-sunstone-orange transition-colors font-medium"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">connect@sunstone.in</span>
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center space-x-2 bg-sunstone-orange hover:bg-sunstone-orange-dark text-white px-4 py-2 rounded-lg transition-colors font-semibold shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 7065-30-30-30</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner - Compact */}
      <section className="bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark text-white py-6 sm:py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sunstone-blue/95 to-sunstone-blue-dark/95"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Content Section - Takes 3 columns on large screens */}
            <div className="lg:col-span-3 text-center lg:text-left animate-slide-up order-2 lg:order-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight">
                Power up your career with an MBA, BBA, BCA, MCA & B.Tech at
                Hi-Tech Institute of Engineering & Technology
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-sunstone-orange font-semibold">
                Powered by Sunstone
              </p>
              <a
                href="https://sunstone.in/campuses/hi-tech-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-sunstone-orange hover:bg-sunstone-orange-dark text-white font-bold rounded-lg transition-all duration-500 hover-lift shadow-lg animate-pulse-glow relative overflow-hidden text-sm sm:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative">Know more</span>
                <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Image Section - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 order-1 lg:order-2 relative">
              <div className="relative max-w-sm mx-auto">
                {/* Simple shadow */}
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-2 animate-float">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600"
                      alt="Hi-Tech Institute Campus"
                      className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
                      loading="eager"
                    />

                    {/* Simple overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sunstone-blue/20 via-transparent to-transparent"></div>

                    {/* Campus info card */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 bg-sunstone-orange rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              🏛️
                            </span>
                          </div>
                          <p className="text-sunstone-blue font-bold text-sm">
                            Hi-Tech Institute Campus
                          </p>
                        </div>
                        <p className="text-sunstone-gray-600 text-xs">
                          Modern Infrastructure & Facilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights - Compact & Creative */}
      <section className="py-8 bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-5 left-5 w-32 h-32 bg-sunstone-orange/30 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-5 right-5 w-40 h-40 bg-white/20 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden animate-scale-in">
            <div className="bg-gradient-to-r from-sunstone-orange to-sunstone-blue text-white px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="animate-slide-in-left">
                  <h3 className="text-lg font-bold">Placement Highlights</h3>
                  <p className="text-xs opacity-90">
                    📚 MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 hover:scale-105 animate-slide-in-right">
                  📞 Enquire Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center animate-count-up group">
                  <div className="relative">
                    <div className="text-2xl font-bold text-sunstone-blue mb-1 group-hover:scale-110 transition-transform duration-300">
                      💰 26 LPA
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  </div>
                  <p className="text-xs text-sunstone-gray-600">
                    Highest Package
                  </p>
                  <div className="w-full bg-sunstone-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full animate-pulse"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center animate-count-up stagger-1 group">
                  <div className="relative">
                    <div className="text-2xl font-bold text-sunstone-blue mb-1 group-hover:scale-110 transition-transform duration-300">
                      🎯 1200+
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-sunstone-orange rounded-full animate-bounce"></div>
                  </div>
                  <p className="text-xs text-sunstone-gray-600">
                    Students Placed
                  </p>
                  <div className="w-full bg-sunstone-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-gradient-to-r from-sunstone-orange to-sunstone-orange-dark h-1.5 rounded-full animate-pulse"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="text-center animate-count-up stagger-2 group">
                  <div className="relative">
                    <div className="text-2xl font-bold text-sunstone-blue mb-1 group-hover:scale-110 transition-transform duration-300">
                      🚀 5000+
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-sunstone-blue rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-xs text-sunstone-gray-600">
                    Job Opportunities
                  </p>
                  <div className="w-full bg-sunstone-gray-200 rounded-full h-1.5 mt-2">
                    <div
                      className="bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark h-1.5 rounded-full animate-pulse"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-gradient-to-r from-sunstone-orange/10 to-transparent rounded-lg p-3 flex items-center space-x-2 animate-slide-in-left hover:shadow-lg transition-all duration-300 group hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">📈 63%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sunstone-blue text-sm group-hover:text-sunstone-orange transition-colors duration-300">
                      Higher ROI
                    </p>
                    <p className="text-xs text-sunstone-gray-600">
                      vs private colleges
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sunstone-blue/10 to-transparent rounded-lg p-3 flex items-center space-x-2 animate-slide-in-right hover:shadow-lg transition-all duration-300 group hover:scale-105">
                  <div className="w-8 h-8 bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">🏢 7X</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sunstone-blue text-sm group-hover:text-sunstone-orange transition-colors duration-300">
                      More Companies
                    </p>
                    <p className="text-xs text-sunstone-gray-600">
                      vs institutes
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sunstone-gray-50 to-white rounded-lg p-2 text-center animate-fade-in">
                <p className="text-xs text-sunstone-gray-700">
                  <span className="font-semibold text-sunstone-orange">
                    ✅ Verified & Audited
                  </span>{" "}
                  by Official Auditor for JM Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sunstone Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-sunstone-gray-700 max-w-4xl mx-auto animate-fade-in">
              At Sunstone, we shape your future with an industry-aligned
              curriculum and expert faculty. Our focus on skill development and
              real-world learning ensures you're job-ready, paving the way for
              opportunities with 1,200+ top recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* The Sunstone Philosophy */}
      <section className="py-20 bg-gradient-to-br from-white via-sunstone-blue/5 to-sunstone-orange/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-sunstone-orange/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-sunstone-blue/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-sunstone-orange to-sunstone-blue rounded-full mr-4"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-sunstone-orange to-sunstone-blue rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-white text-2xl font-bold">💡</span>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sunstone-orange rounded-full animate-bounce"></div>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-sunstone-blue to-sunstone-orange rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue via-sunstone-orange to-sunstone-blue bg-clip-text text-transparent mb-6">
              The Sunstone Philosophy
            </h2>
            <p className="text-lg sm:text-xl text-sunstone-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our philosophy is deeply rooted in helping you learn from the
              best, providing a hands-on experience so your education is not
              just limited to theory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card className="text-center border-2 border-sunstone-gray-100 hover:border-sunstone-orange hover:shadow-xl transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-sunstone-blue font-bold">
                  Learn from Industry Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sunstone-gray-600 leading-relaxed">
                  Learn from CEOs, CTOs, COOs, and other leaders from Fortune
                  500 companies and leading Indian start-ups with 10+ years of
                  recruitment experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-sunstone-gray-100 hover:border-sunstone-blue hover:shadow-xl transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-sunstone-blue font-bold">
                  Real-World Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sunstone-gray-600 leading-relaxed">
                  Put what you learn into practice and gain hands-on experience
                  with internships & real-life projects and be ready for your
                  job from Day 1
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-sunstone-gray-100 hover:border-sunstone-orange hover:shadow-xl transition-all duration-300 hover-lift">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-xl text-sunstone-blue font-bold">
                  Professional Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sunstone-gray-600 leading-relaxed">
                  Increase your chances of getting hired by showcasing your
                  verified skills and experience with a professional portfolio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sunstone-blue mb-4">
              Key Offerings
            </h2>
            <p className="text-base sm:text-lg text-sunstone-gray-600 max-w-2xl mx-auto">
              Discover what makes our programs exceptional and job-ready
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in">
              <div className="text-lg sm:text-xl font-bold text-sunstone-orange mb-1">
                70+
              </div>
              <p className="text-xs text-sunstone-gray-700">
                sessions by industry experts and leading faculty
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-1">
              <div className="text-lg sm:text-xl font-bold text-sunstone-blue mb-1">
                Professional
              </div>
              <p className="text-xs text-sunstone-gray-700">
                portfolio to increase chances of getting hired
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-2">
              <div className="text-lg sm:text-xl font-bold text-sunstone-orange mb-1">
                Seed funding
              </div>
              <p className="text-xs text-sunstone-gray-700">
                support for budding entrepreneurs
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-3">
              <div className="text-lg sm:text-xl font-bold text-sunstone-blue mb-1">
                International
              </div>
              <p className="text-xs text-sunstone-gray-700">
                India trips for experiential learning
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-4">
              <div className="text-lg sm:text-xl font-bold text-sunstone-orange mb-1">
                Capstone
              </div>
              <p className="text-xs text-sunstone-gray-700">
                projects every semester
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-5">
              <div className="text-lg sm:text-xl font-bold text-sunstone-blue mb-1">
                10
              </div>
              <p className="text-xs text-sunstone-gray-700">
                in-demand advanced certifications to choose from
              </p>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-5">
              <div className="text-lg sm:text-xl font-bold text-sunstone-orange mb-1">
                120+
              </div>
              <p className="text-xs text-sunstone-gray-700">
                hours of Mock GD/PI training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Professional & Engaging */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-orange-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-400/15 to-blue-400/15 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-sunstone-blue rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full mr-4 animate-pulse"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
                  <GraduationCap className="h-10 w-10 text-white animate-bounce-subtle" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-teal-500 rounded-full animate-bounce"></div>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 rounded-full ml-4 animate-pulse"></div>
            </div>
            
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Programs Offered with Hi-Tech
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your career with our industry-aligned programs designed by experts and delivered with cutting-edge technology
            </p>
            
            <div className="flex justify-center items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 font-medium">5 Programs Available</span>
            </div>
          </div>

          <Tabs defaultValue="MBA" className="w-full animate-slide-up">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-orange-400/20 rounded-2xl blur-xl"></div>
              <TabsList className="relative grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white/95 backdrop-blur-sm border-2 border-gray-200/50 h-auto gap-2 p-2 shadow-2xl rounded-2xl">
                {Object.keys(programs).map((program, index) => (
                  <TabsTrigger
                    key={program}
                    value={program}
                    className={`group data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-xs sm:text-sm py-4 px-4 transition-all duration-500 hover:scale-105 hover:shadow-md rounded-xl border border-transparent data-[state=active]:border-purple-600 animate-scale-in relative overflow-hidden`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="flex flex-col items-center relative z-10">
                      <div className="p-2 rounded-full bg-gray-100 group-data-[state=active]:bg-white/20 mb-2 transition-colors duration-300">
                        <GraduationCap className="h-5 w-5 text-blue-600 group-data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-semibold">{program}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(programs).map(([programName, programData]) => (
              <TabsContent
                key={programName}
                value={programName}
                className="mt-8"
              >
                <Card className="border-2 border-gray-200/50 shadow-2xl bg-white/95 backdrop-blur-sm animate-scale-in hover-lift hover:shadow-3xl transition-all duration-500">
                  <CardHeader className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 rounded-t-lg border-b border-gray-200/30">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                        {programName} Program Excellence
                      </CardTitle>
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center ml-4 animate-pulse-glow" style={{ animationDelay: "1s" }}>
                        <Star className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                      <div className="text-center p-4 bg-gradient-to-br from-blue-500/15 via-blue-400/10 to-blue-300/5 rounded-xl hover-lift animate-pulse-glow border border-blue-200/30 hover:border-blue-400/50 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Target className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-blue-600 text-sm">
                          {programData.duration}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-purple-500/15 via-purple-400/10 to-purple-300/5 rounded-xl hover-lift animate-pulse-glow stagger-1 border border-purple-200/30 hover:border-purple-400/50 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-purple-600 text-sm">
                          {programData.certifications}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Certifications</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-orange-500/15 via-orange-400/10 to-orange-300/5 rounded-xl hover-lift animate-pulse-glow stagger-2 border border-orange-200/30 hover:border-orange-400/50 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-orange-600 text-sm">
                          {programData.internships}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Experience</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-teal-500/15 via-teal-400/10 to-teal-300/5 rounded-xl hover-lift animate-pulse-glow stagger-3 border border-teal-200/30 hover:border-teal-400/50 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-teal-600 text-sm">
                          {programData.projects}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-pink-500/15 via-pink-400/10 to-pink-300/5 rounded-xl hover-lift animate-pulse-glow stagger-4 border border-pink-200/30 hover:border-pink-400/50 transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-pink-600 text-sm">
                          {programData.specializations}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Specializations</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-sunstone-gray-50 to-sunstone-blue/5 rounded-lg hover:from-sunstone-orange/10 hover:to-sunstone-blue/10 transition-all duration-300 hover-lift">
                        <span className="font-semibold text-sunstone-gray-900 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-sunstone-orange" />
                          Advanced Certifications & Career Prospects
                        </span>
                        <ChevronDown className="h-5 w-5 text-sunstone-gray-600" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="grid gap-4">
                          <p className="text-sunstone-gray-700 font-medium mb-4 animate-fade-in">
                            Become a specialist through in-demand advanced
                            certifications with our dynamic modules which make
                            use of the latest tools and techniques to help you
                            acquire industry-ready skills:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {programData.certificationsList.map(
                              (cert, index) => (
                                <div
                                  key={index}
                                  className={`group p-6 bg-gradient-to-br from-white to-sunstone-gray-50 border-2 border-sunstone-gray-200 rounded-xl hover:border-sunstone-orange/50 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in transform hover:-translate-y-1`}
                                  style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                  <div className="flex items-start space-x-3 mb-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <Target className="h-5 w-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="font-bold text-sunstone-gray-900 mb-2 group-hover:text-sunstone-orange transition-colors duration-300 text-base">
                                        {cert.name}
                                      </h4>
                                    </div>
                                  </div>
                                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-sunstone-gray-100">
                                    <div className="flex items-center mb-2">
                                      <Briefcase className="h-4 w-4 text-sunstone-blue mr-2" />
                                      <span className="font-semibold text-sunstone-blue text-sm">
                                        Career Prospects:
                                      </span>
                                    </div>
                                    <p className="text-sm text-sunstone-gray-700 leading-relaxed">
                                      {cert.careers}
                                    </p>
                                  </div>
                                  <div className="mt-4 flex justify-end">
                                    <div className="flex space-x-1">
                                      <div className="w-2 h-2 bg-sunstone-orange rounded-full animate-bounce"></div>
                                      <div
                                        className="w-2 h-2 bg-sunstone-blue rounded-full animate-bounce"
                                        style={{ animationDelay: "0.1s" }}
                                      ></div>
                                      <div
                                        className="w-2 h-2 bg-sunstone-orange rounded-full animate-bounce"
                                        style={{ animationDelay: "0.2s" }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="mt-6">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-sunstone-gray-50 to-sunstone-orange/5 rounded-lg hover:from-sunstone-orange/10 hover:to-sunstone-blue/10 transition-all duration-300 hover-lift">
                        <span className="font-semibold text-sunstone-gray-900 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-sunstone-blue" />
                          Eligibility Criteria
                        </span>
                        <ChevronDown className="h-5 w-5 text-sunstone-gray-600" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="p-4 border border-sunstone-gray-200 rounded-lg bg-gradient-to-r from-sunstone-blue/5 to-sunstone-orange/5 animate-fade-in">
                          <p className="text-sunstone-gray-700">
                            {programData.eligibility}
                          </p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Top Recruiters Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-sunstone-blue/3 to-sunstone-orange/3 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-sunstone-orange/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-48 h-48 bg-sunstone-blue/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-sunstone-orange to-sunstone-blue rounded-full mr-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-sunstone-blue to-sunstone-orange rounded-full flex items-center justify-center animate-pulse-glow">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-sunstone-blue to-sunstone-orange rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue via-sunstone-orange to-sunstone-blue bg-clip-text text-transparent mb-6">
              Top Recruiters
            </h2>
            <p className="text-lg sm:text-xl text-sunstone-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join a network of 1,200+ leading companies that actively recruit our graduates
            </p>
          </div>

          {/* Recruiter Logos Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 mb-12">
            {[
              { name: "TCS", logo: "🏢", color: "from-blue-600 to-blue-800" },
              { name: "Infosys", logo: "💼", color: "from-green-600 to-green-800" },
              { name: "Wipro", logo: "⚡", color: "from-orange-600 to-orange-800" },
              { name: "Cognizant", logo: "🔥", color: "from-red-600 to-red-800" },
              { name: "HCL", logo: "🚀", color: "from-purple-600 to-purple-800" },
              { name: "Accenture", logo: "💎", color: "from-indigo-600 to-indigo-800" },
              { name: "IBM", logo: "🌟", color: "from-blue-700 to-blue-900" },
              { name: "Capgemini", logo: "✨", color: "from-teal-600 to-teal-800" },
              { name: "Tech Mahindra", logo: "🎯", color: "from-orange-500 to-red-600" },
              { name: "L&T", logo: "⭐", color: "from-gray-600 to-gray-800" },
              { name: "Microsoft", logo: "🔵", color: "from-blue-500 to-blue-700" },
              { name: "Amazon", logo: "📦", color: "from-yellow-600 to-orange-600" },
            ].map((company, index) => (
              <div
                key={company.name}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-sunstone-gray-200 hover:border-sunstone-orange/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${company.color} rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-lg">{company.logo}</span>
                </div>
                <h4 className="text-xs font-semibold text-sunstone-blue group-hover:text-sunstone-orange transition-colors duration-300 text-center">
                  {company.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in border border-sunstone-orange/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunstone-blue mb-2">1200+</div>
              <p className="text-sunstone-gray-600">Top Recruiting Companies</p>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in stagger-1 border border-sunstone-blue/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunstone-blue mb-2">26 LPA</div>
              <p className="text-sunstone-gray-600">Highest Package Offered</p>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in stagger-2 border border-sunstone-orange/20">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-sunstone-blue mb-2">95%</div>
              <p className="text-sunstone-gray-600">Placement Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-20 bg-gradient-to-br from-sunstone-gray-50 via-white to-sunstone-blue/10 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-16 bg-sunstone-orange rounded-full mr-3"></div>
              <GraduationCap className="h-10 w-10 text-sunstone-blue animate-bounce-subtle" />
              <div className="h-1 w-16 bg-sunstone-orange rounded-full ml-3"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sunstone-blue mb-6">
              Admission Process
            </h2>
            <p className="text-lg sm:text-xl text-sunstone-gray-700 max-w-3xl mx-auto">
              Simple steps to begin your journey towards a successful career
            </p>
          </div>

          {/* Process Steps - Professional */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center group animate-scale-in">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                {/* Professional connecting line */}
                <div className="hidden lg:block absolute top-10 -right-8 text-sunstone-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-sunstone-gray-200 group-hover:shadow-xl group-hover:border-sunstone-orange/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-sunstone-blue mb-3 group-hover:text-sunstone-orange transition-colors duration-300">
                  Apply Online
                </h3>
                <p className="text-sunstone-gray-600">
                  Fill out our simple online application form with your details
                </p>
              </div>
            </div>

            <div className="text-center group animate-scale-in stagger-1">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 -right-8 text-sunstone-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-sunstone-gray-200 group-hover:shadow-xl group-hover:border-sunstone-blue/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-sunstone-blue mb-3 group-hover:text-sunstone-orange transition-colors duration-300">
                  Document Review
                </h3>
                <p className="text-sunstone-gray-600">
                  Submit required documents for verification and eligibility
                  check
                </p>
              </div>
            </div>

            <div className="text-center group animate-scale-in stagger-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 -right-8 text-sunstone-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-sunstone-gray-200 group-hover:shadow-xl group-hover:border-sunstone-orange/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-sunstone-blue mb-3 group-hover:text-sunstone-orange transition-colors duration-300">
                  Interview & Assessment
                </h3>
                <p className="text-sunstone-gray-600">
                  Participate in counseling session and aptitude assessment
                </p>
              </div>
            </div>

            <div className="text-center group animate-scale-in stagger-3">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-sunstone-gray-200 group-hover:shadow-xl group-hover:border-green-500/50 transition-all duration-300 transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-sunstone-blue mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Confirmation
                </h3>
                <p className="text-sunstone-gray-600">
                  Receive admission confirmation and start your journey
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-sunstone-gray-200 animate-fade-in">
              <h3 className="text-2xl font-bold text-sunstone-blue mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-sunstone-gray-700 mb-6">
                Contact us today to begin the admission process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  className="bg-gradient-to-r from-sunstone-orange to-sunstone-orange-dark hover:from-sunstone-orange-dark hover:to-sunstone-orange text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg group relative overflow-hidden"
                  asChild
                >
                  <a href="tel:+917065303030" className="flex items-center">
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    <span className="relative">
                      Call Now: +91 7065-30-30-30
                    </span>
                  </a>
                </Button>
                <Button
                  className="bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark hover:from-sunstone-blue-dark hover:to-sunstone-blue text-white px-8 py-4 text-lg font-bold rounded-lg shadow-lg group relative overflow-hidden"
                  asChild
                >
                  <a
                    href="https://sunstone.in/apply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <ExternalLink className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    <span className="relative">Apply Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Say */}
      <section className="py-16 bg-gradient-to-br from-sunstone-gray-50 via-white to-sunstone-orange/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-sunstone-blue/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-56 h-56 bg-sunstone-orange/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-sunstone-orange rounded-full mr-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-sunstone-blue to-sunstone-orange rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white text-2xl">💬</span>
              </div>
              <div className="h-1 w-20 bg-sunstone-blue rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue to-sunstone-orange bg-clip-text text-transparent mb-6">
              What Students Say
            </h2>
            <p className="text-lg text-sunstone-gray-700 max-w-3xl mx-auto">
              Hear from our successful graduates who transformed their careers
              with Hi-Tech & Sunstone
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-sunstone-gray-200 hover:border-sunstone-orange/50 hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">RK</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sunstone-blue">
                      Rahul Kumar
                    </h4>
                    <p className="text-sm text-sunstone-gray-600">
                      MBA Graduate - TCS
                    </p>
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
                <p className="text-sunstone-gray-700 text-sm italic">
                  "Hi-Tech with Sunstone gave me industry exposure I needed. The
                  placement support was exceptional, and I landed my dream job
                  at TCS with a great package!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-sunstone-gray-200 hover:border-sunstone-blue/50 hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in stagger-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">PS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sunstone-blue">
                      Priya Sharma
                    </h4>
                    <p className="text-sm text-sunstone-gray-600">
                      BCA Graduate - Infosys
                    </p>
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
                <p className="text-sunstone-gray-700 text-sm italic">
                  "The practical approach and industry connections at
                  Hi-Tech-Sunstone helped me develop real skills. Now I'm
                  working as a software developer at Infosys!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-2 border-sunstone-gray-200 hover:border-sunstone-orange/50 hover:shadow-xl transition-all duration-300 hover-lift animate-scale-in stagger-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sunstone-blue">Amit Joshi</h4>
                    <p className="text-sm text-sunstone-gray-600">
                      B.Tech Graduate - Wipro
                    </p>
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
                <p className="text-sunstone-gray-700 text-sm italic">
                  "The advanced certifications and project-based learning
                  prepared me perfectly for the industry. Grateful for the
                  excellent placement support!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gradient-to-br from-sunstone-blue/5 via-white to-sunstone-orange/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-sunstone-orange/10 rounded-full blur-2xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-72 h-72 bg-sunstone-blue/10 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-sunstone-orange rounded-full mr-4 animate-pulse"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-sunstone-blue to-sunstone-orange rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white text-2xl">❓</span>
              </div>
              <div className="h-1 w-20 bg-sunstone-blue rounded-full ml-4 animate-pulse"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue to-sunstone-orange bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-sunstone-gray-700 max-w-3xl mx-auto mb-8">
              Get answers to common questions about Hi-Tech Institute and Sunstone programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: "What makes Sunstone different from other educational providers?",
                answer: "Sunstone offers industry-aligned curriculum, expert faculty from Fortune 500 companies, hands-on projects, and guaranteed placement support with 1,200+ recruiting partners.",
                category: "sunstone",
                icon: "🌟"
              },
              {
                question: "What is the admission process for Hi-Tech Institute?",
                answer: "The admission process includes online application, document verification, counseling session, aptitude assessment, and final confirmation. Our team guides you through each step.",
                category: "hitech",
                icon: "🎓"
              },
              {
                question: "What placement support does Sunstone provide?",
                answer: "We offer comprehensive placement assistance including resume building, interview preparation, mock interviews, and direct access to 1,200+ recruiting companies with packages up to 26 LPA.",
                category: "sunstone",
                icon: "💼"
              },
              {
                question: "What facilities are available at Hi-Tech Institute?",
                answer: "Hi-Tech Institute features modern infrastructure, state-of-the-art labs, digital classrooms, library, sports facilities, hostels, and industry-standard equipment for hands-on learning.",
                category: "hitech",
                icon: "🏢"
              },
              {
                question: "How does Sunstone ensure industry readiness?",
                answer: "Through 10+ advanced certifications, real-world projects, internships with top companies, mentorship from industry leaders, and practical skill development programs.",
                category: "sunstone",
                icon: "🚀"
              },
              {
                question: "What scholarships are available at Hi-Tech Institute?",
                answer: "Hi-Tech Institute offers merit-based scholarships, need-based financial aid, and special scholarships for outstanding academic performance and extracurricular achievements.",
                category: "hitech",
                icon: "💰"
              }
            ].map((faq, index) => (
              <Collapsible key={index} className={`animate-scale-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CollapsibleTrigger className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  faq.category === 'sunstone' 
                    ? 'bg-gradient-to-r from-sunstone-orange/10 to-sunstone-blue/10 border-sunstone-orange/30 hover:border-sunstone-orange/60' 
                    : 'bg-gradient-to-r from-sunstone-blue/10 to-sunstone-gray-100 border-sunstone-blue/30 hover:border-sunstone-blue/60'
                } hover-lift group`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        faq.category === 'sunstone' 
                          ? 'bg-gradient-to-br from-sunstone-orange to-sunstone-orange-dark' 
                          : 'bg-gradient-to-br from-sunstone-blue to-sunstone-blue-dark'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-lg">{faq.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sunstone-blue group-hover:text-sunstone-orange transition-colors duration-300 text-left">
                          {faq.question}
                        </h3>
                        <div className={`text-xs font-medium mt-1 ${
                          faq.category === 'sunstone' ? 'text-sunstone-orange' : 'text-sunstone-blue'
                        }`}>
                          {faq.category === 'sunstone' ? 'Sunstone' : 'Hi-Tech Institute'}
                        </div>
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-sunstone-gray-600 group-hover:text-sunstone-orange transition-all duration-300 group-data-[state=open]:rotate-180" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-sunstone-gray-200 mt-4">
                    <p className="text-sunstone-gray-700 leading-relaxed animate-fade-in">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          {/* CTA for more questions */}
          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-sunstone-gray-200 animate-fade-in">
              <h3 className="text-xl font-bold text-sunstone-blue mb-2">Still have questions?</h3>
              <p className="text-sunstone-gray-600 mb-4">Our counselors are here to help you make the right choice</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+917065303030"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sunstone-orange to-sunstone-orange-dark text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:connect@sunstone.in"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover-lift"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-sunstone-orange mb-6 animate-bounce-subtle">
              Sunstone
            </div>
            <p className="text-sunstone-gray-400 mb-8 text-lg">
              Hi-Tech Institute of Engineering & Technology, powered by Sunstone
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
              <a
                href="mailto:connect@sunstone.in"
                className="flex items-center text-sunstone-gray-400 hover:text-sunstone-orange transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                connect@sunstone.in
              </a>
              <a
                href="tel:+917065303030"
                className="flex items-center text-sunstone-gray-400 hover:text-sunstone-orange transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 7065-30-30-30
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <a
                href="https://youtube.com/@SunstoneEducation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.998 2.998 0 0 0-2.108-2.085C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.555A2.998 2.998 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.998 2.998 0 0 0 2.108 2.085c1.885.555 9.39.555 9.39.555s7.505 0 9.39-.555a2.998 2.998 0 0 0 2.108-2.085C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/sunstone-business-school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/sunstone.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <svg className="w-6 h-6 text-white group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            <div className="border-t border-sunstone-gray-700 pt-6">
              <p className="text-sunstone-gray-500 text-sm">
                © 2025 Sunstone. All rights reserved | sunstone.in
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
