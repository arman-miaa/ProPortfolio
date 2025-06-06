import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LibZone - University Library Management",
      description: "Library Features:",
      features: [
        "Book Management: Add, edit, delete, categorize, and search books/resources",
        "User Management: Manage student/staff and librarian profiles and authentication",
        "Borrowing System: Issue books, set due dates, calculate fines, and renewal",
        "Search & Filter: Advanced search with filters for title, author, genre, and availability",
        "Reports & Analytics: Generate reports on book popularity and overdue notifications",
        "Security & Authentication: Secure login with role-based user permissions",
      ],
      technologies: [
        "Backend: Django",
        "Database: PostgreSQL",
        "Frontend: HTML, CSS, JavaScript, Bootstrap",
        "Authentication: Django Auth",
        "Deployment: Railway",
      ],
      image: "/placeholder.svg?height=300&width=500",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-slate-800 shadow-xl border border-slate-700"
            >
              <div className="card-body p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Side - Project Details */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h2>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {project.description}
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-slate-300 text-sm leading-relaxed"
                          >
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Technology:
                      </h3>
                      <ul className="space-y-1">
                        {project.technologies.map((tech, techIndex) => (
                          <li
                            key={techIndex}
                            className="text-slate-300 text-sm"
                          >
                            • {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.githubUrl}
                        className="btn btn-outline border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                      <a
                        href={project.liveUrl}
                        className="btn btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Right Side - Project Screenshot */}
                  <div className="flex items-center justify-center">
                    <div className="mockup-browser border border-slate-600 bg-slate-700">
                      <div className="mockup-browser-toolbar">
                        <div className="input border border-slate-600 bg-slate-800 text-slate-400 text-sm">
                          https://libzone-demo.com
                        </div>
                      </div>
                      <div className="bg-white px-4 py-8">
                        {/* Mock Library Interface */}
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-gray-800">
                              Search the Library Catalog
                            </h3>
                            <div className="flex gap-2">
                              <div className="w-8 h-6 bg-blue-500 rounded"></div>
                              <div className="w-8 h-6 bg-gray-300 rounded"></div>
                            </div>
                          </div>

                          <div className="bg-gray-100 p-2 rounded">
                            <input
                              type="text"
                              placeholder="Search books..."
                              className="w-full p-2 text-sm border rounded"
                              disabled
                            />
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">
                              Recommended Books
                            </h4>
                            <div className="grid grid-cols-4 gap-2">
                              {[1, 2, 3, 4, 5, 6, 7, 8].map((book) => (
                                <div
                                  key={book}
                                  className="aspect-[3/4] bg-gradient-to-br from-blue-400 to-purple-500 rounded shadow-sm"
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="btn btn-outline border-slate-600 text-slate-300 hover:bg-slate-700">
            View More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
