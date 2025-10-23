import React from "react"
import { NavLink } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Columna izquierda - Contenido principal */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Hola, soy{" "}
                <span className="text-blue-600">Angello A. Hoyos Pascuales</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 mb-6">
                Ingeniero de Software
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Especializado en desarrollo web moderno, creando soluciones innovadoras 
                con React, Node.js y tecnologías de vanguardia. Apasionado por transformar 
                ideas en experiencias digitales excepcionales.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4">
              <NavLink 
                to="/projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Ver mis proyectos</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                Contactarme
              </NavLink>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600 font-medium">Sígueme:</span>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/angello-andres-hoyos-pascuales/" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/angello-hoyos-pascuales" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen/Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              {/* Marco de fondo con gradiente */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600"></div>
              
              {/* Marco principal con la imagen */}
              <div className="absolute inset-2 rounded-2xl bg-gradient-to-tr from-white to-gray-100 p-3 shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-1">
                  <img 
                    src="/imagen angello.png" 
                    alt="Angello Hoyos" 
                    className="w-full h-full rounded-lg object-cover shadow-xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Elementos decorativos flotantes - Iconos de programación móviles */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg flex items-center justify-center animate-float">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-6 h-6 animate-spin"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg shadow-lg flex items-center justify-center animate-float delay-100">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                  alt="JavaScript" 
                  className="w-5 h-5 animate-bounce"
                />
              </div>
              
              <div className="absolute top-1/4 -left-10 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg flex items-center justify-center animate-float delay-200">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
                  alt="Node.js" 
                  className="w-4 h-4 hover:animate-spin"
                />
              </div>
              
              <div className="absolute top-1/3 -right-12 w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg flex items-center justify-center animate-float delay-150">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-5 h-5 animate-pulse"
                />
              </div>
              
              <div className="absolute bottom-1/3 -left-8 w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md shadow-lg flex items-center justify-center animate-float delay-75">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" 
                  alt="HTML5" 
                  className="w-4 h-4 hover:animate-bounce"
                />
              </div>
              
              <div className="absolute top-2/3 -right-6 w-6 h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-sm shadow-lg flex items-center justify-center animate-float delay-300">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" 
                  alt="CSS3" 
                  className="w-3 h-3 animate-ping"
                />
              </div>
              
              <div className="absolute top-3/4 -right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-violet-500 rounded-md shadow-lg"></div>
              
              <div className="absolute bottom-1/4 -left-12 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm shadow-lg"></div>
              
              {/* Marcos de fondo decorativos */}
              <div className="absolute -inset-8 rounded-3xl border-2 border-blue-200 opacity-30 animate-spin slow"></div>
              <div className="absolute -inset-12 rounded-3xl border border-indigo-300 opacity-20 animate-spin reverse-spin"></div>
              
              {/* Partículas flotantes cuadradas */}
              <div className="absolute top-10 right-16 w-2 h-2 bg-blue-400 rounded-sm animate-float"></div>
              <div className="absolute bottom-16 left-12 w-1.5 h-1.5 bg-purple-400 rounded-sm animate-float delay-100"></div>
              <div className="absolute top-1/3 right-4 w-1 h-1 bg-indigo-400 rounded-sm animate-float delay-200"></div>
              
              {/* Efecto de brillo */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"></div>
              
              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-blue-300 rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-purple-300 rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-indigo-300 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-violet-300 rounded-br-3xl"></div>
            </div>
          </div>
        </div>

        {/* Sección de habilidades destacadas */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Tecnologías que domino
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" 
                  alt="React" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">React</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                  alt="JavaScript" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">JavaScript</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" 
                  alt="Node.js" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Node.js</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" 
                  alt="Python" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Python</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" 
                  alt="PostgreSQL" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center">
                <img 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" 
                  alt="MongoDB" 
                  className="w-8 h-8"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
