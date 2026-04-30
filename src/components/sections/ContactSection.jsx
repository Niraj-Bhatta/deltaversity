import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 hidden lg:block rounded-l-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Content Info */}
          <div className="w-full lg:w-5/12 pt-8">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Ready to Accelerate Your Career?
            </h3>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Book a free consultation with our academic advisors. We'll help you identify the right mentorship programme to achieve your research or career goals.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-secondary text-lg">General Enquiries</h4>
                <p className="text-gray-600">admissions@deltaversity.com</p>
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">Phone Support</h4>
                <p className="text-gray-600">+44 20 7946 0958 (Mon-Fri, 9am - 5pm GMT)</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 bg-white rounded-3xl shadow-2xl shadow-blue-900/5 p-8 md:p-12 border border-gray-100">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">
                  ✓
                </div>
                <h4 className="text-2xl font-bold text-secondary">Message Sent Successfully!</h4>
                <p className="text-gray-600">
                  Thank you for reaching out. One of our academic advisors will be in touch with you shortly.
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-secondary">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-secondary">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-secondary">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="+44 20 7946 0958"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-secondary">How can we help you?</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="I am interested in..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full !py-4 text-lg shadow-lg shadow-primary/30">
                  Book a Free Consultation
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
