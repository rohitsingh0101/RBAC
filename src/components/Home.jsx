import React from 'react';
import { Hero } from './Hero';
import { Features } from './Features';
import { Stats } from './Stats';
import { QuickActions } from './QuickActions';
import { RecentActivity } from './RecentActivity';

export const Home = ({ onNavigate }) => {
  return (
    <div className="bg-gray-50">
      <Hero onNavigate={onNavigate} />
      <Stats />
      <Features onNavigate={onNavigate} />
      <QuickActions onNavigate={onNavigate} />
      <RecentActivity />
    </div>
  );
};
