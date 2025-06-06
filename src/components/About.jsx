import {
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  Code,
  Heart,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Passionate software engineer with a love for competitive programming
            and building innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Bio */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="avatar">
                    <div className="w-32 h-32 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                      <img
                        src="/placeholder.svg?height=128&width=128"
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-orange-400 mb-2">
                      AN Mamun
                    </h2>
                    <p className="text-slate-300 text-lg mb-4">
                      Software Engineer | Competitive Programmer | Python
                      Developer
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>Sylhet, Bangladesh</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Available for opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <h3 className="text-xl font-bold text-white mb-4">My Story</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Hello! I'm Nur Mohammad Al Mamun, but I'm popularly known as{" "}
                    <span className="text-orange-400 font-semibold">
                      AN Mamun
                    </span>
                    . I'm a passionate software engineer with a deep love for
                    competitive programming and building innovative web
                    solutions.
                  </p>
                  <p>
                    My journey in programming started with competitive
                    programming, where I've solved over{" "}
                    <span className="text-orange-400 font-semibold">
                      1,500+ problems
                    </span>{" "}
                    across various online judges. This experience has sharpened
                    my problem-solving skills and algorithmic thinking, which I
                    apply to real-world software development.
                  </p>
                  <p>
                    I specialize in Python development, particularly with Django
                    framework, and have experience building full-stack web
                    applications. I'm always eager to learn new technologies and
                    take on challenging projects that push the boundaries of
                    what's possible.
                  </p>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <h3 className="text-xl font-bold text-white mb-6">What I Do</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Code className="w-6 h-6 text-orange-400" />
                      <h4 className="font-semibold text-white">
                        Web Development
                      </h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Building responsive and scalable web applications using
                      modern frameworks and best practices.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-orange-400" />
                      <h4 className="font-semibold text-white">
                        Competitive Programming
                      </h4>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Solving algorithmic challenges and participating in
                      programming contests to enhance problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <h3 className="text-lg font-bold text-white mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Problems Solved</span>
                    <span className="text-orange-400 font-semibold">
                      1,500+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Years of Experience</span>
                    <span className="text-orange-400 font-semibold">3+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Projects Completed</span>
                    <span className="text-orange-400 font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Certifications</span>
                    <span className="text-orange-400 font-semibold">8+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-white text-sm">
                      Computer Science & Engineering
                    </h4>
                    <p className="text-slate-400 text-xs">Bachelor's Degree</p>
                    <p className="text-slate-500 text-xs">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-orange-400" />
                  <h3 className="text-lg font-bold text-white">Interests</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Algorithms",
                    "Web Development",
                    "Machine Learning",
                    "Open Source",
                    "Problem Solving",
                    "Technology",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="card bg-slate-800 shadow-xl border border-slate-700">
              <div className="card-body">
                <h3 className="text-lg font-bold text-white mb-3">Fun Fact</h3>
                <p className="text-slate-300 text-sm">
                  I can solve a Rubik's cube in under 2 minutes and I've
                  participated in over 50 competitive programming contests! 🎯
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="card bg-slate-800 shadow-xl border border-slate-700 inline-block">
            <div className="card-body text-center">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Work Together!
              </h3>
              <p className="text-slate-400 mb-4">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
              <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
