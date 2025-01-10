import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="pt-40 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-100">Welcome</h1>
          <p className="mt-4 text-zinc-400">Start prompting (or editing) to see magic happen :)</p>
          
          {/* Example content */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30">
                <h2 className="text-xl font-semibold text-zinc-100">Feature {i}</h2>
                <p className="mt-2 text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;