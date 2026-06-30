export const metadata = {
  title: "Portfolio | Satish Yadav",
  description: "My projects and professional experience",
};

const projects = [
  {
    title: "Cracker Unit Simulation",
    description:
      "Built Pro-II simulation models for ethylene cracker optimization, achieving 15% efficiency improvement",
    tags: ["Pro-II", "Process Design", "Optimization"],
    year: "2024",
  },
  {
    title: "Polypropylene Process Design",
    description:
      "Designed and modeled polypropylene production unit with feed flexibility",
    tags: ["Pro-II", "Polyolefins", "FEED Package"],
    year: "2024",
  },
  {
    title: "Process Automation Scripts",
    description:
      "Python scripts for data extraction and process analysis automation",
    tags: ["Python", "Automation", "Data Processing"],
    year: "2024",
  },
];

export default function Portfolio() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-lg text-gray-600 mb-12">
          Selected projects and professional work
        </p>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-brand pl-6">
              <h3 className="text-xl font-semibold">Process Engineer II</h3>
              <p className="text-gray-600">Lummus Technology</p>
              <p className="text-sm text-gray-500">July 2024 - Present</p>
              <p className="text-gray-700 mt-2">
                Working on cracker, PP (polypropylene), and SAP projects. Using
                Pro-II simulation for process design and optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-100 text-brand px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Process Engineering</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Pro-II Simulation</li>
                <li>• Process Design & Optimization</li>
                <li>• FEED Package Development</li>
                <li>• Olefins & Polyolefins</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Technical</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Python Programming</li>
                <li>• Data Analysis</li>
                <li>• Process Automation</li>
                <li>• Chemical Engineering</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
