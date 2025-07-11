import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';
import { blogPosts, categories } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-violet-50 via-white to-electric-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
              Digital Marketing Insights
            </h1>
            <p className="text-xl text-black-600 max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights, proven strategies, and the latest trends 
              in digital marketing to grow your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white shadow-lg'
                    : 'bg-white text-black-700 hover:bg-black-50 border border-black-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black-900 mb-12 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-black-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-black-400" />
                        <span className="text-sm text-black-600">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-black-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black-900 mb-12 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-black-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-black-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-black-400" />
                        <span className="text-sm text-black-600">{post.author}</span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold text-black-900 mb-4">
              No articles found
            </h3>
            <p className="text-black-600 mb-8">
              Try adjusting your search terms or category filter.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span className="relative z-10">Clear Filters</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet-600 via-electric-violet-700 to-electric-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Digital Marketing Insights
          </h2>
          <p className="text-xl text-electric-violet-100 mb-8 max-w-2xl mx-auto">
            Get the latest marketing trends, strategies, and case studies delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border-0 focus:ring-2 focus:ring-electric-violet-300"
            />
            <button className="relative overflow-hidden bg-white text-electric-violet-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <span className="relative z-10">Subscribe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-violet-200 to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">
            Let our expert team help you apply these proven digital marketing strategies to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
            >
              <span className="relative z-10 flex items-center">
                Get Expert Help
                <ArrowRight size={20} className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link
              to="/services"
              className="border border-electric-violet-600 text-electric-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-electric-violet-50 transition-colors duration-200 flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;