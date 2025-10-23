import React from "react"

const projects = [
  {
    title: "E-commerce Moderno",
    description: "Tienda online con React, Node.js y Stripe para pagos seguros.",
    image: "/logo.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "App de Gestión de Tareas",
    description: "Aplicación para organizar tareas con notificaciones en tiempo real.",
    image: "/logo.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Dashboard de Analytics",
    description: "Panel de control con gráficos interactivos y métricas en tiempo real.",
    image: "/logo.png",
    technologies: ["React", "Chart.js", "API REST"],
    link: "#"
  },
  {
    title: "Blog Personal",
    description: "Blog con sistema de comentarios y administración de contenido.",
    image: "/logo.png",
    technologies: ["Next.js", "MySQL", "CSS Modules"],
    link: "#"
  },
  {
    title: "Sistema de Gestión",
    description: "Aplicación completa de gestión empresarial con múltiples módulos.",
    image: "/logo.png",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
    link: "#"
  },
  {
    title: "App Móvil",
    description: "Aplicación móvil multiplataforma con funcionalidades avanzadas.",
    image: "/logo.png",
    technologies: ["React Native", "Express", "MongoDB"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mis Proyectos</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aquí puedes encontrar algunos de los proyectos en los que he trabajado, 
            cada uno diseñado para resolver problemas específicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
                <img src={project.image} alt={project.title} className="max-h-24 max-w-24 object-contain rounded-lg shadow-md" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  Ver proyecto
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
