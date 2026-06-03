const projects = [
  {
    image: "/latihanjs.png",
    link: "https://github.com/username/project1",
    description: "A simple JavaScript project to practice basic concepts."
  },
  {
    image: "/latihanreact.png",
    link: "https://komo04.github.io/DrafPokemon/",
    description: "A React-based Pokémon draft simulator."
  },
  {
    image: "/projectTA.png",
    link: "https://shoreline-production-635e.up.railway.app/",
    description: "A web application for managing shoreline projects."
  },
];

function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-12 text-white">
          Projects
        </h1>

        <p className="text-center text-cyan-400">
          Some of my work
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-[#2B2B2B] shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt="project"
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-white">
                  Project {index + 1}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-lg transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;