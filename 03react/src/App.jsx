import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  const colors = [
    { id: 'red', name: 'Red', bgColor: 'bg-red-700', hoverColor: 'hover:bg-red-800', ringColor: 'focus:ring-red-300' },
    { id: 'yellow', name: 'Yellow', bgColor: 'bg-yellow-700', hoverColor: 'hover:bg-yellow-800', ringColor: 'focus:ring-yellow-300' },
    { id: 'white', name: 'White', bgColor: 'bg-white', hoverColor: 'hover:bg-gray-200', ringColor: 'focus:ring-gray-300', textColor: 'text-black' },
    { id: 'blue', name: 'Blue', bgColor: 'bg-blue-700', hoverColor: 'hover:bg-blue-800', ringColor: 'focus:ring-blue-300' },
    { id: 'green', name: 'Green', bgColor: 'bg-green-700', hoverColor: 'hover:bg-green-800', ringColor: 'focus:ring-green-300' },
    { id: 'violet', name: 'Violet', bgColor: 'bg-violet-700', hoverColor: 'hover:bg-violet-800', ringColor: 'focus:ring-violet-300' },
    { id: 'pink', name: 'Pink', bgColor: 'bg-pink-700', hoverColor: 'hover:bg-pink-800', ringColor: 'focus:ring-pink-300' }
  ];

  return (
    <div className="min-h-screen w-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {colors.map((colorObj) => (
          <button
            key={colorObj.id}
            type="button"
            className={`text-white ${colorObj.bgColor} ${colorObj.hoverColor} focus:outline-none focus:ring-4 ${colorObj.ringColor} font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2`}
            onClick={() => setColor(colorObj.id)}
          >
            {colorObj.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
