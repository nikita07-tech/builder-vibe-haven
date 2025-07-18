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
                <div className="text-sm font-semibold text-sunstone-blue bg-sunstone-gray-100 px-3 py-1 rounded-md">
                  Hi-Tech Institute
                </div>
                <div className="h-6 w-px bg-sunstone-gray-300"></div>
                <div className="text-2xl font-bold text-sunstone-orange">
                  Sunstone
                </div>
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

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-sunstone-blue to-sunstone-blue-dark text-white py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-sunstone-blue/95 to-sunstone-blue-dark/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2 text-center lg:text-left animate-slide-up">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Power up your career with an MBA, BBA, BCA, MCA & B.Tech
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-sunstone-orange font-semibold">
                at Hi-Tech Institute of Engineering & Technology
              </p>
              <p className="text-lg sm:text-xl mb-8 opacity-90">
                powered by{" "}
                <span className="font-bold text-sunstone-orange">Sunstone</span>
              </p>
              <a
                href="https://sunstone.in/campuses/hi-tech-institute"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-sunstone-orange hover:bg-sunstone-orange-dark text-white font-bold rounded-lg transition-all duration-300 hover-lift shadow-lg"
              >
                Know more
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="relative animate-scale-in lg:col-span-1">
              <div className="relative overflow-hidden rounded-xl shadow-xl max-w-sm mx-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=400"
                  alt="Hi-Tech Institute Campus"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sunstone-blue/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sunstone-blue font-bold text-sm">
                      🏛️ Hi-Tech Institute Campus
                    </p>
                    <p className="text-sunstone-gray-600 text-xs">
                      Modern Infrastructure & Facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-sunstone-orange rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-white rounded-full"></div>
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
              opportunities with 2,000+ top recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* The Sunstone Philosophy */}
      <section className="py-16 bg-sunstone-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sunstone-gray-900 mb-4">
              The Sunstone philosophy
            </h2>
            <p className="text-base sm:text-lg text-sunstone-gray-700 max-w-3xl mx-auto">
              Our philosophy is deeply rooted in helping you learn from the
              best, providing a hands-on experience so your education is not
              just limited to theory
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <Card className="text-center border-sunstone-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-sunstone-orange bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center animate-float">
                  <Users className="h-8 w-8 text-sunstone-orange" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-sunstone-gray-900">
                  Learn from recruiters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-sunstone-gray-600">
                  Learn from CEOs, CTOs, COOs, and other leaders from Fortune
                  500 companies and leading Indian start-ups with 10+ years of
                  recruitment experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-sunstone-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in stagger-2">
              <CardHeader>
                <div
                  className="mx-auto mb-4 p-3 bg-sunstone-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <Briefcase className="h-8 w-8 text-sunstone-blue" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-sunstone-gray-900">
                  Practise in the real world
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-sunstone-gray-600">
                  Put what you learn into practice and gain hands-on experience
                  with internships & real-life projects and be ready for your
                  job from Day 1
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-sunstone-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in stagger-4">
              <CardHeader>
                <div
                  className="mx-auto mb-4 p-3 bg-sunstone-orange bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Award className="h-8 w-8 text-sunstone-orange" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-sunstone-gray-900">
                  Create your own portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-sunstone-gray-600">
                  Increase your chances of getting hired by showcasing your
                  verified skills and experience with a professional portfolio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in animate-pulse-glow">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-orange mb-2">
                70+
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                sessions by industry experts and leading faculty
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-1">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-blue mb-2">
                Professional
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                portfolio to increase chances of getting hired
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-2">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-orange mb-2">
                Seed funding
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                support for budding entrepreneurs
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-3">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-blue mb-2">
                International
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                India trips for experiential learning
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-4">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-orange mb-2">
                Capstone
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                projects every semester
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-5">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-blue mb-2">
                10
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                in-demand advanced certifications to choose from
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 rounded-lg bg-sunstone-gray-50 hover-lift animate-scale-in stagger-5">
              <div className="text-xl sm:text-2xl font-bold text-sunstone-orange mb-2">
                120+
              </div>
              <p className="text-xs sm:text-sm text-sunstone-gray-700">
                hours of Mock GD/PI training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced with Animations */}
      <section className="py-16 bg-gradient-to-br from-sunstone-gray-50 to-sunstone-blue/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sunstone-orange/5 to-sunstone-blue/5 animate-gradient-shift"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-sunstone-orange mr-2 animate-bounce-subtle" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sunstone-gray-900">
                Programs Offered with Hi-Tech
              </h2>
              <Star
                className="h-8 w-8 text-sunstone-orange ml-2 animate-bounce-subtle"
                style={{ animationDelay: "1s" }}
              />
            </div>
            <p className="text-base sm:text-lg text-sunstone-gray-700 mb-6">
              Learn from experts and get hands-on experience to become job-ready
              from Day1
            </p>
          </div>

          <Tabs defaultValue="MBA" className="w-full animate-slide-up">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white/80 backdrop-blur-sm border border-sunstone-gray-200 h-auto gap-1 p-1 shadow-lg">
              {Object.keys(programs).map((program, index) => (
                <TabsTrigger
                  key={program}
                  value={program}
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-sunstone-orange data-[state=active]:to-sunstone-orange-dark data-[state=active]:text-white text-xs sm:text-sm py-3 px-3 transition-all duration-500 hover:scale-105 animate-scale-in stagger-${index + 1} animate-pulse-glow`}
                >
                  <div className="flex flex-col items-center">
                    <GraduationCap className="h-4 w-4 mb-1" />
                    {program}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

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
                          {programData.certificationsList.map((cert, index) => (
                            <div
                              key={index}
                              className={`p-4 border border-sunstone-gray-200 rounded-lg hover:border-sunstone-orange/50 transition-all duration-300 hover-lift animate-scale-in stagger-${(index % 5) + 1}`}
                              style={{ animationDelay: `${index * 0.1}s` }}
                            >
                              <h4 className="font-semibold text-sunstone-gray-900 mb-2 flex items-center">
                                <Target className="h-4 w-4 mr-2 text-sunstone-orange" />
                                {cert.name}
                              </h4>
                              <p className="text-sm text-sunstone-gray-600">
                                <span className="font-medium text-sunstone-blue">
                                  Career Prospects:
                                </span>{" "}
                                {cert.careers}
                              </p>
                            </div>
                          ))}
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

      {/* Academic & Training Partners - Separate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sunstone-gray-900 mb-4">
              Excel in your career with customised training
            </h2>
            <p className="text-base sm:text-lg text-sunstone-gray-700">
              from our leading learning and development industry partners
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-sunstone-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-sunstone-gray-900 flex items-center">
                  <Trophy className="h-6 w-6 mr-3 text-sunstone-orange" />
                  Renowned Academic Knowledge Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-sunstone-gray-200 rounded-lg hover:border-sunstone-orange/50 transition-all duration-300 hover-lift">
                  <p className="text-sm text-sunstone-gray-700">
                    Start your professional career in tech with certification
                    courses offered by{" "}
                    <span className="font-semibold text-sunstone-orange">
                      TCS iON
                    </span>
                  </p>
                </div>
                <div className="p-4 border border-sunstone-gray-200 rounded-lg hover:border-sunstone-orange/50 transition-all duration-300 hover-lift">
                  <p className="text-sm text-sunstone-gray-700">
                    Kickstart your career in finance with certification courses
                    from{" "}
                    <span className="font-semibold text-sunstone-blue">
                      AU Small Finance Bank
                    </span>
                  </p>
                </div>
                <div className="p-4 border border-sunstone-gray-200 rounded-lg hover:border-sunstone-orange/50 transition-all duration-300 hover-lift">
                  <p className="text-sm text-sunstone-gray-700">
                    Gain industry-ready expertise with certification programs
                    from{" "}
                    <span className="font-semibold text-sunstone-orange">
                      KPMG
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sunstone-gray-200 hover:shadow-lg transition-all duration-300 hover-lift animate-scale-in stagger-2">
              <CardHeader>
                <CardTitle className="text-xl text-sunstone-gray-900 flex items-center">
                  <Star className="h-6 w-6 mr-3 text-sunstone-blue" />
                  Acclaimed Entrepreneurial Training Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 border border-sunstone-gray-200 rounded-lg hover:border-sunstone-blue/50 transition-all duration-300 hover-lift">
                  <p className="text-sm text-sunstone-gray-700">
                    Build your entrepreneurial journey with training programs
                    from{" "}
                    <span className="font-semibold text-sunstone-blue">
                      NSDC
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gradient-to-r from-sunstone-gray-50 to-sunstone-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-sunstone-gray-900 mb-8">
              Admission Process
            </h2>
            <p className="text-lg text-sunstone-gray-700 mb-8">
              Ready to start your journey? Contact us to learn more about our
              admission process.
            </p>
            <Button
              className="bg-gradient-to-r from-sunstone-orange to-sunstone-orange-dark hover:from-sunstone-orange-dark hover:to-sunstone-orange text-white px-8 py-3 text-lg animate-pulse-glow hover-lift"
              asChild
            >
              <a href="tel:+917065303030">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: +91 7065-30-30-30
              </a>
            </Button>
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
