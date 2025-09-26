import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Clock,
  Handshake,
  FileText,
  Send,
  Zap,
  Trophy,
  Building2,
  UserPlus,
  Rocket,
  Diamond,
  Shield,
} from "lucide-react";

const JoinUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const googleFormUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLScqK9epcFicmJOGyG-DORcpKCOFktmm8HzmH1mVkKTAXVjoww/formResponse";

  const opportunities = [
    {
      title: "Find Your Dream Job",
      subtitle: "Multiple Industries",
      description:
        "Explore exciting opportunities across Real Estate, Textile, IT, Manufacturing, and FMCG sectors with our extensive network.",
      icon: Target,
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Premium Job Matching",
        "Career Guidance",
        "Interview Support",
        "Salary Negotiation",
      ],
    },
    {
      title: "Fast-Track Your Career",
      subtitle: "10-Day Process",
      description:
        "Our lightning-fast recruitment process gets you from application to offer in just 10 days with dedicated support.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "24-48 Hr Response",
        "Dedicated SPOC",
        "Interview Coaching",
        "Quick Placement",
      ],
    },
    {
      title: "Global Network Access",
      subtitle: "20K+ Connections",
      description:
        "Leverage our vast network of 20K+ LinkedIn connections and premium job portals for maximum exposure.",
      icon: Globe,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      benefits: [
        "Global Reach",
        "Premium Portals",
        "Network Expansion",
        "Industry Connections",
      ],
    },
  ];

  const benefits = [
    {
      icon: Trophy,
      title: "Top Companies",
      desc: "150+ partner organizations",
    },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: Star, title: "95% Success Rate", desc: "Proven track record" },
    {
      icon: Diamond,
      title: "Premium Service",
      desc: "VIP candidate treatment",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % opportunities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [opportunities.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section - FIXED WITH PROPER NAVBAR SPACING */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 pt-24 lg:py-20 lg:pt-32">
        {/* Hero Background */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Animated Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={logo}
                    alt="White Angel Logo"
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white/30 animate-pulse"
                  />
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 text-blue-800 rounded-full p-2 animate-bounce">
                      <Star className="h-6 w-6" fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Join Our
                </span>
                Success Story
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to find your{" "}
                <span className="font-bold text-yellow-300">dream job</span>?
                Join thousands of professionals who found their perfect match
                with WHITE ANGEL!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 flex items-center"
                >
                  <FileText className="mr-3 h-6 w-6" />
                  Submit Your Details
                  <Send className="ml-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div className="flex items-center text-white/80 text-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>10-Day Fast Track Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">WHITE ANGEL</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven 10+ year track record
              and 24×7 support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Opportunity Cards */}
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => {
                const Icon = opportunity.icon;
                return (
                  <div
                    key={opportunity.title}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeCard === index
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl"
                        : "bg-gray-50 hover:bg-gray-100 shadow-lg"
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-4 rounded-xl ${
                          activeCard === index
                            ? "bg-white/20"
                            : "bg-blue-100 text-blue-600"
                        } ${activeCard === index ? "animate-pulse" : ""}`}
                      >
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-semibold mb-2 ${
                            activeCard === index
                              ? "text-yellow-300"
                              : "text-blue-600"
                          }`}
                        >
                          {opportunity.subtitle}
                        </div>
                        <h3
                          className={`text-2xl font-bold mb-3 ${
                            activeCard === index
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {opportunity.title}
                        </h3>
                        <p
                          className={`leading-relaxed ${
                            activeCard === index
                              ? "text-white/90"
                              : "text-gray-600"
                          }`}
                        >
                          {opportunity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active Opportunity Display - FIXED IMAGE CONTAINER */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Image - FIXED CONTAINER */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={opportunities[activeCard].image}
                    alt={opportunities[activeCard].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {opportunities[activeCard].title}
                    </h3>
                    <p className="text-white/90">
                      {opportunities[activeCard].subtitle}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    What You Get:
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {opportunities[activeCard].benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`text-center group transform transition-all duration-700 hover:scale-110 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-2xl mb-6 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="h-10 w-10" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-600 font-medium">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands who found their dream careers with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer",
                company: "TechCorp",
                salary: "12 LPA",
                image:
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
              {
                name: "Rajesh Kumar",
                role: "Sales Manager",
                company: "FMCG Leader",
                salary: "15 LPA",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
              {
                name: "Anita Singh",
                role: "HR Director",
                company: "MNC Giant",
                salary: "18 LPA",
                image:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
              },
            ].map((story, index) => (
              <div
                key={story.name}
                className={`bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-blue-100 transform transition-all duration-700 hover:-translate-y-2 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-blue-200 object-cover"
                  />

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {story.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {story.role} at {story.company}
                  </p>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-lg font-bold mb-6">
                    {story.salary}
                  </div>

                  <p className="text-gray-600 italic">
                    "WHITE ANGEL made my career transition smooth and
                    successful. Their support was exceptional!"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow with Images - FIXED VERSION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600">
              Streamlined 10-day recruitment process with dedicated support
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 - FIXED */}
            <div className="text-center group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Profile Delivery Process"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Profile Delivery
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>24-48 hours</strong> to deliver qualified profiles
                against your JD requirements
              </p>
            </div>

            {/* Step 2 - FIXED */}
            <div className="text-center group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Interview Process"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Interview Coordination
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>3-7 days</strong> for all levels of interviews with
                dedicated project management
              </p>
            </div>

            {/* Step 3 - FIXED */}
            <div className="text-center group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Onboarding Support"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Onboarding Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <strong>Continuous follow-up</strong> for offer acceptance,
                resignation, and smooth joining
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Rocket className="h-20 w-20 mx-auto mb-8 animate-bounce text-yellow-400" />

            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Dream Job
              <span className="block text-yellow-300">Awaits You!</span>
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't wait! Submit your details now and let our expert team
              connect you with amazing opportunities.
              <strong className="text-yellow-300">
                {" "}
                24×7 support • 10-day process • 95% success rate
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 flex items-center"
              >
                <UserPlus className="mr-3 h-7 w-7" />
                Submit Your Resume Now
                <Send className="ml-3 h-7 w-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center text-blue-200">
              <Shield className="h-5 w-5 mr-2" />
              <span>Your information is 100% secure and confidential</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
