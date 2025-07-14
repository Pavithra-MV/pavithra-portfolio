import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Server response:', result);

      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSubmitting(false);
      alert('Failed to send message.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pavithramv064@gmail.com',
      href: 'mailto:pavithramv064@gmail.com',
      gradient: 'from-[#8b5cf6] to-[#a855f7]'
    },
    // {
    //   icon: Phone,
    //   label: 'Phone',
    //   value: '+91 6361009538',
    //   href: 'tel:+916361009538',
    //   gradient: 'from-[#a855f7] to-[#c084fc]'
    // },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, Karnataka 560068',
      href: '#',
      gradient: 'from-[#c084fc] to-[#e879f9]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/pavithra-mv-086250250/',
      gradient: 'from-[#e879f9] to-[#8b5cf6]'
    }
  ];

  return (
    <section id="contact" className="py-20 relative z-10 bg-gradient-to-b from-[#1a0d2e]/50 to-[#0a0514]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] bg-clip-text text-transparent neon-text">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8b5cf6] to-[#e879f9] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="slide-in-left">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-6 neon-text">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to collaborate on innovative projects and explore new opportunities. 
                Whether you have a groundbreaking idea or need expertise in data analysis and software development, 
                let's make it happen!
              </p>
            </div>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group block p-3 bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm transform-gpu hover:scale-105 transition-all duration-500 card-3d neon-border hover:neon-glow"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.gradient} group-hover:scale-110 transform-gpu transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[#8b5cf6] font-medium text-sm">{info.label}</p>
                      <p className="text-white group-hover:text-[#e879f9] transition-colors duration-300 font-semibold">
                        {info.value}
                      </p>
                    </div>
                    <Zap className="w-5 h-5 text-[#c084fc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: 'https://github.com/Pavithramv', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/pavithra-mv-086250250/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:pavithramv064@gmail.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group w-12 h-12 bg-gradient-to-r from-[#1a0d2e] to-[#2d1b4e] border border-[#8b5cf6]/30 rounded-lg flex items-center justify-center transform-gpu hover:scale-110 hover:rotate-12 transition-all duration-300 neon-border hover:neon-glow"
                >
                  <Icon className="w-6 h-6 text-[#8b5cf6] group-hover:text-[#e879f9] transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="slide-in-right">
            <div className="bg-gradient-to-br from-[#1a0d2e]/80 to-[#2d1b4e]/80 p-8 rounded-xl border border-[#8b5cf6]/30 backdrop-blur-sm neon-border hover:neon-glow transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0514]/50 border border-[#8b5cf6]/30 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#e879f9] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0a0514]/50 border border-[#8b5cf6]/30 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#e879f9] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-white font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0a0514]/50 border border-[#8b5cf6]/30 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#e879 f9] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300"
                    placeholder="Project Discussion"
                    required
                  />
                </div>

                <div className="group">
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0a0514]/50 border border-[#8b5cf6]/30 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-[#e879f9] focus:ring-2 focus:ring-[#8b5cf6]/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-[#8b5cf6] to-[#a855f7] text-white font-bold py-4 rounded-lg overflow-hidden transform-gpu hover:scale-105 transition-all duration-300 neon-glow hover:from-[#a855f7] hover:to-[#c084fc] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-[#8b5cf6]/20">
          <p className="text-gray-400 hover:text-[#8b5cf6] transition-colors duration-300">
            © 2024 Pavithra M V. 
          </p>
        </div>

        <div className="absolute top-20 left-20 w-4 h-4 bg-[#8b5cf6] rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-[#e879f9] rounded-full animate-float-slow opacity-30"></div>
        <Zap className="absolute top-1/3 left-1/4 w-8 h-8 text-[#c084fc] animate-pulse opacity-20" />
      </div>
    </section>
  );
};

export default Contact;