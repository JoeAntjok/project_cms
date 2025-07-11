import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, ArrowRight, CheckCircle, BarChart, Calendar, MessageSquare } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Social Media Management',
      description: 'Build a strong brand presence across all social platforms with strategic content creation and community management.',
      icon: Users,
      features: [
        'Content strategy and planning',
        'Daily posting and scheduling',
        'Community engagement',
        'Performance analytics',
        'Brand voice development',
        'Hashtag optimization'
      ],
      process: [
        'Strategy Development',
        'Content Creation',
        'Publishing & Scheduling',
        'Community Management',
        'Analytics & Reporting'
      ],
      forWho: 'Perfect for businesses looking to build brand awareness, engage with customers, and create a loyal community around their brand.',
      startingPrice: '$999/month'
    },
    {
      title: 'Paid Ads Management',
      description: 'Maximize your ROI with expertly managed Meta Ads and Google Ads campaigns that drive qualified leads and sales.',
      icon: Target,
      features: [
        'Meta Ads (Facebook & Instagram)',
        'Google Ads (Search & Display)',
        'Audience research and targeting',
        'Ad creative development',
        'Campaign optimization',
        'Conversion tracking'
      ],
      process: [
        'Account Audit',
        'Campaign Setup',
        'Creative Development',
        'Launch & Monitor',
        'Optimize & Scale'
      ],
      forWho: 'Ideal for businesses ready to invest in paid advertising to generate leads, drive sales, and scale their growth.',
      startingPrice: '$1,499/month'
    },
    {
      title: 'Marketplace Ads Management',
      description: 'Dominate marketplaces like Shopee and Tokopedia with optimized product listings and strategic advertising.',
      icon: TrendingUp,
      features: [
        'Product listing optimization',
        'Shopee & Tokopedia ads',
        'Keyword research',
        'Competitive analysis',
        'Review management',
        'Sales performance tracking'
      ],
      process: [
        'Market Research',
        'Listing Optimization',
        'Ad Campaign Setup',
        'Performance Monitoring',
        'Continuous Optimization'
      ],
      forWho: 'Essential for e-commerce businesses selling on marketplaces and looking to increase visibility and sales.',
      startingPrice: '$799/month'
    }
  ];

  const additionalServices = [
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting to measure your digital marketing success.',
      icon: BarChart,
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline your marketing processes with automated workflows and campaigns.',
      icon: Calendar,
    },
    {
      title: 'Content Creation',
      description: 'Professional content creation including graphics, videos, and copywriting.',
      icon: MessageSquare,
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-violet-50 via-white to-electric-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto mb-8">
            We offer comprehensive digital marketing solutions designed to help your business grow, 
            engage customers, and drive measurable results across all digital channels.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
          >
            <span className="relative z-10 flex items-center">
              Get Custom Quote
              <ArrowRight size={20} className="ml-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon size={32} className="text-electric-violet-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-black-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-black-600 mb-6">
                    {service.description}
                  </p>
                  <p className="text-black-600 mb-6">
                    <strong>Perfect for:</strong> {service.forWho}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent">
                      Starting at {service.startingPrice}
                    </span>
                    <Link
                      to="/contact"
                      className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-black-50 rounded-xl p-8">
                    <h3 className="text-xl font-semibold text-black-900 mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle size={20} className="text-electric-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-black-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-xl font-semibold text-black-900 mb-4">
                      Our Process:
                    </h3>
                    <div className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <span className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                            {stepIndex + 1}
                          </span>
                          <span className="text-black-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Complementary services to enhance your digital marketing strategy and maximize your results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:from-electric-violet-200 group-hover:to-electric-violet-300 transition-all duration-300">
                  <service.icon size={32} className="text-electric-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-black-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-black-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet-600 via-electric-violet-700 to-electric-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-electric-violet-100 mb-8 max-w-2xl mx-auto">
            Let's create a custom digital marketing strategy that delivers real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-white text-electric-violet-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
            >
              <span className="relative z-10 flex items-center">
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-violet-200 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link
              to="/portfolio"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-electric-violet-600 transition-colors duration-200 flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;