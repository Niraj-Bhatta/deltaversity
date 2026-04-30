import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-slate-950 border-t border-gray-800 dark:border-slate-900 text-white pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Institute Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <BookOpen size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight">Deltaversity</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              A premium mentorship-first academic platform focused on research, IELTS, and career development. Empowering futures globally.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary smooth-transition p-2.5 bg-white/5 rounded-full"><FaLinkedin size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary smooth-transition p-2.5 bg-white/5 rounded-full"><FaInstagram size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary smooth-transition p-2.5 bg-white/5 rounded-full"><FaFacebook size={18} /></a>
              <a href="mailto:contact@deltaversity.com" className="hover:text-white hover:bg-primary smooth-transition p-2.5 bg-white/5 rounded-full"><FaEnvelope size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1 lg:ml-12">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><RouterLink to="/" className="text-gray-400 hover:text-primary smooth-transition text-sm">Home</RouterLink></li>
              <li><a href="/#programmes" className="text-gray-400 hover:text-primary smooth-transition text-sm">Programmes</a></li>
              <li><RouterLink to="/core-team" className="text-gray-400 hover:text-primary smooth-transition text-sm">Core Team</RouterLink></li>
              <li><RouterLink to="/blog" className="text-gray-400 hover:text-primary smooth-transition text-sm">Blog</RouterLink></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-primary smooth-transition text-sm">Contact</a></li>
            </ul>
          </div>



          {/* Academics */}
          <div>
            <h4 className="font-bold text-lg mb-6">Academics</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Research Methodology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">IELTS Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Data Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm smooth-transition">Career Development</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Details</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  Deltaversity Centre,<br />
                  123 Academic Way,<br />
                  London, UK SW1A 1AA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+44 20 7946 0958</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:admissions@deltaversity.com" className="text-gray-400 hover:text-white text-sm smooth-transition">
                  admissions@deltaversity.com
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Deltaversity. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white smooth-transition">Privacy Policy</a>
            <a href="#" className="hover:text-white smooth-transition">Terms of Service</a>
            <a href="#" className="hover:text-white smooth-transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
