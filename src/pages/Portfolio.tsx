import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, TrendingUp, Users, Target, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TechCorp Social Media Transformation',
      category: 'social-media',
      client: 'TechCorp',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete social media strategy overhaul for a tech startup',
      results: {
        metric1: '300% increase in engagement',
        metric2: '150% follower growth',
        metric3: '50% boost in website traffic'
      },
      duration: '6 months',
      tags: ['Social Media', 'Content Strategy', 'Community Management']
    },
    {
      id: 2,
      title: 'FashionHub Paid Ads Campaign',
      category: 'paid-ads',
      client: 'FashionHub',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-converting Meta and Google Ads campaign for fashion retailer',
      results: {
        metric1: '450% ROAS improvement',
        metric2: '200% increase in sales',
        metric3: '60% lower cost per acquisition'
      },
      duration: '4 months',
      tags: ['Paid Ads', 'Meta Ads', 'Google Ads']
    },
    {
      id: 3,
      title: 'GreenLiving Marketplace Optimization',
      category: 'marketplace',
      client: 'GreenLiving',
      image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Shopee and Tokopedia optimization for eco-friendly products',
      results: {
        metric1: '#1 seller in category',
        metric2: '280% sales increase',
        metric3: '90% 5-star rating'
      },
      duration: '3 months',
      tags: ['Marketplace', 'E-commerce', 'SEO']
    },
    {
      id: 4,
      title: 'FoodieDelight Multi-Channel Campaign',
      category: 'integrated',
      client: 'FoodieDelight',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Integrated marketing campaign across social media, paid ads, and marketplaces',
      results: {
        metric1: '500% ROI on ad spend',
        metric2: '350% social growth',
        metric3: '125% revenue increase'
      },
      duration: '8 months',
      tags: ['Integrated Marketing', 'Multi-Channel', 'ROI Optimization']
    },
    {
      id: 5,
      title: 'SportMax Brand Awareness Campaign',
      category: 'social-media',
      client: 'SportMax',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Brand awareness and engagement campaign for sports equipment retailer',
      results: {
        metric1: '400% brand mention increase',
        metric2: '250% engagement rate',
        metric3: '180% website traffic'
      },
      duration: '5 months',
      tags: ['Brand Awareness', 'Content Marketing', 'Influencer Partnerships']
    },
    {
      id: 6,
      title: 'BeautyBliss E-commerce Growth',
      category: 'marketplace',
      client: 'BeautyBliss',
      image: 'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete e-commerce growth strategy for beauty brand',
      results: {
        metric1: '600% online sales growth',
        metric2: 'Top 3 brand in niche',
        metric3: '85% customer retention'
      },
      duration: '7 months',
      tags: ['E-commerce', 'Growth Strategy', 'Customer Retention']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'paid-ads', name: 'Paid Ads' },
    { id: 'marketplace', name: 'Marketplace' },
    { id: 'integrated', name: 'Integrated' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-violet-50 via-white to-electric-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful digital marketing campaigns and see how we've helped 
            businesses achieve remarkable growth and results.
          </p>
          <Link
            to="/contact"
            className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-flex items-center group"
          >
            <span className="relative z-10 flex items-center">
              Start Your Success Story
              <ArrowRight size={20} className="ml-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white shadow-lg'
                    : 'bg-black-100 text-black-700 hover:bg-black-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-electric-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent">
                      {project.client}
                    </span>
                    <div className="flex items-center text-black-500">
                      <Calendar size={16} className="mr-1" />
                      <span className="text-sm">{project.duration}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-black-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-black-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-electric-violet-100 to-electric-violet-200 text-electric-violet-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-black-600">
                      <TrendingUp size={16} className="mr-2 text-electric-violet-600" />
                      {project.results.metric1}
                    </div>
                    <div className="flex items-center text-sm text-black-600">
                      <Users size={16} className="mr-2 text-electric-violet-600" />
                      {project.results.metric2}
                    </div>
                    <div className="flex items-center text-sm text-black-600">
                      <Target size={16} className="mr-2 text-electric-violet-600" />
                      {project.results.metric3}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-black-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-black-500 hover:text-black-700"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-black-900 mb-2">
                        Project Overview
                      </h3>
                      <p className="text-black-600">
                        {selectedProject.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black-900 mb-2">
                        Client
                      </h3>
                      <p className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent font-medium">
                        {selectedProject.client}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black-900 mb-2">
                        Duration
                      </h3>
                      <p className="text-black-600">
                        {selectedProject.duration}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-black-900 mb-4">
                    Key Results
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <TrendingUp size={20} className="text-green-600 mr-2" />
                        <span className="text-green-800 font-medium">
                          {selectedProject.results.metric1}
                        </span>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users size={20} className="text-blue-600 mr-2" />
                        <span className="text-blue-800 font-medium">
                          {selectedProject.results.metric2}
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Target size={20} className="text-electric-violet-600 mr-2" />
                        <span className="text-electric-violet-800 font-medium">
                          {selectedProject.results.metric3}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black-900 mb-3">
                      Services Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-electric-violet-100 to-electric-violet-200 text-electric-violet-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get Similar Results
                      <ArrowRight size={20} className="ml-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet-600 via-electric-violet-700 to-electric-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-electric-violet-100 mb-8 max-w-2xl mx-auto">
            Let's create a custom digital marketing strategy that delivers exceptional results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-white text-electric-violet-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-violet-200 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link
              to="/services"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-electric-violet-600 transition-colors duration-200 flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;