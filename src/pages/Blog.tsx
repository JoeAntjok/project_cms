import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock, Search } from 'lucide-react';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  link: string;
  _embedded: {
    author: Array<{
      name: string;
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

const Blog = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://nuhafadh.com/wp-json/wp/v2/posts?_embed');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stripHtml(post.excerpt.rendered).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const featuredPosts = filteredPosts.slice(0, 3);
  const regularPosts = filteredPosts.slice(3);

  const categories = [
    { id: 'all', name: 'All Articles' }
  ];

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-violet-600 mx-auto mb-4"></div>
          <p className="text-black-600">Loading articles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black-900 mb-4">Error Loading Articles</h2>
          <p className="text-black-600 mb-8">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    );
  }

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
                      src={post._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
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
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {post.title.rendered}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-black-400" />
                        <span className="text-sm text-black-600">
                          {post._embedded.author[0]?.name || 'Admin'}
                        </span>
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </a>
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
                      src={post._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={post.title.rendered}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white bg-opacity-90 text-black-800 px-3 py-1 rounded-full text-sm font-medium">
                        Article
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-black-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {post.title.rendered}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User size={16} className="mr-2 text-black-400" />
                        <span className="text-sm text-black-600">
                          {post._embedded.author[0]?.name || 'Admin'}
                        </span>
                      </div>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium text-sm flex items-center"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && !loading && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-semibold text-black-900 mb-4">
              No articles found
            </h3>
            <p className="text-black-600 mb-8">
              Try adjusting your search terms.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span className="relative z-10">Clear Search</span>
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