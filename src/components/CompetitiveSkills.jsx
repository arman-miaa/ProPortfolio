import { ExternalLink } from "lucide-react";

const CompetitiveSkills = () => {
  const platforms = [
    {
      name: "HackerRank",
      stats: [
        { label: "Badges", value: "6+", highlight: true },
        { label: "Certifications", value: "2" },
        { label: "Problems Solved", value: "200+" },
      ],
    },
    {
      name: "LeetCode",
      stats: [
        { label: "Badges", value: "5+", highlight: true },
        { label: "Problems Solved", value: "800+", highlight: true },
        { label: "Submissions", value: "1,284" },
        { label: "Rating", value: "1495" },
      ],
    },
    {
      name: "Codeforces",
      stats: [
        { label: "Rank", value: "Newbie", highlight: true },
        { label: "Rating", value: "1065" },
        { label: "Problems Solved", value: "378+" },
      ],
    },
    {
      name: "CodeChef",
      stats: [
        { label: "Rank", value: "2-Star", highlight: true },
        { label: "Rating", value: "1459" },
        { label: "Problems Solved", value: "128+" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            My Competitive Programming Ranks
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Solved over{" "}
            <span className="text-orange-400 font-semibold">1,500+</span>{" "}
            problems across various online judges, consistently enhancing my
            problem-solving skills.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="card bg-slate-800 shadow-xl border border-slate-700"
            >
              <div className="card-body">
                {/* Platform Header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-white text-xl">
                    {platform.name}
                  </h2>
                  <button className="btn btn-sm btn-outline border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                    Profile
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {platform.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-slate-400 text-sm">
                        {stat.label}:
                      </span>
                      <span
                        className={`font-semibold ${
                          stat.highlight ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Rankings and statistics are updated regularly to reflect current
            performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveSkills;
