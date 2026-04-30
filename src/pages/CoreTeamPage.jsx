import React, { useEffect } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Eleanor Vance",
    role: "Head of Research",
    bio: "Former Oxford researcher with 15+ years experience in guiding PhD candidates to successful defences.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:eleanor@deltaversity.com"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Director of IELTS Programmes",
    bio: "Certified Cambridge examiner who has helped over 5,000 students achieve Band 8.0+ scores.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:marcus@deltaversity.com"
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    role: "Lead Data Scientist",
    bio: "Specialises in making complex AI and Data Science concepts accessible to beginners and non-programmers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:aisha@deltaversity.com"
  },
  {
    id: 4,
    name: "James Cavendish",
    role: "Career Strategist",
    bio: "Ex-Google recruiter dedicated to helping academics and professionals transition into top tech roles.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    email: "mailto:james@deltaversity.com"
  }
];

const CoreTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow bg-background dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Experts</h2>
          <h1 className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-6 tracking-tight">Meet Our Core Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Learn directly from industry veterans, certified examiners, and published academics dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">
              <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-slate-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <FaLinkedin size={20} />
                  </a>
                  <a href={member.email} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg">
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-xl font-bold text-secondary dark:text-white mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoreTeamPage;
