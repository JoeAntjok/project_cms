import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, TrendingUp, Star, CheckCircle, Play, BarChart3, Zap, Award } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Social Media Management',
      description: 'Build your brand presence across all social platforms with engaging content and community management.',
      icon: Users,
    },
    {
      title: 'Paid Ads Management',
      description: 'Maximize your ROI with expertly managed Meta Ads and Google Ads campaigns.',
      icon: Target,
    },
    {
      title: 'Marketplace Ads',
      description: 'Dominate marketplaces like Shopee and Tokopedia with optimized product listings and ads.',
      icon: TrendingUp,
    },
  ];

  const companies = [
    { name: 'Spotify', color: 'text-green-500' },
    { name: 'Google', color: 'text-blue-500' },
    { name: 'Uber', color: 'text-black-900' },
    { name: 'Microsoft', color: 'text-blue-600' },
    { name: 'Shopify', color: 'text-green-600' },
    { name: 'Evernote', color: 'text-green-500' },
    { name: 'Adobe', color: 'text-red-500' },
    { name: 'PayPal', color: 'text-blue-600' },
    { name: 'Amazon', color: 'text-orange-500' },
    { name: 'Asana', color: 'text-red-400' }
  ];

  const stats = [
    { number: '245%', label: 'Average ROI Increase' },
    { number: '130K+', label: 'Leads Generated' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24+', label: 'Months Experience' }
  ];

  const process = [
    {
      icon: Target,
      title: 'Discovery',
      description: 'We analyze your business, competitors, and target audience to create a winning strategy.'
    },
    {
      icon: BarChart3,
      title: 'Strategy',
      description: 'Custom digital marketing roadmap tailored to your specific goals and budget.'
    },
    {
      icon: Zap,
      title: 'Execution',
      description: 'Implementation of campaigns across all chosen channels with continuous optimization.'
    },
    {
      icon: Award,
      title: 'Measurement',
      description: 'Detailed reporting and analysis to track performance and ROI.'
    }
  ];

  const portfolioItems = [
    {
      title: 'TechCorp',
      category: 'Social Media',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
      title: 'FashionHub',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
      title: 'GreenLiving',
      category: 'Marketplace',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-gradient-to-br from-blue-400 to-blue-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      text: 'The Doors Agency transformed our digital presence. Our social media engagement increased by 300% in just 3 months.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Michael Chen',
      company: 'FashionHub',
      text: 'Their marketplace optimization helped us become the #1 seller in our category. Incredible results!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'Emily Rodriguez',
      company: 'GreenLiving',
      text: 'Professional, creative, and results-driven. Our ad spend ROI improved by 250% with their management.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const teamMembers = [
    { name: 'Alex', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Sarah', image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Mike', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Emma', image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'David', image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Lisa', image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=150' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-black-900 mb-6 leading-tight">
                We Take Care Of Your
                <span className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-800 bg-clip-text text-transparent"> Brand</span>
              </h1>
              <p className="text-xl text-black-600 mb-8 leading-relaxed">
                Transform your digital presence with our expert marketing strategies. 
                We help businesses grow through data-driven campaigns and creative excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ArrowRight size={20} className="ml-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
                <button className="border border-black-300 text-black-700 px-8 py-4 rounded-xl font-semibold hover:bg-black-50 transition-colors duration-200 flex items-center justify-center">
                  <Play size={20} className="mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {/* Profile circles with overlapping design */}
                <div className="col-span-2 relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    👩‍💼
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-electric-violet-500 to-electric-violet-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    📊
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">
                    👨‍💻
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold shadow-lg">
                    💡
                  </div>
                </div>
                <div className="col-span-3 flex justify-center gap-4 mt-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                    📱
                  </div>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    🎯
                  </div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
                    📈
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-lg font-semibold text-black-600 mb-8">
              Companies We Work With
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <span className={`text-lg font-bold ${company.color} opacity-60 hover:opacity-100 transition-opacity`}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-black-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-black-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block bg-black-100 rounded-lg p-6 max-w-md">
              <h3 className="font-semibold text-black-900 mb-2">Commitments</h3>
              <p className="text-black-600 text-sm">
                We're committed to delivering exceptional results and building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-black-600 mb-8">
                Our proven 4-step process ensures your digital marketing success from strategy to execution.
              </p>
              
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <step.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-black-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl p-6 mb-6">
                  <div className="w-full h-32 bg-gradient-to-r from-orange-300 to-orange-400 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-orange-300 rounded w-3/4"></div>
                    <div className="h-3 bg-orange-300 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black-100 rounded-lg p-4">
                    <div className="h-16 bg-black-200 rounded mb-2"></div>
                    <div className="h-2 bg-black-300 rounded w-3/4"></div>
                  </div>
                  <div className="bg-black-100 rounded-lg p-4">
                    <div className="h-16 bg-black-200 rounded mb-2"></div>
                    <div className="h-2 bg-black-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-black-600">
              Recent projects that showcase our expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300 cursor-pointer`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white text-opacity-90">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/portfolio"
              className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
            >
              <span className="relative z-10">View More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-electric-violet-600 to-electric-violet-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Brand Today!
          </h2>
          <p className="text-xl text-electric-violet-100 mb-8">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-white text-electric-violet-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
          >
            <span className="relative z-10">Start Chat</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-violet-200 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`relative ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900 via-transparent to-transparent rounded-2xl opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="font-semibold">{member.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-black-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-black-600 mb-8">
                Our diverse team of marketing experts, creatives, and strategists work together to deliver exceptional results for your brand.
              </p>
              <Link
                to="/contact"
                className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
              >
                <span className="relative z-10">Meet The Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black-900 mb-4">
              What Our Client Said About Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${index === 0 ? 'bg-gradient-to-br from-electric-violet-600 to-electric-violet-700 text-white' : 'bg-white'}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className={`font-semibold ${index === 0 ? 'text-white' : 'text-black-900'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${index === 0 ? 'text-electric-violet-100' : 'text-black-600'}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className={`${index === 0 ? 'text-yellow-300' : 'text-yellow-400'} fill-current`} />
                  ))}
                </div>
                <p className={`${index === 0 ? 'text-electric-violet-50' : 'text-black-700'} italic`}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
            <div className="text-2xl">⚡</div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Journey With Us Now
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
          >
            <span className="relative z-10">Start Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;