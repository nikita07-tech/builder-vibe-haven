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
                    ��� Verified & Audited
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

      {/* Programs Section - Enhanced with Animations */}
      <section className="py-20 bg-gradient-to-br from-white via-sunstone-blue/5 to-sunstone-orange/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-sunstone-orange/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-sunstone-blue/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-sunstone-orange/5 rounded-full blur-2xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-24 bg-gradient-to-r from-sunstone-orange to-sunstone-blue rounded-full mr-4"></div>
              <div className="relative">
                <GraduationCap className="h-16 w-16 text-sunstone-blue animate-bounce-subtle" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-sunstone-orange rounded-full animate-ping"></div>
              </div>
              <div className="h-1 w-24 bg-gradient-to-r from-sunstone-blue to-sunstone-orange rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue via-sunstone-orange to-sunstone-blue bg-clip-text text-transparent mb-6">
              Programs Offered with Hi-Tech
            </h2>
            <p className="text-lg sm:text-xl text-sunstone-gray-700 max-w-4xl mx-auto leading-relaxed">
              Learn from industry experts and get hands-on experience to become
              job-ready from Day 1 with our comprehensive programs
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-sunstone-orange rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-sunstone-blue rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-sunstone-orange rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="MBA" className="w-full animate-slide-up">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-sunstone-orange/20 via-sunstone-blue/20 to-sunstone-orange/20 rounded-2xl blur-xl"></div>
              <TabsList className="relative grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white/95 backdrop-blur-sm border-2 border-sunstone-gray-200 h-auto gap-2 p-2 shadow-2xl rounded-2xl">
                {Object.keys(programs).map((program, index) => (
                  <TabsTrigger
                    key={program}
                    value={program}
                    className={`group data-[state=active]:bg-gradient-to-br data-[state=active]:from-sunstone-orange data-[state=active]:to-sunstone-orange-dark data-[state=active]:text-white data-[state=active]:shadow-lg text-xs sm:text-sm py-4 px-4 transition-all duration-500 hover:scale-105 hover:shadow-md rounded-xl border border-transparent data-[state=active]:border-sunstone-orange-dark animate-scale-in relative overflow-hidden`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="flex flex-col items-center relative z-10">
                      <div className="p-2 rounded-full bg-sunstone-gray-100 group-data-[state=active]:bg-white/20 mb-2 transition-colors duration-300">
                        <GraduationCap className="h-5 w-5 text-sunstone-blue group-data-[state=active]:text-white transition-colors duration-300" />
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
                <Card className="border-sunstone-gray-200 shadow-xl bg-white/90 backdrop-blur-sm animate-scale-in hover-lift">
                  <CardHeader className="bg-gradient-to-r from-sunstone-orange/10 to-sunstone-blue/10 rounded-t-lg">
                    <div className="flex items-center justify-center mb-4">
                      <Trophy className="h-8 w-8 text-sunstone-orange mr-3 animate-float" />
                      <CardTitle className="text-2xl text-sunstone-gray-900 gradient-text">
                        {programName} Program Highlights
                      </CardTitle>
                      <Trophy
                        className="h-8 w-8 text-sunstone-blue ml-3 animate-float"
                        style={{ animationDelay: "1s" }}
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-6">
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sunstone-orange/20 to-sunstone-orange/10 rounded-lg hover-lift animate-pulse-glow">
                        <Target className="h-6 w-6 mx-auto mb-2 text-sunstone-orange" />
                        <div className="font-semibold text-sunstone-orange text-sm sm:text-base">
                          {programData.duration}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sunstone-blue/20 to-sunstone-blue/10 rounded-lg hover-lift animate-pulse-glow stagger-1">
                        <Award className="h-6 w-6 mx-auto mb-2 text-sunstone-blue" />
                        <div className="font-semibold text-sunstone-blue text-sm sm:text-base">
                          {programData.certifications}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sunstone-orange/20 to-sunstone-orange/10 rounded-lg hover-lift animate-pulse-glow stagger-2">
                        <Briefcase className="h-6 w-6 mx-auto mb-2 text-sunstone-orange" />
                        <div className="font-semibold text-sunstone-orange text-sm sm:text-base">
                          {programData.internships}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sunstone-blue/20 to-sunstone-blue/10 rounded-lg hover-lift animate-pulse-glow stagger-3">
                        <Star className="h-6 w-6 mx-auto mb-2 text-sunstone-blue" />
                        <div className="font-semibold text-sunstone-blue text-sm sm:text-base">
                          {programData.projects}
                        </div>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-sunstone-orange/20 to-sunstone-orange/10 rounded-lg hover-lift animate-pulse-glow stagger-4">
                        <Trophy className="h-6 w-6 mx-auto mb-2 text-sunstone-orange" />
                        <div className="font-semibold text-sunstone-orange text-sm sm:text-base">
                          {programData.specializations}
                        </div>
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
                    href="mailto:connect@sunstone.in"
                    className="flex items-center"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    <span className="relative">Email Us</span>
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

      {/* Explore YouTube */}
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
              <div className="h-1 w-20 bg-sunstone-orange rounded-full mr-4"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-white text-2xl">📺</span>
              </div>
              <div className="h-1 w-20 bg-sunstone-blue rounded-full ml-4"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sunstone-blue to-sunstone-orange bg-clip-text text-transparent mb-6">
              Explore Our YouTube Channel
            </h2>
            <p className="text-lg text-sunstone-gray-700 max-w-3xl mx-auto mb-8">
              Watch student success stories, campus life, and expert insights
              from Sunstone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in">
              <div className="relative">
                <div className="aspect-video bg-black">
                  <script
                    src="https://fast.wistia.com/player.js"
                    async
                  ></script>
                  <script
                    src="https://fast.wistia.com/embed/jumncwe6ta.js"
                    async
                    type="module"
                  ></script>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                      wistia-player[media-id='jumncwe6ta']:not(:defined) {
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/jumncwe6ta/swatch');
                        display: block;
                        filter: blur(5px);
                        padding-top:56.25%;
                      }
                      wistia-player {
                        width: 100%;
                        height: 100%;
                      }
                    `,
                    }}
                  />
                  <wistia-player
                    media-id="jumncwe6ta"
                    aspect="1.7777777777777777"
                    autoplay
                    muted
                    playsinline
                    controls
                    className="w-full h-full"
                  ></wistia-player>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sunstone-blue mb-2">
                  Sunstone Student Success Journey
                </h4>
                <p className="text-sm text-sunstone-gray-600">
                  Discover how Sunstone transforms careers through
                  industry-focused education and placement support
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift animate-scale-in stagger-1">
              <div className="relative">
                <div className="aspect-video bg-black">
                  <script
                    src="https://fast.wistia.com/player.js"
                    async
                  ></script>
                  <script
                    src="https://fast.wistia.com/embed/xjyegnd0xq.js"
                    async
                    type="module"
                  ></script>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                      wistia-player[media-id='xjyegnd0xq']:not(:defined) {
                        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/xjyegnd0xq/swatch');
                        display: block;
                        filter: blur(5px);
                        padding-top:56.25%;
                      }
                      wistia-player {
                        width: 100%;
                        height: 100%;
                      }
                    `,
                    }}
                  />
                  <wistia-player
                    media-id="xjyegnd0xq"
                    aspect="1.7777777777777777"
                    autoplay
                    muted
                    playsinline
                    controls
                    className="w-full h-full"
                  ></wistia-player>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-sunstone-blue mb-2">
                  Life at Hi-Tech Institute
                </h4>
                <p className="text-sm text-sunstone-gray-600">
                  Experience campus life, modern facilities, and vibrant student
                  community at Hi-Tech
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sunstone-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-sunstone-orange mb-4 animate-bounce-subtle">
              Sunstone
            </div>
            <p className="text-sunstone-gray-400 mb-4">
              Hi-Tech Institute of Engineering & Technology, powered by Sunstone
            </p>
            <div className="flex items-center justify-center space-x-6 mb-4">
              <a
                href="mailto:connect@sunstone.in"
                className="text-sunstone-gray-400 hover:text-sunstone-orange transition-colors"
              >
                connect@sunstone.in
              </a>
              <a
                href="tel:+917065303030"
                className="text-sunstone-gray-400 hover:text-sunstone-orange transition-colors"
              >
                +91 7065-30-30-30
              </a>
            </div>
            <p className="text-sunstone-gray-500 text-sm">
              All rights reserved sunstone.in 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
