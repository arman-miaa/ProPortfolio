const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++ (with OOP)", "Java", "JavaScript"],
    },
    {
      title: "Python Development",
      skills: [
        "GUI - (Tkinter, PyQT5)",
        "Data Analysis - (numpy, pandas)",
        "Data Visualization - (matplotlib, seaborn)",
        "Web Application - (Django)",
      ],
    },
    {
      title: "Frameworks & Libraries",
      sections: [
        {
          subtitle: "Frontend",
          skills: ["TailwindCSS, Bootstrap, React.js, JavaScript (ES6+)"],
        },
        {
          subtitle: "Backend",
          skills: ["Python, Django, DRF (REST Framework)"],
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        "Database Design - (Lucid.app)",
        "ORM - (MySQL, PostgreSQL, Django ORM)",
        "NoSQL Databases - (SQLite, Firebase)",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Jupyter", "Git", "GitHub", "VS Code", "Codio"],
    },
    {
      title: "Competitive Programming Skills",
      skills: [
        "Data Structures (Arrays, Linked Lists, Stacks, Queues, Trees, Graphs)",
        "Algorithms (Sorting, Searching, Greedy, Dynamic Programming, Backtracking)",
        "Complexity Analysis (Big O, Time and Space Complexity)",
        "Graph Algorithms: DFS, BFS, Dijkstra, A*",
        "Problem Solving on Platforms (LeetCode, Codeforces, HackerRank)",
      ],
      wide: true,
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Teamwork & Collaboration",
        "Adaptability",
        "Time Management",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Skills</h1>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`card bg-slate-800 shadow-xl border border-slate-700 ${
                category.wide ? "md:col-span-2" : ""
              }`}
            >
              <div className="card-body">
                <h2 className="card-title text-white mb-4">{category.title}</h2>

                {category.sections ? (
                  <div className="space-y-4">
                    {category.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h3 className="text-blue-400 font-medium mb-2">
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-2">
                          {section.skills.map((skill, skillIndex) => (
                            <li
                              key={skillIndex}
                              className="text-slate-300 text-sm"
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-300 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
