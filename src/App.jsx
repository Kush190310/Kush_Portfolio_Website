import profile from './assets/kush.jpg';
import { useEffect, useState } from 'react';

const roles = ['AI/ML Engineer', 'Software Developer', 'Data Analyst'];
const navigationLinks = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

export default function PortfolioWebsite() {
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [text, setText] = useState(() => (prefersReducedMotion ? roles[0] : ''));
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    if (prefersReducedMotion) return undefined;

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, prefersReducedMotion]);

  const projects = [
    {
      name: 'Image Super-Resolution',
      description:
        'Trained and evaluated EDSR and RCAN models with TensorFlow/Keras on DIV2K and Set5. Achieved 33.2 dB average PSNR and 0.92 SSIM.',
      technologies: 'TensorFlow · Keras · EDSR · RCAN',
    },
    {
      name: 'Yoga Gesture Detection',
      description:
        'Built a real-time yoga posture classification and correction system, reaching 96.2% classification accuracy, 95.8% precision, and 96.5% recall.',
      technologies: 'TensorFlow · MediaPipe · BlazePose · OpenCV',
    },
    {
      name: 'Hospital Management System',
      description:
        'Led a team building appointment scheduling and patient-record tools. The project reduced patient wait times by 30% and login time by 40%.',
      technologies: 'React · Node.js · Express · MongoDB',
    },
    {
      name: 'Gujarati Visual Speech Recognition',
      description:
        'Developed a custom dataset and lip-movement extraction pipeline for Gujarati speech recognition, improving extraction efficiency by 20% and recognition accuracy by 25%.',
      technologies: 'Python · MediaPipe · YOLO · Transfer Learning',
    },
  ];

  const education = [
    {
      institution: 'Concordia University',
      location: 'Montreal, QC, Canada',
      qualification: 'Master of Applied Computer Science',
      dates: 'September 2026 – Expected September 2028',
      details: 'Coursework: Object-Oriented Programming, Introduction to Theoretical Computer Science, Programming and Problem Solving, and Advanced Programming Practices.',
    },
    {
      institution: 'Gujarat Technological University',
      location: 'Ahmedabad, Gujarat, India',
      qualification: 'Bachelor of Engineering, Computer Science and Engineering (AI & ML)',
      dates: 'October 2021 – June 2025',
      details: 'CGPA: 8.65/10 · Coursework included machine learning, deep learning, NLP, and data structures.',
    },
  ];

  const experience = [
    {
      company: 'Anand Medical Store',
      role: 'Data Analyst',
      location: 'Gandhinagar, Gujarat, India',
      dates: 'July 2025 – June 2026',
      highlights: [
        'Collected requirements for inventory, sales tracking, and customer records.',
        'Maintained data systems for medicine inventory, suppliers, and sales.',
        'Analyzed sales and demand patterns to support stock control and procurement planning.',
      ],
    },
    {
      company: 'BriskGains Pvt. Ltd.',
      role: 'Machine Learning Intern',
      location: 'Ahmedabad, Gujarat, India',
      dates: 'July 2024 – June 2025',
      highlights: [
        'Built face and lip-movement data pipelines for a Gujarati visual speech recognition project.',
        'Applied deep learning and transfer learning to convert lip movements into text.',
        'Improved data extraction efficiency by 20% and recognition accuracy by 25%.',
      ],
    },
  ];

  return (
    <div
      className={`portfolio ${darkMode ? 'theme-dark' : 'theme-light'} min-h-screen overflow-x-hidden`}
    >
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="text-2xl font-black tracking-widest text-cyan-400" aria-label="Kush Chaudhari, home">
            KUSH
          </a>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-6 font-medium">
              {navigationLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="hover:text-cyan-400 transition">
                  {label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold"
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
            >
              {darkMode ? 'Light' : 'Dark'}
            </button>

            <button
              type="button"
              className="mobile-menu-toggle rounded-xl border border-white/20 px-3 py-2 md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation md:hidden">
            {navigationLinks.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-cyan-400 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 mb-6">
              AI/ML ENGINEER · SOFTWARE DEVELOPER
            </div>

            <h1 className="hero-title text-5xl md:text-7xl font-black leading-tight mb-6 bg-clip-text text-transparent">
              KUSH AJITKUMAR CHAUDHARI
            </h1>

            <h2 aria-label={roles[index]} className="text-2xl md:text-4xl font-bold text-cyan-400 mb-6 min-h-12">
              {text}
              <span className="typing-cursor" aria-hidden="true">|</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Applied AI/ML and software developer pursuing a Master of Applied Computer Science at Concordia University. I bring hands-on experience in computer vision and visual speech recognition, alongside data analysis and full-stack development.
            </p>
            <p className="text-gray-400 mb-8">Based in Montreal, Quebec, Canada</p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-2xl shadow-cyan-500/40"
              >
                View Projects
              </a>

              <a
                href="/Kush_Resume.pdf"
                download
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Download Resume
              </a>

              <a
                href="https://linkedin.com/in/kush-ajitkumar-chaudhari"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Kush190310"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>

              <img
                src={profile}
                alt="Kush Ajitkumar Chaudhari"
                className="relative w-[320px] md:w-[420px] rounded-3xl border border-white/10 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-10">About Me</h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto">
            My work sits at the intersection of applied machine learning and software development. During my machine learning internship, I contributed to a Gujarati visual speech recognition system; as a data analyst, I worked with inventory and sales data to support operational decisions. I am now pursuing a Master of Applied Computer Science at Concordia University and building on my background in AI & ML.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-4xl font-black text-cyan-400 mb-3">8.65</h3>
              <p className="text-gray-400">CGPA</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-4xl font-black text-cyan-400 mb-3">MACS</h3>
              <p className="text-gray-400">Master’s student</p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:-translate-y-2 transition duration-500">
              <h3 className="text-4xl font-black text-cyan-400 mb-3">1 year</h3>
              <p className="text-gray-400">Machine Learning Internship</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-anchor py-28 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item) => (
              <article key={item.institution} className="p-8 rounded-3xl bg-black/30 border border-white/10">
                <p className="text-cyan-400 font-semibold mb-2">{item.dates}</p>
                <h3 className="text-2xl font-bold mb-2">{item.qualification}</h3>
                <p className="text-lg mb-1">{item.institution}</p>
                <p className="text-gray-400 mb-4">{item.location}</p>
                <p className="text-gray-400 leading-relaxed">{item.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-anchor py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((item) => (
              <article key={item.company} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-cyan-400 font-semibold mb-2">{item.dates}</p>
                <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                <p className="text-lg mb-1">{item.company}</p>
                <p className="text-gray-400 mb-4">{item.location}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-anchor py-28 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              ['Programming', ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS']],
              ['AI & Data', ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Computer Vision']],
              ['Web Development', ['React.js', 'Angular', 'Node.js', 'Express.js', 'NestJS', 'Tailwind CSS']],
              ['Databases & Tools', ['MongoDB', 'Couchbase', 'Elasticsearch', 'MySQL', 'PostgreSQL', 'Git']],
              ['Operating Systems', ['Windows 11', 'Linux', 'macOS', 'Mobile']],
            ].map(([category, skills]) => (
              <article key={category} className="skill-category p-7 rounded-3xl border border-white/10 bg-black/30">
                <h3 className="text-xl font-bold text-cyan-400 mb-5">{category}</h3>
                <ul className="skill-list">
                  {skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400 transition duration-500 hover:-translate-y-4 hover:rotate-1"
              >
                <div className="h-56 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 flex items-center justify-center text-2xl font-bold text-cyan-400 text-center px-4">
                  {project.name}
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-sm font-semibold text-cyan-300">{project.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor py-28 px-6 bg-white/5 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-10">Contact Me</h2>
          <p className="text-gray-400 mb-10">
            Based in Montreal, Quebec. Feel free to reach out by email or connect with me on LinkedIn.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-8 rounded-3xl border border-white/10 bg-black/30">
              <h3 className="text-2xl font-bold mb-3">Email</h3>
              <a className="text-gray-400 hover:text-cyan-400" href="mailto:chaudharikush4261@gmail.com">
                chaudharikush4261@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-black/30">
              <h3 className="text-2xl font-bold mb-3">Phone</h3>
              <a className="text-gray-400 hover:text-cyan-400" href="tel:+15145929960">
                +1 (514) 592-9960
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-black/30">
              <h3 className="text-2xl font-bold mb-3">LinkedIn</h3>
              <a
                className="text-gray-400 hover:text-cyan-400"
                href="https://linkedin.com/in/kush-ajitkumar-chaudhari"
                target="_blank"
                rel="noreferrer"
              >
                kush-ajitkumar-chaudhari
              </a>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-black/30">
              <h3 className="text-2xl font-bold mb-3">GitHub</h3>
              <a
                className="text-gray-400 hover:text-cyan-400"
                href="https://github.com/Kush190310"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Kush190310
              </a>
            </div>
          </div>

          <a
            href="mailto:chaudharikush4261@gmail.com"
            className="inline-block px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="py-8 border-t border-white/10 text-center text-gray-500">
        © 2026 Kush Ajitkumar Chaudhari
      </footer>
    </div>
  );
}