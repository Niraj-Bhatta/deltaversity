import React from 'react';
import { Link, Mail } from 'lucide-react';

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

const CoreTeamSection = () => {
  return (
    <section className="py-24 bg-gray-50" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Experts</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Meet Our Core Team</h3>
          <p className="text-lg text-gray-600">
            Learn directly from industry veterans, certified examiners, and published academics dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl smooth-transition group flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary smooth-transition">
                    <Link size={18} />
                  </a>
                  <a href={member.email} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary smooth-transition">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow text-center">
                <h4 className="text-xl font-bold text-secondary mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-primary mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeamSection;
