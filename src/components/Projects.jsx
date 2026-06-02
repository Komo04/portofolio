const projects = [
  "/project1.jpg",
  "/project2.jpg",
  "/project3.jpg",
  "/project4.jpg",
  "/project5.jpg",
  "/project6.jpg"
];

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold">
          Projects
        </h2>

        <p className="text-center text-cyan-400">
          Some of my work
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-[#141821]"
            >
              <img
                src={project}
                alt=""
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold">
                  Project Name
                </h3>

                <p className="text-gray-400">
                  React • Tailwind
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;