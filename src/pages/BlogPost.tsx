import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
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

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://nuhafadh.com/wp-json/wp/v2/posts/${id}?_embed`);
        
        if (!response.ok) {
          throw new Error('Post not found');
        }
        
        const data = await response.json();
        setPost(data);

        // Fetch related posts (excluding current post)
        const relatedResponse = await fetch('https://nuhafadh.com/wp-json/wp/v2/posts?_embed&per_page=6');
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          const filtered = relatedData.filter((p: WordPressPost) => p.id !== parseInt(id || '0')).slice(0, 3);
          setRelatedPosts(filtered);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

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

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-violet-600 mx-auto mb-4"></div>
          <p className="text-black-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Article Not Found</h1>
          <p className="text-black-600 mb-8">{error || 'The article you\'re looking for doesn\'t exist.'}</p>
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
            <span className="bg-gradient-to-r from-electric-violet-100 to-electric-violet-200 text-electric-violet-800 px-3 py-1 rounded-full text-sm font-medium">
              Article
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-black-900 mb-6 leading-tight">
            {post.title.rendered}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-black-600 mb-8">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post._embedded.author[0]?.name || 'Admin'}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>5 min read</span>
            </div>
          </div>
          
          <img
            src={post._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'}
            alt={post.title.rendered}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800';
            }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-black-700 leading-relaxed wordpress-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75'
              }}
            />
          </div>
          
          {/* Original Article Link */}
          <div className="mt-12 pt-8 border-t border-black-200">
            <div className="bg-gradient-to-r from-electric-violet-50 to-electric-violet-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black-900 mb-2">Read Original Article</h3>
              <p className="text-black-600 mb-4">
                This article was originally published on nuhafadh.com
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Visit Original Article
                <ArrowRight size={16} className="ml-2" />
              </a>
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
                      src={relatedPost._embedded['wp:featuredmedia']?.[0]?.source_url || 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'}
                      alt={relatedPost.title.rendered}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-black-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{formatDate(relatedPost.date)}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-2" />
                      <span>5 min read</span>
                    </div>
                    <h3 className="text-xl font-semibold text-black-900 mb-3 line-clamp-2">
                      {relatedPost.title.rendered}
                    </h3>
                    <p className="text-black-600 mb-4 line-clamp-3">
                      {stripHtml(relatedPost.excerpt.rendered)}
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