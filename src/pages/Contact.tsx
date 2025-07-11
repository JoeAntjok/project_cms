import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const services = [
    'Social Media Management',
    'Paid Ads Management',
    'Marketplace Ads Management',
    'Content Marketing',
    'SEO Services',
    'Analytics & Reporting',
    'Marketing Automation',
    'Other'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-electric-violet-50 via-white to-electric-violet-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black-900 mb-6">
            Let's Grow Your Business Together
          </h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto mb-8">
            Ready to take your digital marketing to the next level? Get in touch with our team of experts 
            and let's create a custom strategy that delivers real results.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-black-900 mb-8">
                Send us a message
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle size={48} className="text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-black-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full relative overflow-hidden bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center group"
                  >
                    <span className="relative z-10 flex items-center">
                      Send Message
                      <Send size={20} className="ml-2" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-violet-700 to-electric-violet-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black-900 mb-8">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-electric-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-black-600 mb-2">
                      Get a response within 24 hours
                    </p>
                    <a
                      href="mailto:hello@doorsagency.com"
                      className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium"
                    >
                      hello@doorsagency.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-electric-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-black-600 mb-2">
                      Mon-Fri 9AM-6PM EST
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 p-3 rounded-lg mr-4">
                    <MessageCircle size={24} className="text-electric-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-900 mb-2">
                      WhatsApp
                    </h3>
                    <p className="text-black-600 mb-2">
                      Quick response for urgent inquiries
                    </p>
                    <a
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-electric-violet-600 to-electric-violet-700 bg-clip-text text-transparent hover:from-electric-violet-700 hover:to-electric-violet-800 font-medium"
                    >
                      Chat with us
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-electric-violet-100 to-electric-violet-200 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-electric-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-900 mb-2">
                      Office Location
                    </h3>
                    <p className="text-black-600">
                      123 Business Avenue<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={40} className="text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-black-900 mb-4">
              Need Quick Answers?
            </h2>
            <p className="text-xl text-black-600 mb-8 max-w-2xl mx-auto">
              Have a quick question or want to discuss your project right away? 
              Chat with us on WhatsApp for instant support.
            </p>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
            >
              <MessageCircle size={20} className="mr-2" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-black-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service, but typically you'll see initial improvements within 30-60 days. Social media growth and engagement improvements are often visible within the first month, while SEO and long-term brand building may take 3-6 months for significant results."
              },
              {
                question: "What makes The Doors Agency different?",
                answer: "We focus on data-driven strategies, transparent reporting, and building long-term partnerships with our clients. Our team combines creativity with analytical expertise to deliver measurable results that grow your business."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our services are scalable and we offer flexible packages to fit different budgets and needs."
              },
              {
                question: "What's included in your reporting?",
                answer: "We provide comprehensive monthly reports that include key performance metrics, campaign insights, ROI analysis, and strategic recommendations. You'll always know exactly how your campaigns are performing."
              },
              {
                question: "Can I cancel my contract anytime?",
                answer: "Yes, we offer flexible contract terms with 30-day notice periods. We believe in earning your business through results, not locking you into long-term contracts."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-black-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-black-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;