import React, { useState } from 'react';
import { Menu, Search, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = {
    Products: ['Software', 'Hardware', 'Services', 'Solutions'],
    Services: ['Consulting', 'Development', 'Support', 'Training'],
    About: ['Company', 'Team', 'Careers', 'Partners'],
    Contact: ['Sales', 'Support', 'Press', 'Locations']
  };

  return (
    <div className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-zinc-800/90 to-zinc-800/80 backdrop-blur-md 
                    rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] border border-zinc-700/20">
        {/* Upper Section */}
        <div className="px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-300 text-transparent bg-clip-text">
              Brand
            </h1>
            <div className="hidden md:flex relative group">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 bg-zinc-700/30 text-zinc-100 placeholder-zinc-500 rounded-xl
                         focus:outline-none focus:ring-1 focus:ring-zinc-600 w-72
                         border border-zinc-700/50 transition-all duration-300
                         group-hover:bg-zinc-700/50"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-500 group-hover:text-zinc-400 transition-colors" />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-zinc-700/50 rounded-xl transition-all duration-300
                           hover:shadow-lg hover:shadow-black/20">
              <User className="h-5 w-5 text-zinc-400 hover:text-zinc-200 transition-colors" />
            </button>
            <button className="md:hidden p-2.5 hover:bg-zinc-700/50 rounded-xl transition-all duration-300
                           hover:shadow-lg hover:shadow-black/20">
              <Menu className="h-5 w-5 text-zinc-400 hover:text-zinc-200 transition-colors" />
            </button>
          </div>
        </div>
        
        {/* Navigation Section */}
        <nav className="px-8 pb-5">
          <ul className="flex gap-10 text-zinc-400">
            <li>
              <a href="#" className="relative group flex flex-col items-center">
                <span className="font-medium text-zinc-200 group-hover:text-zinc-100 transition-colors">Home</span>
                <span className="absolute -bottom-1.5 w-2 h-0.5 bg-zinc-300 rounded-full 
                               transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            {Object.keys(menuItems).map((item) => (
              <li key={item} className="relative"
                  onMouseEnter={() => setActiveSubmenu(item)}
                  onMouseLeave={() => setActiveSubmenu(null)}>
                <a href="#" className="relative group flex items-center gap-1">
                  <span className="font-medium group-hover:text-zinc-200 transition-colors">{item}</span>
                  <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute -bottom-1.5 w-0 h-0.5 bg-zinc-400 rounded-full 
                                 transition-all duration-300 group-hover:w-full opacity-0 
                                 group-hover:opacity-100"></span>
                </a>
                
                {/* Submenu */}
                {activeSubmenu === item && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48">
                    <div className="bg-zinc-800/95 backdrop-blur-md rounded-xl p-2
                                shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-zinc-700/30">
                      <ul className="py-1">
                        {menuItems[item as keyof typeof menuItems].map((subItem) => (
                          <li key={subItem}>
                            <a href="#" 
                               className="block px-4 py-2 text-sm text-zinc-400 hover:text-zinc-100
                                        hover:bg-zinc-700/50 rounded-lg transition-all duration-200">
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;