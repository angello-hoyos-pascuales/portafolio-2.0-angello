import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <img src="./logo.png" alt="Logo" className="w-8 h-8 rounded-lg mr-3" />
            <span className="text-lg font-semibold">Angello A. Hoyos Pascuales</span>
          </div>
          <p className="text-gray-300">
            © 2025 Angello Andres Hoyos Pascuales. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
