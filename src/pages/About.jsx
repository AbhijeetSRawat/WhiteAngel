import React, { useState, useEffect, useRef } from 'react'
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Award,
  Target,
  Eye,
  Heart,
  CheckCircle,
  Building2,
  Factory,
  Cpu,
  Home,
  Shirt,
  ShoppingCart,
  ArrowRight,
  Quote,
  Calendar,
  Globe,
  Handshake,
  Shield,
  Database,
  Network,
  Clock,
  UserCheck,
  Headphones,
  FileText,
  Trophy,
  Linkedin,
  MessageCircle
} from 'lucide-react'

const About = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [activeIndustry, setActiveIndustry] = useState(0)
  const [activeDifferentiator, setActiveDifferentiator] = useState(0)
  const [countUp, setCountUp] = useState({
    experience: 0,
    connections: 0,
    tat: 0,
    support: 0
  })

  const statsRef = useRef(null)

  // Updated stats based on your details
  const stats = [
    { number: 10, suffix: '+', label: 'Years Experience', key: 'experience' },
    { number: 20, suffix: 'K+', label: 'LinkedIn Connections', key: 'connections' },
    { number: 10, suffix: '', label: 'Days TAT', key: 'tat' },
    { number: 24, suffix: '/7', label: 'Support Hours', key: 'support' }
  ]

  // Your specific differentiators with working images
  const differentiators = [
    {
      icon: Trophy,
      title: '10+ Years Multi-Sector Expertise',
      description: 'Extensive exposure to multiple Non IT/IT sectors with proven experience in Talent Acquisition, Executive Search, Core TA Strategies, Pipeline management, Backup planning, Poaching, Headhunting, Bulk hires and Campus-Walk-in Drives.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Executive Search', 'Bulk Hiring', 'Campus Drives', 'Headhunting', 'Pipeline Management']
    },
    {
      icon: Database,
      title: 'Exceptional Database & Global Reach',
      description: 'Strong and exceptional database of candidates with access to premium job portals and robust social media presence across different platforms, including LinkedIn with 20K+ global connections.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Premium Job Portals', '20K+ LinkedIn Connections', 'Global Database', 'Social Media Presence']
    },
    {
      icon: Headphones,
      title: '24×7 Recruitment Support',
      description: 'Round-the-clock recruitment support for clients based in India, ensuring continuous availability and immediate response to urgent hiring needs.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['24/7 Availability', 'India-focused', 'Immediate Response', 'Urgent Hiring Support']
    },
    {
      icon: UserCheck,
      title: 'Dedicated SPOC & Project Management',
      description: 'Dedicated Single Point of Contact (SPOC) and Project Manager to drive recruitment with immediate closure of critical hires, tracked through detailed recruitment trackers.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Dedicated SPOC', 'Project Management', 'Critical Hires', 'Detailed Tracking']
    },
    {
      icon: Clock,
      title: 'Lightning Fast 10-Day TAT',
      description: 'Industry-leading turnaround time of 10 days: 24-48 hours for profile delivery against JD, plus 3-7 days for all interview levels with offer closure, including backup planning.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['24-48 hrs Profile Delivery', '3-7 Days Interview Process', 'Offer Closure', 'Backup Planning']
    },
    {
      icon: MessageCircle,
      title: 'End-to-End Candidate Journey',
      description: 'Continuous follow-up with candidates for offer letter acceptance, resignation processing, and proactive engagement to ensure smooth onboarding ASAP.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Offer Follow-up', 'Resignation Support', 'Onboarding Assistance', 'Continuous Engagement']
    }
  ]

  // Industry expertise with working images
  const industries = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Specialized recruitment solutions for real estate professionals, property managers, and development teams.',
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Shirt,
      title: 'Textile Industry',
      description: 'Expert talent acquisition for textile manufacturing, design, and fashion industry professionals.',
      color: 'bg-purple-500',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Cpu,
      title: 'Electronics & IT',
      description: 'Comprehensive IT and electronics sector recruitment from technical roles to leadership positions.',
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial and manufacturing recruitment expertise spanning production, operations, and management.',
      color: 'bg-orange-500',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: ShoppingCart,
      title: 'FMCG Sector',
      description: 'Fast-moving consumer goods industry talent solutions for sales, marketing, and operations roles.',
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  // Process steps with working images
  const processSteps = [
    {
      title: 'Profile Delivery',
      description: '24-48 hours to deliver qualified profiles against your JD requirements',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-blue-600'
    },
    {
      title: 'Interview Coordination',
      description: '3-7 days for all levels of interviews with dedicated project management',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-green-600'
    },
    {
      title: 'Onboarding Support',
      description: 'Continuous follow-up for offer acceptance, resignation, and smooth joining',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      color: 'bg-purple-600'
    }
  ]

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === statsRef.current) {
            // Only animate if counters are still at 0 (haven't been animated yet)
            if (countUp.experience === 0) {
              stats.forEach((stat) => {
                let startValue = 0
                const endValue = stat.number
                const duration = 2000
                const increment = endValue / (duration / 16)
                
                const counter = setInterval(() => {
                  startValue += increment
                  
                  if (startValue >= endValue) {
                    setCountUp(prev => ({
                      ...prev,
                      [stat.key]: endValue
                    }))
                    clearInterval(counter)
                  } else {
                    setCountUp(prev => ({
                      ...prev,
                      [stat.key]: Math.floor(startValue)
                    }))
                  }
                }, 16)
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const currentStatsRef = statsRef.current

    if (currentStatsRef) {
      observer.observe(currentStatsRef)
    }

    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef)
      }
      observer.disconnect()
    }
  }, []) // Remove stats dependency to prevent re-running

  // Auto-rotate differentiators
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDifferentiator(prev => (prev + 1) % differentiators.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [differentiators.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-32">
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex justify-center mb-8">
                <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center ring-4 ring-white/30 animate-pulse">
                  <Trophy className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                About 
                <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  WHITE ANGEL
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed">
                A promising <span className="font-bold">CONSULTING</span> company based in <span className="font-bold">NOIDA</span>
              </p>
              
              <p className="text-lg text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
                <span className="font-bold">10+ years</span> of expertise across multiple sectors with <span className="font-bold">24×7 support</span> and <span className="font-bold">20K+ global connections</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Makes Us <span className="text-blue-600">Different</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six key differentiators that set WHITE ANGEL apart in the recruitment industry
            </p>
          </div>

          {/* Interactive Differentiators Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Differentiator Navigation */}
            <div className="space-y-4">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon
                return (
                  <div
                    key={diff.title}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      activeDifferentiator === index 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl' 
                        : 'bg-gray-50 hover:bg-gray-100 shadow-lg'
                    }`}
                    onClick={() => setActiveDifferentiator(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${activeDifferentiator === index ? 'bg-white/20' : 'bg-blue-100 text-blue-600'} ${activeDifferentiator === index ? 'animate-pulse' : ''}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-bold mb-2 ${activeDifferentiator === index ? 'text-white' : 'text-gray-900'}`}>
                          {diff.title}
                        </h3>
                        <p className={`leading-relaxed text-sm ${activeDifferentiator === index ? 'text-white/90' : 'text-gray-600'}`}>
                          {diff.description.substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Active Differentiator Display */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                {/* Image */}
                <div className="relative h-64">
                  <img 
                    src={differentiators[activeDifferentiator].image}
                    alt={differentiators[activeDifferentiator].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    {React.createElement(differentiators[activeDifferentiator].icon, { className: "h-12 w-12 text-white" })}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {differentiators[activeDifferentiator].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {differentiators[activeDifferentiator].description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {differentiators[activeDifferentiator].highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group transform transition-all duration-700 hover:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-2xl mb-4 group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
                  {index === 0 && <Award className="h-10 w-10" />}
                  {index === 1 && <Linkedin className="h-10 w-10" />}
                  {index === 2 && <Clock className="h-10 w-10" />}
                  {index === 3 && <Headphones className="h-10 w-10" />}
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {countUp[stat.key]}{stat.suffix}
                </div>
                
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise with Images */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Industry Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized in multiple <strong>Non IT/IT</strong> sectors with proven track record across diverse industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <div 
                  key={industry.title}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transform transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Industry Image */}
                  <div className="relative h-48">
                    <img 
                      src={industry.image}
                      alt={`${industry.title} Industry`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute bottom-4 left-4 p-3 rounded-xl text-white ${industry.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Flow with Images */}
      <section className="py-20 bg-white">
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
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center group">
                <div className="relative mb-8">
                  <img 
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg`}>
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Trophy className="h-16 w-16 mx-auto mb-6 animate-bounce text-yellow-400" />
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience The
              <span className="block">WHITE ANGEL Advantage</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              <strong>10+ years expertise</strong> • <strong>24×7 support</strong> • <strong>10-day TAT</strong> • <strong>20K+ connections</strong> • <strong>Dedicated SPOC</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/joinus"
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Start Your Search Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="mailto:w27072023@gmail.com"
                className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get 24×7 Support
                <Headphones className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About