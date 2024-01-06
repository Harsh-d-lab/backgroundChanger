import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="w-16 h-16 rounded-full text-white bg-red-500" onClick={() => setColor("red")}>Red</button>
          <button className="w-16 h-16 rounded-full text-white bg-blue-500" onClick={() => setColor("blue")}>Blue</button>
          <button className="w-16 h-16 rounded-full text-white bg-green-500" onClick={() => setColor("green")}>Green</button>
          <button className="w-16 h-16 rounded-full text-white bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
          <button className="w-16 h-16 rounded-full text-white bg-purple-500" onClick={() => setColor("purple")}>Purple</button>
          <button className="w-16 h-16 rounded-full text-white bg-pink-500" onClick={() => setColor("pink")}>Pink</button>
          <button className="w-16 h-16 rounded-full text-white bg-gray-500" onClick={() => setColor("gray")}>Gray</button>
          <button className="w-16 h-16 rounded-full text-white bg-black" onClick={() => setColor("black")}>Black</button>
          <button className="w-16 h-16 rounded-full text-white bg-white" onClick={() => setColor("white")}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
