import React, { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 transition-colors">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-lg hidden sm:block">Ing. Angello A. Hoyos Pascuales</span>
            <span className="font-bold text-lg sm:hidden">A. Hoyos</span>
          </NavLink>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={({ isActive }) => 
              `px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`
            }>
              Inicio
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`
            }>
              Sobre mí
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              `px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`
            }>
              Proyectos
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`
            }>
              Contacto
            </NavLink>
          </div>
          
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="py-2 space-y-1">
              <NavLink to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                Inicio
              </NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                Sobre mí
              </NavLink>
              <NavLink to="/projects" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                Proyectos
              </NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600">
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
