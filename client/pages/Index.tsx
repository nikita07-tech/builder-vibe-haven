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

      {/* Hero Banner */}
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
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F29bf48da1a8948508c6931232f0f162d%2F390fe6d7942a4a27b802c4e3f107a3ef?format=webp&width=600"
                    alt="Hi-Tech Institute Campus"
                    className="w-full h-auto object-cover aspect-[4/3] rounded-lg"
                    loading="eager"
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 bg-[#c38935] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">🏛️</span>
                        </div>
                        <p className="text-[#22336a] font-bold text-sm">
                          Hi-Tech Institute Campus
                        </p>
                      </div>
                      <p className="text-gray-600 text-xs">
                        Modern Infrastructure & Facilities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Highlights */}
      <section className="py-12 bg-[#22336a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-[#c38935] text-white px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Placement Highlights</h3>
                  <p className="text-sm opacity-90">
                    📚 MBA | MCA | BBA | BCA | B.Tech
                  </p>
                </div>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300">
                  📞 Enquire Now
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    💰 26 LPA
                  </div>
                  <p className="text-sm text-gray-600">Highest Package</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    🎯 1200+
                  </div>
                  <p className="text-sm text-gray-600">Students Placed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22336a] mb-2">
                    🚀 5000+
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
                      Higher ROI
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
                      More Companies
                    </p>
                    <p className="text-xs text-gray-600">vs institutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-[#c38935]">
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
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              At Sunstone, we shape your future with an industry-aligned
              curriculum and expert faculty. Our focus on skill development and
              real-world learning ensures you're job-ready, paving the way for
              opportunities with 1,200+ top recruiters.
            </p>
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

      {/* Key Offerings */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#22336a] mb-4">
              Key Offerings
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our programs exceptional and job-ready
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#c38935] mb-2">70+</div>
              <p className="text-sm text-gray-700">
                sessions by industry experts and leading faculty
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#22336a] mb-2">
                Professional
              </div>
              <p className="text-sm text-gray-700">
                portfolio to increase chances of getting hired
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#c38935] mb-2">
                Seed funding
              </div>
              <p className="text-sm text-gray-700">
                support for budding entrepreneurs
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#22336a] mb-2">
                International
              </div>
              <p className="text-sm text-gray-700">
                India trips for experiential learning
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#c38935] mb-2">
                Capstone
              </div>
              <p className="text-sm text-gray-700">projects every semester</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#22336a] mb-2">10</div>
              <p className="text-sm text-gray-700">
                in-demand advanced certifications to choose from
              </p>
            </div>
            <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-xl font-bold text-[#c38935] mb-2">120+</div>
              <p className="text-sm text-gray-700">
                hours of Mock GD/PI training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Professional */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Programs Offered with Hi-Tech
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Transform your career with our industry-aligned programs designed by experts and delivered with cutting-edge technology
            </p>
          </div>

          <Tabs defaultValue="MBA" className="w-full">
            <div className="mb-8">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-white border border-gray-200 h-auto gap-2 p-2 shadow-lg rounded-xl">
                {Object.keys(programs).map((program) => (
                  <TabsTrigger
                    key={program}
                    value={program}
                    className="data-[state=active]:bg-[#22336a] data-[state=active]:text-white text-sm py-4 px-4 transition-all duration-300 hover:bg-gray-50 rounded-lg border border-transparent data-[state=active]:border-[#22336a]"
                  >
                    <div className="flex flex-col items-center">
                      <div className="p-2 rounded-full bg-gray-100 data-[state=active]:bg-white/20 mb-2 transition-colors duration-300">
                        <GraduationCap className="h-5 w-5 text-[#22336a] data-[state=active]:text-white transition-colors duration-300" />
                      </div>
                      <span className="font-semibold">{program}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(programs).map(([programName, programData]) => (
              <TabsContent key={programName} value={programName} className="mt-8">
                <Card className="border border-gray-200 shadow-lg bg-white">
                  <CardHeader className="bg-gray-50 rounded-t-lg border-b border-gray-200">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-12 h-12 bg-[#22336a] rounded-full flex items-center justify-center mr-4">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-[#22336a]">
                        {programName} Program Excellence
                      </CardTitle>
                      <div className="w-12 h-12 bg-[#c38935] rounded-full flex items-center justify-center ml-4">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-[#22336a] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Target className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-[#22336a] text-sm">
                          {programData.duration}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-[#c38935] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Award className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-[#c38935] text-sm">
                          {programData.certifications}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Certifications</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-[#22336a] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-[#22336a] text-sm">
                          {programData.internships}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Experience</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-[#c38935] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-[#c38935] text-sm">
                          {programData.projects}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-[#22336a] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Trophy className="h-5 w-5 text-white" />
                        </div>
                        <div className="font-bold text-[#22336a] text-sm">
                          {programData.specializations}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Specializations</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                        <span className="font-semibold text-gray-900 flex items-center">
                          <Star className="h-5 w-5 mr-2 text-[#c38935]" />
                          Advanced Certifications & Career Prospects
                        </span>
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="grid gap-4">
                          <p className="text-gray-700 font-medium mb-4">
                            Become a specialist through in-demand advanced
                            certifications with our dynamic modules which make
                            use of the latest tools and techniques to help you
                            acquire industry-ready skills:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {programData.certificationsList.map((cert, index) => (
                              <div
                                key={index}
                                className="p-6 bg-white border border-gray-200 rounded-xl hover:border-[#c38935] hover:shadow-lg transition-all duration-300"
                              >
                                <div className="flex items-start space-x-3 mb-3">
                                  <div className="flex-shrink-0 w-10 h-10 bg-[#c38935] rounded-full flex items-center justify-center">
                                    <Target className="h-5 w-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 mb-2 text-base">
                                      {cert.name}
                                    </h4>
                                  </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                                  <div className="flex items-center mb-2">
                                    <Briefcase className="h-4 w-4 text-[#22336a] mr-2" />
                                    <span className="font-semibold text-[#22336a] text-sm">
                                      Career Prospects:
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-700 leading-relaxed">
                                    {cert.careers}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible className="mt-6">
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300">
                        <span className="font-semibold text-gray-900 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-[#22336a]" />
                          Eligibility Criteria
                        </span>
                        <ChevronDown className="h-5 w-5 text-gray-600" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                          <p className="text-gray-700">{programData.eligibility}</p>
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

      {/* Admission Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Admission Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Simple steps to begin your journey towards a successful career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#c38935] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <div className="hidden lg:block absolute top-10 -right-8 text-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Apply Online
                </h3>
                <p className="text-gray-600">
                  Fill out our simple online application form with your details
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#22336a] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <div className="hidden lg:block absolute top-10 -right-8 text-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Document Review
                </h3>
                <p className="text-gray-600">
                  Submit required documents for verification and eligibility check
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#c38935] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <div className="hidden lg:block absolute top-10 -right-8 text-gray-400">
                  <ChevronRight className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Interview & Assessment
                </h3>
                <p className="text-gray-600">
                  Participate in counseling session and aptitude assessment
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#22336a] rounded-xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[#22336a] mb-3">
                  Confirmation
                </h3>
                <p className="text-gray-600">
                  Receive admission confirmation and start your journey
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

      {/* FAQs Section - Simple & Professional */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22336a] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Get answers to common questions about Hi-Tech Institute and Sunstone programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: "What makes Sunstone different from other educational providers?",
                answer: "Sunstone offers industry-aligned curriculum, expert faculty from Fortune 500 companies, hands-on projects, and guaranteed placement support with 1,200+ recruiting partners.",
                category: "sunstone",
              },
              {
                question: "What is the admission process for Hi-Tech Institute?",
                answer: "The admission process includes online application, document verification, counseling session, aptitude assessment, and final confirmation. Our team guides you through each step.",
                category: "hitech",
              },
              {
                question: "What placement support does Sunstone provide?",
                answer: "We offer comprehensive placement assistance including resume building, interview preparation, mock interviews, and direct access to 1,200+ recruiting companies with packages up to 26 LPA.",
                category: "sunstone",
              },
              {
                question: "What facilities are available at Hi-Tech Institute?",
                answer: "Hi-Tech Institute features modern infrastructure, state-of-the-art labs, digital classrooms, library, sports facilities, hostels, and industry-standard equipment for hands-on learning.",
                category: "hitech",
              },
              {
                question: "How does Sunstone ensure industry readiness?",
                answer: "Through 10+ advanced certifications, real-world projects, internships with top companies, mentorship from industry leaders, and practical skill development programs.",
                category: "sunstone",
              },
              {
                question: "What scholarships are available at Hi-Tech Institute?",
                answer: "Hi-Tech Institute offers merit-based scholarships, need-based financial aid, and special scholarships for outstanding academic performance and extracurricular achievements.",
                category: "hitech",
              }
            ].map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="w-full text-left p-6 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        faq.category === 'sunstone' 
                          ? 'bg-[#c38935]' 
                          : 'bg-[#22336a]'
                      }`}>
                        <span className="text-white text-lg">
                          {faq.category === 'sunstone' ? '🌟' : '🏢'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#22336a] text-left">
                          {faq.question}
                        </h3>
                        <div className={`text-xs font-medium mt-1 ${
                          faq.category === 'sunstone' ? 'text-[#c38935]' : 'text-[#22336a]'
                        }`}>
                          {faq.category === 'sunstone' ? 'Sunstone' : 'Hi-Tech Institute'}
                        </div>
                      </div>
                    </div>
                    <ChevronDown className="h-5 w-5 text-gray-600" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-gray-200 mt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-[#22336a] mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Our counselors are here to help you make the right choice</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+917065303030"
                  className="inline-flex items-center px-6 py-3 bg-[#c38935] text-white font-bold rounded-lg hover:bg-[#c38935]/80 transition-all duration-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:connect@sunstone.in"
                  className="inline-flex items-center px-6 py-3 bg-[#22336a] text-white font-bold rounded-lg hover:bg-[#22336a]/80 transition-all duration-300"
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

      {/* CSS for horizontal scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Index;
