import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pavithramv064@gmail.com',
      href: 'mailto:pavithramv064@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6361009538',
      href: 'tel:+916361009538'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka 560068',
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to collaborate on innovative projects and explore new opportunities. 
                Whether you have a groundbreaking idea or need expertise in data analysis and software development, 
                let's make it happen!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="block p-4 bg-gray-800/50 rounded-xl border border-purple-600/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-purple-400 font-medium text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: MessageCircle, href: '#', label: 'Discord' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 bg-gray-800 border border-purple-600/30 rounded-lg flex items-center justify-center hover:bg-purple-600/20 hover:border-purple-500 transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-purple-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-gray-800/50 p-8 rounded-xl border border-purple-600/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-400 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-600/30 rounded-lg text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-purple-400 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-600/30 rounded-lg text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-purple-400 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-600/30 rounded-lg text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div>
                  <label className="block text-purple-400 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-purple-600/30 rounded-lg text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-purple-600/20">
          <p className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
            © 2024 Pavithra M V. Crafted with 💜 and cutting-edge technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
