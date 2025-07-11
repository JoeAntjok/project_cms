import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Post Not Found</h1>
          <p className="text-black-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 inline-flex items-center group"
          >
            <span className="relative z-10 flex items-center">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-electric-violet-50 via-white to-electric-violet-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-electric-violet-600 hover:text-electric-violet-700 mb-8 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-gradient-to-r from-electric-violet-100 to-electric-violet-200 text-electric-violet-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {post.category.replace('-', ' ')}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-black-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-black-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-black-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
            />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-black-200">
            <h3 className="text-lg font-semibold text-black-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-electric-violet-100 to-electric-violet-200 text-electric-violet-800 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                >
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-black-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-black-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-black-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-electric-violet-600 via-electric-violet-700 to-electric-violet-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-electric-violet-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you apply these proven digital marketing strategies to grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="relative overflow-hidden bg-white text-electric-violet-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
            >
              <span className="relative z-10 flex items-center">
                Get Expert Help
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

export default BlogPost;