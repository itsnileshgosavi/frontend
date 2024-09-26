import React, { useState } from 'react';
import NavItem from './NavItem';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Gamepad, Newspaper, Trophy, Lightbulb } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, isExpanded, setIsExpanded }) => {
  
  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: Compass, label: 'Explore' },
    { icon: PlaySquare, label: 'Subscriptions' },
    { icon: Film, label: 'Originals' },
    { icon: Gamepad, label: 'Gaming' },
    { icon: Newspaper, label: 'News' },
    { icon: Trophy, label: 'Sports' },
    { icon: Lightbulb, label: 'Learning' },
  ];
 
  return (
    <div 
      className={`fixed top-14 left-0 h-full bg-background text-text transition-all duration-500 ease-linear ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isExpanded ? 'w-64' : 'w-20'} z-50`}
    >
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <NavItem key={index} Icon={item.icon} label={item.label} isExpanded={isExpanded} isOpen={isOpen} onClose={onClose} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;

